# DFNS Signing Manager for [Polymesh](https://developers.polymesh.network/docs/)

DFNS wallet integration with Polymesh SDK that supports multi-wallet management and three specialized authentication patterns. Implements the official [signing manager interface](https://github.com/PolymeshAssociation/signing-manager-types) and automatically discovers all your active Polymesh wallets.

## Features

- **Three Authentication Patterns**: Browser-only, service account, or external challenge handlers
- **Multi-Wallet Support**: Automatically discovers and manages all active Polymesh wallets
- **Browser Extension Compatible**: Consistent wallet interface with `getAccountsWithMeta()`
- **Type Safe**: Full TypeScript support with comprehensive type definitions

## Signing Manager Options

| Manager                                                                                      | Use Case          | Authentication              | Best For                    |
| -------------------------------------------------------------------------------------------- | ----------------- | --------------------------- | --------------------------- |
| [`DfnsBrowserSigningManager`](./SIGNING_MANAGERS.md#dfnsbrowsersigningmanager)               | Browser-only SPAs | Direct WebAuthn             | Simple web apps, prototypes |
| [`DfnsServiceAccountSigningManager`](./SIGNING_MANAGERS.md#dfnsserviceaccountsigningmanager) | Backend services  | Service account credentials | APIs, automated systems     |
| [`DfnsExternalSigningManager`](./SIGNING_MANAGERS.md#dfnsexternalsigningmanager)             | Production dApps  | External challenge handlers | Multi-user applications     |

### When to Use Each Manager

**Browser Signing Manager** - Perfect for client-side applications where users authenticate directly with WebAuthn. Supports token caching for seamless user experience and automatic session restoration.

**Service Account Signing Manager** - Ideal for server-side applications requiring persistent, non-interactive access to wallets. Uses asymmetric key authentication for secure backend operations.

**External Signing Manager** - Best for production applications where you need custom challenge handling, such as forwarding WebAuthn challenges between frontend and backend or integrating with external authentication systems.

## Quick Start

### Browser Applications

For single-page applications with direct WebAuthn authentication:

```typescript
import { DfnsBrowserSigningManager } from '@dfns/lib-polymesh'
import { Polymesh } from '@polymeshassociation/polymesh-sdk'

const signingManager = await DfnsBrowserSigningManager.create({
  connection: {
    baseUrl: 'https://api.dfns.ninja',
    orgId: 'or-example-123',
  },
  auth: {
    webAuthnConf: {
      relyingParty: { id: 'your-app.com', name: 'Your App' },
    },
    username: 'user@example.com',
    storageType: 'localStorage', // Optional: cache tokens for seamless UX
  },
})

const polymesh = await Polymesh.connect({
  nodeUrl: 'wss://polymesh-mainnet-rpc.dwellir.com',
  signingManager,
})
```

### Service Accounts

For backend services with persistent authentication:

```typescript
import { DfnsServiceAccountSigningManager } from '@dfns/lib-polymesh'

const signingManager = await DfnsServiceAccountSigningManager.create({
  connection: {
    baseUrl: process.env.DFNS_API_URL!,
    orgId: process.env.DFNS_ORG_ID!,
  },
  auth: {
    credId: process.env.DFNS_CRED_ID!, // Service account credential ID
    privateKey: process.env.DFNS_PRIVATE_KEY!, // PEM format private key
    authToken: process.env.DFNS_AUTH_TOKEN!, // Service account auth token
  },
  walletFilter: {
    user: 'us-example-user-123', // Optional: filter by specific user ID
    network: 'Polymesh', // Optional: filter by network
  },
})
```

### External Challenge Handlers

For production apps with custom authentication flows:

```typescript
import { DfnsExternalSigningManager, DfnsExternalCredentialSigner } from '@dfns/lib-polymesh'

// Create a credential signer for handling challenges
const credentialSigner = new DfnsExternalCredentialSigner({
  webAuthnConf: {
    relyingParty: { id: 'your-app.com', name: 'Your App' },
  },
})

const signingManager = await DfnsExternalSigningManager.create({
  connection: {
    baseUrl: 'https://api.dfns.ninja',
    orgId: 'or-example-123',
  },
  auth: {
    credentialSigner,
    username: 'user@example.com',
    authToken: existingToken, // Optional: use existing token if available
    restoreOnly: false, // Optional: set true to only restore from existing token
  },
  walletFilter: {
    userId: 'us-example-user-123', // Optional: filter by user ID
    network: 'Polymesh', // Optional: filter by network
  },
})
```

### Advanced Authentication Patterns

#### External Credential Signer

The `DfnsExternalCredentialSigner` enables server/frontend separation where WebAuthn challenges are handled externally. This is perfect for applications where the signing logic runs on the backend but WebAuthn authentication must happen in the browser:

```typescript
import { DfnsExternalCredentialSigner } from '@dfns/lib-polymesh'

const credentialSigner = new DfnsExternalCredentialSigner({
  webAuthnConf: {
    relyingParty: { id: 'your-app.com', name: 'Your App' },
  },
  challengeTimeout: 5 * 60 * 1000, // 5 minutes
})

// In your API endpoint - prepare to capture challenges
const challengePromise = credentialSigner.prepareForChallenge()

// Start signing operation (triggers challenge)
const operationPromise = performSigningOperation()

// Get challenge and return to frontend
const { challengeId, challenge, webAuthnConf } = await challengePromise
res.json({ challengeId, challenge, webAuthnConf })

// Later, when frontend completes WebAuthn
credentialSigner.completeChallenge(challengeId, signedAssertion)
```

#### Delegated Login Integration

External signing managers support delegated login tokens generated by service accounts, enabling single sign-on patterns where users authenticate once to your platform and only use WebAuthn for signing actions:

```typescript
// Backend: Generate delegated login token with service account
const serviceAccountClient = new DfnsApiClient({
  orgId: 'your-org-id',
  authToken: serviceAccountAuthToken,
  // ... service account configuration
})

const { token } = await serviceAccountClient.auth.delegatedLogin({
  body: { username: 'user@example.com' },
})

// Frontend: Use delegated token with external signing manager
const signingManager = await DfnsExternalSigningManager.create({
  connection: { baseUrl: 'https://api.dfns.ninja', orgId: 'your-org-id' },
  auth: {
    credentialSigner,
    username: 'user@example.com',
    authToken: token, // Delegated login token
  },
})
```

See [DFNS Delegated Authentication](https://docs.dfns.co/d/api-docs/authentication/delegated-auth/delegatedlogin) for detailed implementation guidance.

## Common Operations

### Working with Wallets

```typescript
// Discover all wallets accessible to the signing manager
const wallets = await signingManager.getWallets()
console.log(`Found ${wallets.length} wallets`)

// Get accounts in browser extension format (includes metadata)
const accounts = await signingManager.getAccountsWithMeta()
accounts.forEach((account) => {
  console.log(`${account.meta.name}: ${account.address}`)
})
```

### Authentication State Management

```typescript
// Get the current authentication token (External Manager only)
const token = signingManager.getAuthToken() // Returns string | null
if (token) {
  // Cache token in your backend/database for session restoration
  await saveTokenToCache(token)
}

// Authentication state management
const isAuth = await signingManager.isAuthenticated()
const username = await signingManager.getCurrentUsername() // Browser/External only

// Setup automatic logout handling
const unsubscribe = signingManager.onLoggedOut(() => {
  console.log('User logged out, clearing app state')
  // Clean up your application state here
})
```

### Polymesh Integration

```typescript
// Method 1: Connect to Polymesh with automatic signing manager integration
const polymesh = await Polymesh.connect({
  nodeUrl: 'wss://polymesh-mainnet-rpc.dwellir.com',
  signingManager,
})

// Method 2: Set signing manager on an already instantiated Polymesh SDK instance
const polymesh = await Polymesh.connect({
  nodeUrl: 'wss://polymesh-mainnet-rpc.dwellir.com',
  // Initially connect without a signing manager
})

// Later, set the signing manager when ready
await polymesh.setSigningManager(signingManager)

// All transactions automatically use the signing manager
const transaction = await polymesh.network.transferPolyx({
  to: 'recipient-address',
  amount: new BigNumber('100'), // 100 POLYX
})

// Sign and submit transaction
const result = await transaction.run()
console.log(`Transaction hash: ${result.txHash}`)
```

## Configuration Options

### Token Storage (Browser Manager)

Control how authentication tokens are cached for improved user experience:

```typescript
// localStorage (default) - survives browser restarts
storageType: 'localStorage'

// sessionStorage - cleared when tab closes (more secure)
storageType: 'sessionStorage'

// No caching - fresh login required every time (highest security)
storageType: 'none'

// Silent restoration - restore from cached token if valid without prompting user to sign in.
restoreOnly: true // Returns null if no valid cached token exists
```

### Wallet Filtering

Scope the signing manager to specific wallets or users:

```typescript
walletFilter: {
  walletId: 'wa-specific-wallet',  // Use only this specific wallet
  user: 'us-user-123',            // Filter to all wallets owned by user ID (service accounts only)
  network: 'Polymesh'             // Filter by network: 'Polymesh' or 'PolymeshTestnet'
}
```

**Note**: Service account managers can access wallets across multiple users based on permissions, while browser managers are automatically scoped to the authenticated user.

For detailed examples and backend implementation guides, see [examples](../../examples/libs/polymesh).
