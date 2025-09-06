# DFNS Polymesh Browser Signing Manager - Next.js Example

A comprehensive Next.js demo showing DFNS Browser Signing Manager integration with Polymesh SDK, featuring multi-user authentication, transaction processing, and real-time balance monitoring.

## Features

- **WebAuthn Authentication** with multi-user support
- **Token Caching** (localStorage, sessionStorage, or none)
- **Automatic Session Management** with logout callbacks
- **Multi-Wallet Discovery** across Polymesh networks
- **POLYX Transactions** with real-time balance updates
- **Comprehensive Logging** for debugging

## Prerequisites

- DFNS organization with WebAuthn user credentials
- Polymesh wallets created in DFNS
- WebAuthn-compatible browser

## Setup

```bash
# Install dependencies
cd examples/libs/polymesh/browser-signing-manager-nextjs
npm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your DFNS settings

# Run application
npm run dev
```

### Environment Variables

```bash
NEXT_PUBLIC_DFNS_BASE_URL=https://api.dfns.ninja
NEXT_PUBLIC_DFNS_ORG_ID=your-org-id
NEXT_PUBLIC_RELYING_PARTY_ID=localhost
NEXT_PUBLIC_RELYING_PARTY_NAME=Your App Name
NEXT_PUBLIC_POLYMESH_NODE_URL=wss://testnet-rpc.polymesh.live
NEXT_PUBLIC_POLYMESH_NETWORK=PolymeshTestnet
```

## Usage

### Authentication

- **Login**: Enter DFNS username → WebAuthn authentication → fresh signing manager created
- **Logout**: Clears authentication state and cached tokens
- **Multi-User**: Each login creates a new signing manager instance

### Wallet Operations

- **Get Wallets**: Discover DFNS wallets (requires authentication)
- **Get Accounts**: Browser extension compatible account list
- **Account Selection**: Auto-selects first account for transactions

### Transactions

- **Real-time Balance**: Live POLYX balance with subscription cleanup
- **Send POLYX**: Transfer between accounts with confirmation
- **Status Updates**: Transaction progress and error handling

### Monitoring

- **Authentication Status**: Current login state and username
- **Connection Status**: Polymesh SDK and signing manager status
- **Logging**: Detailed operation logs with timestamps

## Key Implementation Details

### Multi-User Authentication Pattern

```typescript
// Fresh signing manager per user login
const manager = await DfnsBrowserSigningManager.create({
  connection: { baseUrl, orgId },
  auth: { webAuthnConf, username },
})

// Automatic Polymesh SDK integration
await polymesh.setSigningManager(manager)
```

### Logout Callback Setup

```typescript
const unsubscribe = manager.onLoggedOut(() => {
  setSigningManager(null)
  setIsAuthenticated(false)
  // Additional cleanup...
})
```

### Balance Subscription with Cleanup

```typescript
useEffect(() => {
  let unsubscribe: (() => void) | null = null

  if (selectedAccount && polymesh) {
    const account = await polymesh.accountManagement.getAccount({
      address: selectedAccount,
    })
    unsubscribe = await account.getBalance((balance) => {
      setAccountBalance(balance.free.toString())
    })
  }

  return () => unsubscribe?.()
}, [selectedAccount, polymesh])
```

This example demonstrates production-ready patterns for integrating DFNS Browser Signing Manager with Polymesh SDK in Next.js applications.
