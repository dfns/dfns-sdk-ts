'use client'

import { useState, useEffect, useCallback } from 'react'
import { DfnsBrowserSigningManager } from '@dfns/lib-polymesh/src/signing-manager/browser'
import { Polymesh } from '@polymeshassociation/polymesh-sdk'
import type { InjectedAccountWithMeta } from '@dfns/lib-polymesh/src/types'

interface Wallet {
  id: string
  name?: string
  network: string
  address: string
}

interface Status {
  type: 'success' | 'error' | 'info'
  message: string
}

interface DfnsBrowserConfig {
  connection: {
    baseUrl: string
    orgId: string
  }
  auth: {
    webAuthnConf: {
      relyingParty: {
        id: string
        name: string
      }
      timeout?: number
    }
    storageType?: 'localStorage' | 'sessionStorage' | 'none'
  }
}

/**
 * Helper function to handle user login with automatic SDK integration
 *
 * This encapsulates the recommended pattern for multi-user authentication:
 * 1. Create NEW signing manager instance with username (fresh signers)
 * 2. Verify authentication was successful
 * 3. Update Polymesh SDK with new signing manager (refreshes SDK signers)
 *
 * This ensures that each user gets fresh signer instances and the SDK's
 * internal signers are properly updated for the new user.
 *
 * @param polymesh - Polymesh SDK instance to update
 * @param config - DFNS configuration for signing manager creation
 * @param username - Username for authentication
 * @returns Promise resolving to new authenticated signing manager
 */
async function loginUser(
  polymesh: Polymesh | null,
  config: DfnsBrowserConfig,
  username: string
): Promise<DfnsBrowserSigningManager> {
  // Create a NEW signing manager instance with the provided username
  const newManager = await DfnsBrowserSigningManager.create({
    connection: config.connection,
    auth: {
      ...config.auth,
      username,
    },
  })

  // Verify authentication was successful
  const authenticated = await newManager?.isAuthenticated()
  if (!authenticated || !newManager) {
    throw new Error('Authentication failed')
  }

  // Update the Polymesh SDK with the new signing manager (fresh signers)
  if (polymesh) {
    await polymesh.setSigningManager(newManager)
    console.log('Polymesh SDK updated successfully')
    console.log(newManager)
  }

  return newManager
}

