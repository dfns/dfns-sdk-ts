'use client'

import { useState, useEffect, useCallback } from 'react'
import { apiService } from '@/lib/api-service'

/**
 * DFNS External Signing Manager - Main Application Component
 *
 * This component demonstrates the complete External Signing Manager pattern:
 * - Frontend handles user interaction and WebAuthn
 * - Backend manages all DFNS operations and session state
 * - Centralized API service abstracts all backend communication
 */

interface Wallet {
  id: string
  network: string
  address: string
  status: string
}

interface Account {
  address: string
  meta?: {
    name?: string
  }
}

interface Status {
  type: 'success' | 'error' | 'info'
  message: string
}

export default function Home() {
  // Application State
  const [username, setUsername] = useState('')
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUsername, setCurrentUsername] = useState<string | null>(null)
  const [wallets, setWallets] = useState<Wallet[]>([])
  const [accounts, setAccounts] = useState<Account[]>([])
  const [status, setStatus] = useState<Status | null>(null)
  const [output, setOutput] = useState('')

  // Session Management
  const SESSION_STORAGE_KEY = 'dfns-polymesh-session-id'

  const saveSessionToStorage = useCallback((sessionId: string) => {
    try {
      localStorage.setItem(SESSION_STORAGE_KEY, sessionId)
    } catch (error) {
      console.warn('Failed to save session to localStorage:', error)
    }
  }, [])

  const getSessionFromStorage = useCallback((): string | null => {
    try {
      return localStorage.getItem(SESSION_STORAGE_KEY)
    } catch (error) {
      console.warn('Failed to get session from localStorage:', error)
      return null
    }
  }, [])

  const clearSessionFromStorage = useCallback(() => {
    try {
      localStorage.removeItem(SESSION_STORAGE_KEY)
    } catch (error) {
      console.warn('Failed to clear session from localStorage:', error)
    }
  }, [])

  // POLYX Transfer State
  const [sendToAddress, setSendToAddress] = useState('')
  const [sendAmount, setSendAmount] = useState('')
  const [selectedAccount, setSelectedAccount] = useState('')
  const [accountBalance, setAccountBalance] = useState<string | null>(null)

  // UI Helper Functions
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

  // Load wallets and accounts automatically after authentication
  // This function is called after both login and session restoration
  const loadUserData = useCallback(
    async (sessionId: string) => {
      try {
        addOutput('Loading wallets and accounts...')
        const [walletsResult, accountsResult] = await Promise.all([
          apiService.wallets.getWallets(sessionId),
          apiService.accounts.getAccounts(sessionId),
        ])

        setWallets(walletsResult)
        setAccounts(accountsResult)

        addOutput(`Found ${walletsResult.length} wallets and ${accountsResult.length} accounts`)

        // Auto-select first account if none selected
        if (accountsResult.length > 0 && !selectedAccount) {
          setSelectedAccount(accountsResult[0].address)
        }
      } catch (error) {
        addOutput(`Failed to load wallets/accounts: ${error}`)
        console.error('Error loading wallets/accounts:', error)
      }
    },
    [addOutput, selectedAccount]
  )

  // Session Restoration
  // Attempts to restore session from localStorage on page load
  const restoreSession = useCallback(async () => {
    if (typeof window === 'undefined') return

    // Only attempt restoration if not already authenticated
    if (isAuthenticated) {
      return
    }

    const cachedSessionId = getSessionFromStorage()
    if (!cachedSessionId) {
      addOutput('No cached session found')
      return
    }

    try {
      addOutput('Attempting to restore cached session...')

      const result = await apiService.auth.login(
        {
          restoreOnly: true,
          sessionId: cachedSessionId,
        },
        (message: string) => addOutput(message)
      )

      setSessionId(result.sessionId)
      setIsAuthenticated(true)
      setCurrentUsername(result.username)

      addOutput(`Session restored for: ${result.username}`)
      showStatus('success', 'Session restored from cache')

      // Load user data automatically after session restoration
      await loadUserData(result.sessionId)
    } catch (error) {
      addOutput(`Failed to restore session: ${error}`)
      clearSessionFromStorage() // Clear invalid session
      console.warn('Session restoration failed:', error)
    }
  }, [isAuthenticated, getSessionFromStorage, addOutput, showStatus, clearSessionFromStorage, loadUserData])

  // Attempt to restore session on component mount
  useEffect(() => {
    restoreSession()
  }, [])

  // User Authentication
  // Handles login flow with WebAuthn challenge signing
  const handleLogin = useCallback(
    async (usernameToLogin?: string) => {
      // Validate username
      if (!usernameToLogin) {
        showStatus('error', 'Username is required for authentication')
        return
      }

      try {
        setOutput('')
        addOutput('Starting authentication...')

        // Complete login flow with WebAuthn handled by API service
        const result = await apiService.auth.login(
          {
            username: usernameToLogin,
          },
          (message: string) => addOutput(message)
        )

        // Update authentication state
        setSessionId(result.sessionId)
        setIsAuthenticated(true)
        setCurrentUsername(result.username)
        saveSessionToStorage(result.sessionId)

        showStatus('success', `Authenticated as: ${result.username}`)

        // Load user data automatically after successful login
        await loadUserData(result.sessionId)
      } catch (error) {
        console.error('Login failed:', error)
        const errorMessage = error instanceof Error ? error.message : `Login failed: ${error}`
        showStatus('error', errorMessage)
      }
    },
    [addOutput, showStatus, saveSessionToStorage, loadUserData]
  )

  const handleLoginClick = useCallback(() => {
    handleLogin(username || undefined)
  }, [handleLogin, username])

  // User Logout
  // Cleans up session on both frontend and backend
  const handleLogout = async () => {
    if (!sessionId) {
      showStatus('error', 'No active session to logout')
      return
    }

    try {
      addOutput('Logging out...')

      await apiService.auth.logout(sessionId)

      // Clear all state
      // Clear application state
      setSessionId(null)
      setIsAuthenticated(false)
      setCurrentUsername(null)
      setWallets([])
      setAccounts([])
      setSelectedAccount('')
      setAccountBalance(null)
      setSendToAddress('')
      setSendAmount('')
      clearSessionFromStorage()

      addOutput('Session cleared successfully')
      showStatus('success', 'Logged out successfully!')
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : `Logout failed: ${error}`
      showStatus('error', errorMessage)
      console.error('Logout error:', error)
    }
  }

  // Load balance when account is selected
  // POLYX Operations
  // Automatically load balance when account selection changes
  useEffect(() => {
    const loadBalance = async () => {
      if (selectedAccount && sessionId) {
        try {
          addOutput(`Getting balance for ${selectedAccount}...`)
          const balance = await apiService.polyx.getBalance(sessionId, selectedAccount)
          setAccountBalance(balance.free)
          addOutput(`Balance: ${balance.free} POLYX (${balance.locked} locked)`)
        } catch (error) {
          console.error('Error loading balance:', error)
          addOutput(`Failed to load balance: ${error}`)
          setAccountBalance(null)
        }
      } else {
        setAccountBalance(null)
      }
    }

    loadBalance()
  }, [selectedAccount, sessionId, addOutput])

  // POLYX Transfer with WebAuthn Signing
  const handleSendPolyx = async () => {
    if (!sessionId || !selectedAccount || !sendToAddress || !sendAmount) {
      showStatus('error', 'Please fill in all fields and ensure you are logged in')
      return
    }

    try {
      addOutput(`Sending ${sendAmount} POLYX from ${selectedAccount} to ${sendToAddress}`)

      await apiService.polyx.sendPolyx(sessionId, selectedAccount, sendToAddress, sendAmount, (message: string) =>
        addOutput(message)
      )

      addOutput('Transfer completed successfully!')
      showStatus('success', `Successfully sent ${sendAmount} POLYX`)

      // Clear form and reload balance
      setSendToAddress('')
      setSendAmount('')

      // Reload balance after successful transfer
      if (selectedAccount) {
        try {
          const balance = await apiService.polyx.getBalance(sessionId, selectedAccount)
          setAccountBalance(balance.free)
          addOutput(`Updated balance: ${balance.free} POLYX`)
        } catch (error) {
          console.error('Error reloading balance:', error)
        }
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : `Failed to send POLYX: ${error}`
      showStatus('error', errorMessage)
      console.error('Error sending POLYX:', error)
    }
  }

  const clearOutput = () => {
    setOutput('')
  }

  return (
    <div className="container">
      <div className="header">
        <h1>DFNS External Signing Manager - Polymesh Reference</h1>
        <p>Complete reference implementation demonstrating backend DFNS integration with frontend WebAuthn</p>
      </div>

      {status && <div className={`status ${status.type}`}>{status.message}</div>}

      <div className="grid">
        <div>
          <div className="section">
            <h2>Authentication</h2>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="user@example.com"
                disabled={isAuthenticated}
              />
            </div>
            <div className="button-group">
              <button onClick={handleLoginClick} disabled={isAuthenticated || !username.trim()}>
                Login
              </button>
              <button className="danger" onClick={handleLogout} disabled={!isAuthenticated}>
                Logout
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
                disabled={!isAuthenticated || accounts.length === 0}
              >
                <option value="">Select account...</option>
                {accounts.map((account) => (
                  <option key={account.address} value={account.address}>
                    {account.meta?.name || 'Unnamed'} ({account.address})
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
                disabled={!isAuthenticated}
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
                disabled={!isAuthenticated}
              />
            </div>
            <div className="button-group">
              <button
                className="primary"
                onClick={handleSendPolyx}
                disabled={!isAuthenticated || !selectedAccount || !sendToAddress || !sendAmount}
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
            {selectedAccount && (
              <p>
                <strong>Selected Account:</strong> {selectedAccount}
              </p>
            )}
            {accountBalance && (
              <p>
                <strong>Balance:</strong> {accountBalance} POLYX
              </p>
            )}
          </div>

          {wallets.length > 0 && (
            <div className="section">
              <h2>Wallets ({wallets.length})</h2>
              <div className="output">
                {wallets.map((wallet, index) => (
                  <div key={index}>
                    <strong>ID:</strong> {wallet.id}
                    <br />
                    <strong>Network:</strong> {wallet.network}
                    <br />
                    <strong>Address:</strong> {wallet.address}
                    <br />
                    <strong>Status:</strong> {wallet.status}
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
                    {account.meta?.name && (
                      <>
                        <strong>Name:</strong> {account.meta.name}
                        <br />
                      </>
                    )}
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
