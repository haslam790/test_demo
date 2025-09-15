import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Konsuld Widget',
  description: 'A Next.js widget application for Konsuld',
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