export default function Home() {
  // Config constants - these should be stable and not trigger effects
  const config = {
    baseUrl: process.env.NEXT_PUBLIC_DFNS_BASE_URL || '',
    orgId: process.env.NEXT_PUBLIC_DFNS_ORG_ID || '',
    relyingPartyId: process.env.NEXT_PUBLIC_RELYING_PARTY_ID || '',
    relyingPartyName: process.env.NEXT_PUBLIC_RELYING_PARTY_NAME || '',
    nodeUrl: process.env.NEXT_PUBLIC_POLYMESH_NODE_URL || '',
    network: process.env.NEXT_PUBLIC_POLYMESH_NETWORK || '',
    defaultUsername: process.env.NEXT_PUBLIC_DEFAULT_USERNAME || '',
  }

  const [username, setUsername] = useState(config.defaultUsername)
  const storageType = 'localStorage' as const // Hardcoded to localStorage

  const [signingManager, setSigningManager] = useState<DfnsBrowserSigningManager | null>(null)
  const [polymesh, setPolymesh] = useState<Polymesh | null>(null)
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([])
  const [wallets, setWallets] = useState<Wallet[]>([])
  const [status, setStatus] = useState<Status | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUsername, setCurrentUsername] = useState<string | null>(null)
  const [output, setOutput] = useState('')

  // Send POLYX state
  const [sendToAddress, setSendToAddress] = useState('')
  const [sendAmount, setSendAmount] = useState('')
  const [selectedAccount, setSelectedAccount] = useState('')
  const [accountBalance, setAccountBalance] = useState<string | null>(null)

  const addOutput = useCallback((message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setOutput((prev) => `[${timestamp}] ${message}\n${prev}`)
  }, [])

  const showStatus = useCallback(
    (type: 'success' | 'error' | 'info', message: string) => {
      setStatus({ type, message })
      addOutput(`${type.toUpperCase()}: ${message}`)
      setTimeout(() => setStatus(null), 5000)
    },
    [addOutput]
  )

  const handleGetWallets = useCallback(async () => {
    if (!signingManager) {
      showStatus('error', 'Signing manager not initialized')
      return
    }

    try {
      addOutput('Fetching wallets...')
      const walletList = await signingManager.getWallets()
      setWallets(walletList)
      addOutput(`Found ${walletList.length} wallets`)
      showStatus('success', `Found ${walletList.length} wallets`)
    } catch (error) {
      showStatus('error', `Failed to get wallets: ${error}`)
      console.error('Error getting wallets:', error)
    }
  }, [addOutput, showStatus, signingManager])

  const handleGetAccounts = useCallback(async () => {
    if (!signingManager) {
      showStatus('error', 'Signing manager not initialized')
      return
    }

    try {
      addOutput('Fetching accounts...')
      const accountList = await signingManager.getAccountsWithMeta()
      setAccounts(accountList)
      addOutput(`Found ${accountList.length} accounts`)
      showStatus('success', `Found ${accountList.length} accounts`)

      // Auto-select first account if none selected
      if (accountList.length > 0 && !selectedAccount) {
        setSelectedAccount(accountList[0].address)
      }
    } catch (error) {
      showStatus('error', `Failed to get accounts: ${error}`)
      console.error('Error getting accounts:', error)
    }
  }, [addOutput, selectedAccount, showStatus, signingManager])

  // Helper function to set up logout callback for signing manager
  const setupLogoutCallback = useCallback(
    (manager: DfnsBrowserSigningManager) => {
      return manager.onLoggedOut(() => {
        addOutput('User logged out - clearing signing manager')
        setSigningManager(null)
        setIsAuthenticated(false)
        setCurrentUsername(null)
        setAccounts([])
        setWallets([])
        setAccountBalance(null)
        showStatus('info', 'Session expired - please log in again')
      })
    },
    [addOutput, showStatus]
  )

  const handleLogin = useCallback(
    async (username?: string) => {
      // If no username provided, show error
      if (!username) {
        showStatus('error', 'Username is required for authentication')
        return
      }

      try {
        setOutput('')
        addOutput('Starting authentication...')

        // Use the helper function to handle login and SDK integration
        const loginConfig: DfnsBrowserConfig = {
          connection: {
            baseUrl: config.baseUrl,
            orgId: config.orgId,
          },
          auth: {
            webAuthnConf: {
              relyingParty: {
                id: config.relyingPartyId,
                name: config.relyingPartyName,
              },
              timeout: 60000,
            },
            storageType: 'localStorage' as const,
          },
        }

        addOutput('Creating new signing manager and updating SDK...')

        // 🔑 KEY PATTERN: loginUser() creates fresh signing manager + updates SDK signers
        // This ensures each user gets clean signer state and SDK is properly synchronized
        const newManager = await loginUser(polymesh, loginConfig, username)

        // Update state with the new signing manager
        setSigningManager(newManager)
        setIsAuthenticated(true)

        // Set up logout callback to handle automatic logout scenarios
        setupLogoutCallback(newManager)

        // Get the current username after successful authentication
        const currentUser = await newManager.getCurrentUsername()
        setCurrentUsername(currentUser)

        const statusMsg = currentUser ? `Authenticated as: ${currentUser}` : 'Authenticated successfully'
        addOutput(statusMsg)
        addOutput('SDK signers updated with new user credentials')
        showStatus('success', statusMsg)
      } catch (error) {
        console.error('Login failed:', error)
        showStatus('error', `Login failed: ${error}`)
      }
    },
    [
      config.baseUrl,
      config.orgId,
      config.relyingPartyId,
      config.relyingPartyName,
      addOutput,
      showStatus,
      polymesh,
      setupLogoutCallback,
    ]
  )

  const handleLoginClick = useCallback(() => {
    handleLogin(username || undefined)
  }, [handleLogin, username])

  const handleLogout = async () => {
    if (!signingManager) {
      showStatus('error', 'Signing manager not initialized')
      return
    }

    try {
      addOutput('Logging out...')

      // This will trigger the onLoggedOut callback which handles state cleanup
      await signingManager.logout()

      showStatus('success', 'Logged out successfully!')
    } catch (error) {
      showStatus('error', `Logout failed: ${error}`)
      console.error('Logout error:', error)
    }
  }

  const handleCheckAuth = async () => {
    if (!signingManager) {
      showStatus('error', 'Signing manager not initialized')
      return
    }

    try {
      const authenticated = await signingManager.isAuthenticated()
      setIsAuthenticated(authenticated)
      addOutput(`Authentication check: ${authenticated}`)
      showStatus('info', `Authentication status: ${authenticated}`)
    } catch (error) {
      showStatus('error', `Failed to check authentication: ${error}`)
      console.error('Error checking authentication:', error)
    }
  }

  const clearOutput = () => {
    setOutput('')
  }

  const handleSendPolyx = async () => {
    if (!polymesh || !sendToAddress || !sendAmount || !selectedAccount) {
      showStatus('error', 'Please fill in all fields and ensure Polymesh is connected')
      return
    }

    try {
      addOutput(`Sending ${sendAmount} POLYX from ${selectedAccount} to ${sendToAddress}`)

      // Import BigNumber for amount conversion
      const { BigNumber } = await import('@polymeshassociation/polymesh-sdk')

      // Create the transfer transaction
      const transfer = await polymesh.network.transferPolyx({
        to: sendToAddress,
        amount: new BigNumber(sendAmount),
      })

      addOutput('Transfer transaction created, submitting...')

      await transfer.run()
      addOutput(`Transfer completed successfully!`)
      showStatus('success', `Successfully sent ${sendAmount} POLYX`)
    } catch (error) {
      showStatus('error', `Failed to send POLYX: ${error}`)
      console.error('Error sending POLYX:', error)
    }
  }

  // 1. Initialize Polymesh SDK (no signing manager, single instance for app lifetime)
  useEffect(() => {
    let isMounted = true

    const initializePolymesh = async () => {
      if (!config.nodeUrl || typeof window === 'undefined') {
        return
      }

      try {
        addOutput('Initializing Polymesh SDK...')
        const sdk = await Polymesh.connect({
          nodeUrl: config.nodeUrl,
          // No signing manager - will be set later via setSigningManager
        })

        if (!isMounted) return

        setPolymesh(sdk)
        addOutput('Polymesh SDK initialized successfully')
        showStatus('success', 'Connected to Polymesh!')

        // Get network info
        const networkVersion = await sdk.network.getVersion()
        addOutput(`Network version: ${networkVersion}`)
      } catch (error) {
        if (isMounted) {
          addOutput(`Failed to initialize Polymesh SDK: ${error}`)
          console.error('Error initializing Polymesh SDK:', error)
        }
      }
    }

    initializePolymesh()

    return () => {
      isMounted = false
    }
  }, [config.nodeUrl, addOutput, showStatus])

  // 2. Try to restore signing manager from cache (restoreOnly mode)
  useEffect(() => {
    let isMounted = true

    const restoreSigningManager = async () => {
      if (!config.baseUrl || !config.orgId || typeof window === 'undefined') {
        return
      }

      try {
        addOutput('Attempting to restore cached authentication...')

        const manager = await DfnsBrowserSigningManager.create({
          connection: {
            baseUrl: config.baseUrl,
            orgId: config.orgId,
          },
          auth: {
            webAuthnConf: {
              relyingParty: {
                id: config.relyingPartyId,
                name: config.relyingPartyName,
              },
              timeout: 60000,
            },
            storageType,
            restoreOnly: true, // Only attempt to restore from cache, no user interaction
          },
        })

        if (!isMounted) return

        if (!manager) {
          addOutput('No cached authentication found')
          setSigningManager(null)
          setIsAuthenticated(false)
          setCurrentUsername(null)
        } else {
          addOutput('Signing manager restored from cache')
          setSigningManager(manager)

          // Set up logout callback for restored manager
          setupLogoutCallback(manager)

          // Check if restored manager is authenticated
          const authenticated = await manager.isAuthenticated()
          if (!isMounted) return

          setIsAuthenticated(authenticated)

          if (authenticated) {
            // Get username for authenticated user
            try {
              const currentUser = await manager.getCurrentUsername()
              if (!isMounted) return
              setCurrentUsername(currentUser)
              addOutput(currentUser ? `Restored session for: ${currentUser}` : 'Session restored')
              showStatus('success', 'Authentication restored from cache')
            } catch (error) {
              console.warn('Could not get username:', error)
            }
          } else {
            addOutput('Restored signing manager is not authenticated')
          }
        }
      } catch (error) {
        if (isMounted) {
          addOutput(`Failed to restore signing manager: ${error}`)
          console.error('Error restoring signing manager:', error)
        }
      }
    }

    restoreSigningManager()

    return () => {
      isMounted = false
    }
  }, [
    config.baseUrl,
    config.orgId,
    config.relyingPartyId,
    config.relyingPartyName,
    addOutput,
    showStatus,
    setupLogoutCallback,
  ])

  // 3. Update SDK signing manager when signing manager changes (user login/logout)
  useEffect(() => {
    let isMounted = true

    const updateSDKSigningManager = async () => {
      if (!polymesh) {
        return // Wait for Polymesh SDK to be initialized
      }

      try {
        // Update Polymesh SDK with current signing manager (null is valid - clears the signing manager)
        addOutput(signingManager ? 'Updating SDK with signing manager...' : 'Clearing signing manager from SDK...')
        await polymesh.setSigningManager(signingManager)
        addOutput(signingManager ? 'SDK signing manager updated' : 'SDK signing manager cleared')

        // If we have an authenticated signing manager, load wallets and accounts
        if (signingManager && (await signingManager.isAuthenticated())) {
          try {
            addOutput('Loading wallets and accounts...')

            const walletList = await signingManager.getWallets()
            if (!isMounted) return
            setWallets(walletList)
            addOutput(`Loaded ${walletList.length} wallets`)

            const accountList = await signingManager.getAccountsWithMeta()
            if (!isMounted) return
            setAccounts(accountList)
            addOutput(`Loaded ${accountList.length} accounts`)
          } catch (error) {
            if (isMounted) {
              addOutput(`Warning: Could not load wallets/accounts: ${error}`)
            }
          }
        } else {
          // Clear wallets and accounts if no authenticated signing manager
          setWallets([])
          setAccounts([])
          setSelectedAccount('')
          setAccountBalance(null) // Clear balance when no authenticated manager
        }
      } catch (error) {
        if (isMounted) {
          addOutput(`Failed to update SDK signing manager: ${error}`)
          console.error('Error updating SDK signing manager:', error)
        }
      }
    }

    updateSDKSigningManager()

    return () => {
      isMounted = false
    }
  }, [polymesh, signingManager, addOutput]) // React to changes in polymesh or signingManager

  // 4. Auto-select first account when accounts are loaded and none is selected
  useEffect(() => {
    if (accounts.length > 0 && !selectedAccount) {
      setSelectedAccount(accounts[0].address)
    }
  }, [accounts, selectedAccount])

  // 5. Set signing account and subscribe to balance when selected account changes
  useEffect(() => {
    let unsubscribe: (() => void) | null = null

    const setupAccountAndBalance = async () => {
      if (selectedAccount && polymesh) {
        try {
          // Set the signing account in the Polymesh SDK
          polymesh.setSigningAccount(selectedAccount)
          addOutput(`Set signing account to: ${selectedAccount}`)

          // Subscribe to balance updates for the selected account
          addOutput(`Subscribing to POLYX balance for ${selectedAccount}...`)
          
          const account = await polymesh.accountManagement.getAccount({ address: selectedAccount })
          unsubscribe = await account.getBalance((balance) => {
            const balanceStr = balance.free.toString()
            setAccountBalance(balanceStr)
            addOutput(`Account balance updated: ${balanceStr} POLYX`)
          })
        } catch (error) {
          console.error('Error setting up account balance subscription:', error)
          addOutput(`Failed to set up balance subscription: ${error}`)
          setAccountBalance(null)
        }
      } else {
        setAccountBalance(null)
      }
    }

    setupAccountAndBalance()

    // Cleanup function to unsubscribe when dependencies change or component unmounts
    return () => {
      if (unsubscribe) {
        unsubscribe()
        addOutput(`Unsubscribed from balance updates for ${selectedAccount}`)
      }
    }
  }, [selectedAccount, polymesh, addOutput])

  return (
    <div className="container">
      <div className="header">
        <h1>DFNS Polymesh Browser Signing Manager Test</h1>
        <p>Test functionality of the DFNS Browser Signing Manager with Polymesh SDK</p>
      </div>

      {status && <div className={`status ${status.type}`}>{status.message}</div>}

      <div className="grid">
        <div>
          <div className="section">
            <h2>Authentication & Signing Manager</h2>
            <div className="form-group">
              <label>Username (optional):</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="user@example.com"
              />
            </div>
            <div className="button-group">
              <button onClick={handleLoginClick} disabled={isAuthenticated}>
                Login
              </button>
              <button className="danger" onClick={handleLogout} disabled={!signingManager || !isAuthenticated}>
                Logout
              </button>
              <button onClick={handleCheckAuth} disabled={!signingManager}>
                Check Authentication
              </button>
            </div>
          </div>

          <div className="section">
            <h2>Wallet & Account Actions</h2>
            <div className="button-group">
              <button onClick={handleGetWallets} disabled={!signingManager || !isAuthenticated}>
                Get Wallets
              </button>
              <button onClick={handleGetAccounts} disabled={!signingManager || !isAuthenticated}>
                Get Accounts
              </button>
            </div>
          </div>

          <div className="section">
            <h2>Send POLYX Transaction</h2>
            <div className="form-group">
              <label>From Account:</label>
              <select
                value={selectedAccount}
                onChange={(e) => setSelectedAccount(e.target.value)}
                disabled={!polymesh || accounts.length === 0}
              >
                <option value="">Select account...</option>
                {accounts.map((account) => (
                  <option key={account.address} value={account.address}>
                    {account.meta.name} ({account.address})
                  </option>
                ))}
              </select>
            </div>
            {selectedAccount && (
              <div className="form-group">
                <label>Available Balance:</label>
                <div
                  className="output"
                  style={{
                    padding: '8px',
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px',
                  }}
                >
                  {accountBalance ? `${accountBalance} POLYX` : 'Loading balance...'}
                </div>
              </div>
            )}
            <div className="form-group">
              <label>To Address:</label>
              <input
                type="text"
                value={sendToAddress}
                onChange={(e) => setSendToAddress(e.target.value)}
                placeholder="Recipient address..."
                disabled={!polymesh}
              />
            </div>
            <div className="form-group">
              <label>Amount (POLYX):</label>
              <input
                type="number"
                value={sendAmount}
                onChange={(e) => setSendAmount(e.target.value)}
                placeholder="0.0"
                min="0"
                step="0.000001"
                disabled={!polymesh}
              />
            </div>
            <div className="button-group">
              <button
                className="primary"
                onClick={handleSendPolyx}
                disabled={!polymesh || !selectedAccount || !sendToAddress || !sendAmount}
              >
                Send POLYX
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="section">
            <h2>Status</h2>
            <p>
              <strong>Signing Manager:</strong> {signingManager ? '✅ Initialized' : '❌ Not Initialized'}
            </p>
            <p>
              <strong>Polymesh:</strong> {polymesh ? '✅ Connected' : '❌ Not Connected'}
            </p>
            <p>
              <strong>Logged In:</strong> {isAuthenticated ? '✅ Logged In' : '❌ Not Logged In'}
            </p>
            {isAuthenticated && currentUsername && (
              <p>
                <strong>Username:</strong> {currentUsername}
              </p>
            )}
            <p>
              <strong>Wallets:</strong> {wallets.length}
            </p>
            <p>
              <strong>Accounts:</strong> {accounts.length}
            </p>
          </div>

          <div className="section">
            <h2>Environment</h2>
            <div className="output">
              <strong>Base URL:</strong> {config.baseUrl || 'Not set'}
              <br />
              <strong>Org ID:</strong> {config.orgId || 'Not set'}
              <br />
              <strong>Relying Party ID:</strong> {config.relyingPartyId || 'Not set'}
              <br />
              <strong>Node URL:</strong> {config.nodeUrl || 'Not set'}
              <br />
              <strong>Network:</strong> {config.network || 'Not set'}
            </div>
          </div>

          {wallets.length > 0 && (
            <div className="section">
              <h2>Wallets ({wallets.length})</h2>
              <div className="output">
                {wallets.map((wallet, index) => (
                  <div key={index}>
                    <strong>ID:</strong> {wallet.id}
                    <br />
                    <strong>Name:</strong> {wallet.name || 'Unnamed'}
                    <br />
                    <strong>Network:</strong> {wallet.network}
                    <br />
                    <strong>Address:</strong> {wallet.address}
                    <br />
                    ---
                  </div>
                ))}
              </div>
            </div>
          )}

          {accounts.length > 0 && (
            <div className="section">
              <h2>Accounts ({accounts.length})</h2>
              <div className="output">
                {accounts.map((account, index) => (
                  <div key={index}>
                    <strong>Address:</strong> {account.address}
                    <br />
                    <strong>Name:</strong> {account.meta.name}
                    <br />
                    <strong>Source:</strong> {account.meta.source}
                    <br />
                    <strong>Type:</strong> {account.type}
                    <br />
                    ---
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="section">
        <h2>Output Log</h2>
        <div className="button-group">
          <button onClick={clearOutput}>Clear Output</button>
        </div>
        <div className="output">{output || 'No output yet...'}</div>
      </div>
    </div>
  )
}
