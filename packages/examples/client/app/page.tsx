'use client'

import { AuthProvider } from '@/hooks/useAuth'
import Main from '@/component/main'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthProvider>
        <Main />
      </AuthProvider>
    </main>
  )
}
