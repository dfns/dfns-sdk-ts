import { NextResponse } from 'next/server'
import { getAllSessions } from '@/lib/server-state'

export async function GET() {
  try {
    const sessions = getAllSessions()
    
    return NextResponse.json({
      success: true,
      data: {
        sessionsCount: sessions.length,
        sessions: sessions.map(s => ({
          sessionId: s.sessionId,
          username: s.username,
          createdAt: new Date(s.createdAt).toISOString(),
          lastActivity: new Date(s.lastActivity).toISOString(),
          hasSigningManager: !!s.signingManager,
          hasCredentialSigner: !!s.credentialSigner,
          hasPolymeshSdk: !!s.polymeshSdk,
        })),
      }
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Debug failed'
    }, { status: 500 })
  }
}