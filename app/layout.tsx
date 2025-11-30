import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Premier Apparel Manufacturing | Concept Redesign',
  description: 'Concept redesign demonstration for apparel manufacturing. Specializing in menswear, womenswear, kidswear, activewear, and streetwear production.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

