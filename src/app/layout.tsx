import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Estate Royalty | Property-Backed Yield Through Structured Vaults',
  description: 'Tokenized real estate income. Institutional-grade vaults. USD-denominated rental royalties distributed on-chain. Invest in property-backed yield from East Africa and Dubai.',
  keywords: ['real estate tokenization', 'rental royalties', 'structured vaults', 'property-backed yield', 'DeFi real estate', 'East Africa real estate', 'Dubai property investment'],
  openGraph: {
    title: 'Estate Royalty | Property-Backed Yield Through Structured Vaults',
    description: 'Tokenized real estate income. Institutional-grade vaults. USD-denominated rental royalties distributed on-chain.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estate Royalty',
    description: 'Property-Backed Yield Through Structured Vaults',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
