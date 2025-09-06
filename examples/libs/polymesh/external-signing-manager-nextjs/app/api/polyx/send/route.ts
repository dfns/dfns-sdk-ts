/**
 * POLYX Transfer API - Send Endpoint
 * 
 * Creates POLYX transfer transactions with WebAuthn challenge signing.
 * Demonstrates the complete External Signing Manager transaction flow.
 * 
 * Flow:
 * 1. Validates session and parameters
 * 2. Creates Polymesh transfer transaction
 * 3. Initiates challenge through deferred handler
 * 4. Returns challenge details for frontend WebAuthn signing
 * 5. Transaction completion handled by separate complete endpoint
 */

import { NextRequest, NextResponse } from 'next/server'
import {
  getUserSession,
  setPendingTransaction,
  getPendingTransaction,
  removePendingTransaction,
} from '@/lib/server-state'
import { BigNumber } from '@polymeshassociation/polymesh-sdk'
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: NextRequest) {
  let transactionId: string | undefined

  try {
    const body = await request.json()
    const { sessionId, fromAddress, toAddress, amount } = body

    // Input Validation
    if (!sessionId || !fromAddress || !toAddress || !amount) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: sessionId, fromAddress, toAddress, amount' },
        { status: 400 }
      )
    }

    console.log(`Send POLYX request - Session: ${sessionId}, From: ${fromAddress}, To: ${toAddress}, Amount: ${amount}`)

    // Session Validation
    const userSession = getUserSession(sessionId)
    if (!userSession) {
      return NextResponse.json({ success: false, error: 'Session not found or expired' }, { status: 404 })
    }

    const { polymeshSdk, credentialSigner } = userSession
    if (!polymeshSdk) {
      return NextResponse.json({ success: false, error: 'Polymesh not connected for this session' }, { status: 500 })
    }

    // Configure Signing Account
    polymeshSdk.setSigningAccount(fromAddress)
    console.log(`Set signing account to: ${fromAddress}`)

    // Amount Validation
    let transferAmount: BigNumber
    try {
      transferAmount = new BigNumber(amount)
      if (transferAmount.lte(0)) {
        throw new Error('Amount must be greater than 0')
      }
    } catch (error) {
      return NextResponse.json({ success: false, error: `Invalid amount: ${error}` }, { status: 400 })
    }

    console.log(`Creating transfer transaction: ${transferAmount.toString()} POLYX`)

    // Create the transfer transaction (don't execute it yet)
    const transferTransaction = await polymeshSdk.network.transferPolyx({
      to: toAddress,
      amount: transferAmount,
    })

    console.log('Transfer transaction created, preparing for challenge...')

    // Generate unique transaction ID
    transactionId = uuidv4()
    const txId = transactionId // Create a const variable for closure

    // Prepare the credential signer for the signing challenge
    const challengePromise = credentialSigner.prepareForChallenge()

    // Start the transaction which will trigger the challenge
    const transactionPromise = transferTransaction
      .run()
      .then(() => {
        console.log('Transaction completed without challenge')
        return {
          success: true,
          // Note: Polymesh SDK doesn't return transaction details from run()
          // These would need to be obtained through transaction status monitoring
        }
      })
      .catch((error) => {
        console.error('Transaction failed:', error)
        return {
          success: false,
          error: error.message || 'Transaction failed',
        }
      })

    // Store the pending transaction for later completion if needed
    const pendingTransaction = {
      transactionId: txId,
      sessionId,
      challengeId: '', // Will be set when challenge is received
      transaction: transferTransaction,
      type: 'send-polyx' as const,
      metadata: {
        fromAddress,
        toAddress,
        amount: transferAmount.toString(),
      },
      createdAt: Date.now(),
      resolve: () => {
        /* Will be updated if needed */
      },
      reject: () => {
        /* Will be updated if needed */
      },
    }

    setPendingTransaction(pendingTransaction)

    // Use Promise.race to wait for either challenge or transaction completion
    const challengeOrTransactionPromise = Promise.race([challengePromise, transactionPromise])

    console.log('Waiting for challenge or transaction completion...')

    // Wait for either challenge generation or direct completion
    const result = await challengeOrTransactionPromise

    if ('challengeId' in result && 'challenge' in result) {
      // We got a challenge - update the pending transaction with challengeId
      const pendingTransaction = getPendingTransaction(txId)
      if (pendingTransaction) {
        pendingTransaction.challengeId = result.challengeId
      }

      console.log(`Challenge created for transaction: ${txId}`)

      // Return challenge to frontend for WebAuthn signing
      return NextResponse.json({
        success: true,
        transactionId: txId,
        challengeId: result.challengeId,
        challenge: result.challenge,
        webAuthnConf: result.webAuthnConf, // Include WebAuthn config for dynamic signer creation
        message: 'Transaction challenge generated - please sign with WebAuthn',
        metadata: {
          fromAddress,
          toAddress,
          amount: transferAmount.toString(),
        },
      })
    } else {
      // Transaction completed directly (shouldn't happen with current flow, but good to handle)
      console.log(`Transaction completed directly: ${transactionId}`)

      return NextResponse.json({
        success: result.success,
        transactionId,
        message: result.success
          ? `Successfully sent ${amount} POLYX from ${fromAddress} to ${toAddress}`
          : `Transaction failed: ${'error' in result ? result.error : 'Unknown error'}`,
        error: 'error' in result ? result.error : undefined,
        metadata: {
          fromAddress,
          toAddress,
          amount: transferAmount.toString(),
        },
      })
    }
  } catch (error) {
    console.error('Send POLYX error:', error)

    // Clean up pending transaction if it was created
    if (transactionId) {
      try {
        removePendingTransaction(transactionId)
      } catch (cleanupError) {
        console.error('Error cleaning up pending transaction:', cleanupError)
      }
    }

    // Extract meaningful error message
    let errorMessage = 'Failed to send POLYX'
    if (error instanceof Error) {
      errorMessage = error.message
    }

    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 })
  }
}
