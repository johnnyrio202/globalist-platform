import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Globalist Pro - Global HR & Payroll Hub',
  description: 'Your comprehensive resource for international hiring, payroll compliance, and EOR solutions.',
  keywords: 'global HR, international payroll, EOR, compliance, immigration, remote work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}