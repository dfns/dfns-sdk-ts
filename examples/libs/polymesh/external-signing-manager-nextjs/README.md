# DFNS External Signing Manager - Polymesh Next.js Reference Implementation

A complete reference implementation demonstrating how to build a secure Polymesh application using the DFNS External Signing Manager pattern with Next.js. This example provides both backend and frontend patterns for production-ready DFNS integration.

## Architecture Overview

### Backend-Centralized Design with Frontend WebAuthn

This reference implementation demonstrates the recommended **External Signing Manager** pattern where:

- **All DFNS operations** are handled securely on the backend via Next.js API routes
- **WebAuthn authentication** is performed on the frontend for user challenge signing
- **Session management** coordinates between backend and frontend with proper cleanup
- **Challenge flow** follows the standard create → sign → complete pattern
- **Type safety** throughout with comprehensive TypeScript definitions

### Key Components

- **DFNS External Signing Manager**: Backend-coordinated signing with frontend WebAuthn
- **Centralized API Service**: Single service layer for all API interactions with proper error handling
- **WebAuthn Integration**: Secure passkey-based challenge signing with dynamic signer creation
- **Session Management**: Secure server-side sessions with automatic cleanup and restoration
- **RESTful API Design**: Clean endpoint structure following REST conventions

## Features

✅ **Complete Authentication Flow**: User login with WebAuthn challenge signing  
✅ **Session Management**: Secure backend sessions with localStorage persistence  
✅ **Dynamic WebAuthn**: Signer created per operation from challenge configuration  
✅ **Centralized API Service**: Single service layer with comprehensive error handling  
✅ **Wallet & Account Operations**: Full CRUD operations for Polymesh entities  
✅ **POLYX Transactions**: Complete transfer flow with WebAuthn signing  
✅ **Type Safety**: Full TypeScript coverage with proper interface definitions  
✅ **Production Patterns**: Reference implementation suitable for production use

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Copy `.env.example` to `.env.local`:

```bash
# Backend Configuration (Required)
DFNS_API_URL=https://api.dfns.co
DFNS_ORG_ID=your-org-id
DFNS_RELYING_PARTY_ID=your-domain.com
DFNS_RELYING_PARTY_NAME="Your App Name"

# Frontend Configuration (Optional)
NEXT_PUBLIC_DEFAULT_USERNAME=testuser@example.com
```

### 3. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```text
├── app/
│   ├── page.tsx                 # Main UI component
│   ├── globals.css              # Global styles
│   └── api/                     # Backend API routes
│       ├── auth/
│       │   ├── login/route.ts   # User authentication
│       │   ├── complete-challenge/route.ts  # Challenge completion
│       │   └── logout/route.ts  # Session cleanup
│       ├── accounts/route.ts    # Account management
│       └── polyx/
│           ├── send/route.ts    # POLYX transfers
│           ├── balance/route.ts # Account balance
│           └── complete-transaction/route.ts  # Transaction completion
├── lib/
│   ├── api-service.ts          # Centralized API service layer
│   └── api-types.ts            # TypeScript type definitions
└── .env.example                # Environment template
```

## API Reference

### Authentication Endpoints

| Endpoint                       | Method | Description                                    |
| ------------------------------ | ------ | ---------------------------------------------- |
| `/api/auth/login`              | POST   | Create session and initiate WebAuthn challenge |
| `/api/auth/complete-challenge` | POST   | Complete WebAuthn authentication               |
| `/api/auth/logout`             | POST   | Terminate session and cleanup                  |

### Account Management

| Endpoint             | Method | Description               |
| -------------------- | ------ | ------------------------- |
| `/api/accounts`      | GET    | List user accounts        |
| `/api/polyx/balance` | GET    | Get account POLYX balance |

### Transaction Operations

| Endpoint                          | Method | Description                            |
| --------------------------------- | ------ | -------------------------------------- |
| `/api/polyx/send`                 | POST   | Initiate POLYX transfer with challenge |
| `/api/polyx/complete-transaction` | POST   | Complete transaction with signature    |

## Usage Patterns

### Authentication Flow

```typescript
// 1. Login with username
const result = await apiService.auth.login({ username: 'user@example.com' }, (progress) => console.log(progress))

// 2. Session established automatically
// 3. WebAuthn challenge handled internally
// 4. Session persisted for future use
```

### Transaction Flow

```typescript
// 1. Send POLYX with automatic WebAuthn handling
await apiService.polyx.sendPolyx(sessionId, fromAddress, toAddress, amount, (progress) => console.log(progress))

// 2. WebAuthn signer created dynamically from challenge
// 3. Challenge signed and completed automatically
// 4. Transaction hash returned on success
```

## Key Implementation Patterns

### Centralized API Service

The `api-service.ts` provides a single interface for all operations:

```typescript
// All API calls go through centralized service
await apiService.auth.login(config, onProgress)
await apiService.polyx.sendPolyx(sessionId, from, to, amount, onProgress)
await apiService.accounts.getAccounts(sessionId)
```

### Dynamic WebAuthn Creation

WebAuthn signers are created dynamically from challenge responses:

```typescript
// No static signer configuration needed
// Signer created per operation with challenge config
const webAuthnSigner = createWebAuthnSigner(challenge.webAuthnConf, progressCallback)
```

### Session Management

Sessions are managed server-side with client persistence:

```typescript
// Backend handles session storage and cleanup
// Frontend persists session ID in localStorage
// Automatic session restoration on page load
```

## Production Deployment

### Security Considerations

- **Environment Variables**: Store sensitive configuration server-side only
- **HTTPS Required**: WebAuthn requires HTTPS in production (localhost works for dev)
- **Session Security**: Implement proper session expiration and cleanup
- **Input Validation**: Validate all inputs before processing
- **Error Handling**: Implement comprehensive error logging and monitoring

### Scalability Patterns

- **Session Storage**: Replace in-memory with Redis/database for multi-instance deployment
- **Error Handling**: Implement structured logging and monitoring
- **Rate Limiting**: Add API rate limiting for production traffic
- **Caching**: Implement caching strategies for frequently accessed data

### Monitoring & Observability

- **API Metrics**: Monitor endpoint performance and error rates
- **WebAuthn Success**: Track authentication success/failure rates
- **Session Lifecycle**: Monitor session creation, usage, and cleanup
- **Transaction Flow**: Track transaction success rates and completion times

## Related Examples

- **[Browser Example](../browser/)**: Direct frontend DFNS integration patterns
- **[Service Account Example](../service-account/)**: Backend-only service account operations
- **[Delegated Authentication](../delegated/)**: Alternative user authentication patterns

## Troubleshooting

### Common Development Issues

**TypeScript Errors**: Ensure all dependencies installed and paths configured correctly  
**WebAuthn Failures**: Verify HTTPS in production, localhost acceptable for development  
**Session Issues**: Check browser localStorage and session expiration (1 hour default)

### Production Debugging

**Authentication Failures**: Verify DFNS configuration and relying party settings  
**Challenge Timeouts**: Ensure stable network connection and proper error handling  
**Transaction Errors**: Check account balances and network connectivity

This reference implementation provides a solid foundation for building production Polymesh applications with DFNS External Signing Manager integration.
