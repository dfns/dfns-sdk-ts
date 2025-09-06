import './globals.css'

export const metadata = {
  title: 'DFNS Polymesh Browser Signing Manager Example',
  description: 'Test DFNS Browser Signing Manager with Polymesh SDK',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}