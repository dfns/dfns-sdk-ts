/**
 * Transaction Completion API - Complete Endpoint
 *
 * Generic transaction completion endpoint for any Polymesh transaction type.
 * Handles WebAuthn challenge completion and transaction execution monitoring.
 *
 * This endpoint is not specific to POLYX transfers - it can complete any transaction
 * that requires WebAuthn signature challenges (transfers, asset operations, etc.).
 *
 * Flow:
 * 1. Validates transaction ID and challenge response
 * 2. Completes the WebAuthn challenge via deferred handler
 * 3. Monitors transaction execution status
 * 4. Returns final transaction results
 */

import { NextRequest, NextResponse } from 'next/server'
import { getPendingTransaction, removePendingTransaction, getCredentialSigner } from '@/lib/server-state'
import { TransactionStatus } from '@polymeshassociation/polymesh-sdk/types'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { transactionId, challengeResponse } = body

    // Input Validation
    if (!transactionId || !challengeResponse?.challengeId || !challengeResponse?.firstFactor) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields: transactionId, challengeResponse.challengeId, challengeResponse.firstFactor',
        },
        { status: 400 }
      )
    }

    console.log(
      `Transaction completion request - Transaction: ${transactionId}, Challenge: ${challengeResponse.challengeId}`
    )

    // Transaction Lookup
    const pendingTransaction = getPendingTransaction(transactionId)
    if (!pendingTransaction) {
      return NextResponse.json({ success: false, error: 'Transaction not found or expired' }, { status: 404 })
    }

    // Challenge Validation
    if (pendingTransaction.challengeId !== challengeResponse.challengeId) {
      return NextResponse.json({ success: false, error: 'Challenge ID mismatch' }, { status: 400 })
    }

    // Credential Signer Lookup
    const credentialSigner = getCredentialSigner(pendingTransaction.sessionId)
    if (!credentialSigner) {
      return NextResponse.json({ success: false, error: 'Credential signer not found' }, { status: 404 })
    }

    console.log(`Completing challenge and executing transaction: ${transactionId}`)

    try {
      // Challenge Completion
      // Complete the WebAuthn challenge to allow transaction execution
      const challengeCompleted = credentialSigner.completeChallenge(
        challengeResponse.challengeId,
        challengeResponse.firstFactor
      )

      if (!challengeCompleted) {
        return NextResponse.json(
          {
            success: false,
            error: 'Challenge not found or already completed. The transaction signing attempt may have timed out.',
          },
          { status: 404 }
        )
      }

      console.log(`Challenge completed for transaction: ${transactionId}, waiting for transaction status...`)

      // Transaction Monitoring
      // Monitor transaction execution and capture final results
      let transactionHash: string | undefined
      let blockHash: string | undefined
      let statusHandled = false

      const statusPromise = new Promise<{
        success: boolean
        transactionHash?: string
        blockHash?: string
        error?: string
      }>((resolve) => {
        const unsubscribe = pendingTransaction.transaction.onStatusChange((txObject) => {
          console.log(`Transaction ${transactionId} status:`, txObject.status)

          switch (txObject.status) {
            case TransactionStatus.Running:
              console.log(`Transaction ${transactionId} is running...`)
              break

            case TransactionStatus.Succeeded: {
              console.log(`Transaction ${transactionId} succeeded`)
              transactionHash = txObject.txHash
              blockHash = txObject.blockHash
              statusHandled = true
              if (unsubscribe) {
                unsubscribe()
              }
              resolve({
                success: true,
                transactionHash,
                blockHash,
              })
              break
            }

            case TransactionStatus.Failed:
            case TransactionStatus.Rejected:
            case TransactionStatus.Aborted: {
              console.error(`Transaction ${transactionId} failed:`, txObject.error)
              statusHandled = true
              if (unsubscribe) {
                unsubscribe()
              }

              // Extract error message from PolymeshError or fallback
              const errorMessage = txObject.error?.message || `Transaction ${txObject.status.toLowerCase()}`

              resolve({
                success: false,
                error: errorMessage,
              })
              break
            }

            default:
              break
          }
        })

        // Timeout Handler
        setTimeout(() => {
          if (!statusHandled && unsubscribe) {
            console.log(`Transaction ${transactionId} status timeout`)
            unsubscribe()
            resolve({
              success: false,
              error: 'Transaction status timeout',
            })
          }
        }, 30000) // 30 second timeout
      })

      // Wait for Final Status
      const result = await statusPromise

      console.log(`Transaction ${transactionId} completed:`, result)

      // Resolve pending transaction and cleanup
      pendingTransaction.resolve(result)
      removePendingTransaction(transactionId)

      return NextResponse.json({
        success: result.success,
        transactionId,
        transactionHash: result.transactionHash,
        blockHash: result.blockHash,
        message: result.success ? 'Transaction completed successfully' : result.error || 'Transaction failed',
        error: result.error,
        metadata: pendingTransaction.metadata,
      })
    } catch (transactionError) {
      console.error(`Transaction ${transactionId} failed:`, transactionError)

      // Extract error message from PolymeshError or standard Error
      const errorMessage = transactionError instanceof Error ? transactionError.message : 'Transaction execution failed'

      pendingTransaction.resolve({
        success: false,
        error: errorMessage,
      })

      removePendingTransaction(transactionId)

      return NextResponse.json({
        success: false,
        transactionId,
        error: errorMessage,
        metadata: pendingTransaction.metadata,
      })
    }
  } catch (error) {
    console.error('Transaction completion API error:', error)

    // Extract error message from PolymeshError or standard Error
    const errorMessage = error instanceof Error ? error.message : 'Failed to complete transaction'

    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 })
  }
}
