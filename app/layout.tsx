import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YJM Apparel Group | Concept Redesign',
  description: 'Concept redesign demonstration for YJM Apparel Group. Specializing in menswear, womenswear, kidswear, activewear, and streetwear production.',
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

