import { AppContextProvider } from '@/hooks/useAppContext'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Dfns SDK - Nexjs Delegated',
  description: 'Dfns SDK example with Nextjs and delegated auth+signing',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body>
          <nav className="py-5 mb-4 flex justify-center">
            <Link href="/">
              <Image src="/logo.png" alt="" width={50} height={50}></Image>
            </Link>
          </nav>
          <div className="prose mx-auto">
            {children}

            <div className="mt-10">
              <Link href="/" className="btn no-underline">
                ← Back to main page
              </Link>
            </div>
          </div>
        </body>
      </AppContextProvider>
    </html>
  )
}
