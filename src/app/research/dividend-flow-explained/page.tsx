'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, ArrowRight, Building, Wallet, RefreshCw, Coins, CheckCircle2 } from 'lucide-react'

export default function DividendFlowArticle() {
  return (
    <main className="pt-36 lg:pt-40">
      {/* Hero */}
      <section className="relative py-16 lg:py-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-estate-pattern opacity-20"></div>
        
        <div className="container-estate relative z-10">
          <Link 
            href="/research" 
            className="inline-flex items-center gap-2 text-sm text-ivory/50 hover:text-ivory mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Research
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-medium text-gold uppercase tracking-[0.2em] mb-4">
              Protocol
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl text-ivory mb-6">
              From Rent to Your Wallet: How Dividends Flow
            </h1>
            <div className="flex items-center gap-6 text-sm text-ivory/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                January 3, 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-charcoal-50">
        <div className="container-estate">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Intro */}
              <div className="bg-charcoal border border-estate/20 p-8 mb-12">
                <p className="text-xl text-ivory/80 leading-relaxed m-0">
                  Transparency is core to Estate Royalty. Here&apos;s exactly how rental income 
                  from physical properties becomes USDC in your wallet every month.
                </p>
              </div>

              <h2 className="font-serif text-2xl text-ivory mt-12 mb-6">The Flow: Visual Overview</h2>

              {/* Flow Diagram */}
              <div className="bg-charcoal border border-estate/20 p-8 mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-estate/20 flex items-center justify-center">
                      <Building className="w-8 h-8 text-estate-light" />
                    </div>
                    <div className="font-serif text-lg text-ivory">Tenant Pays Rent</div>
                    <div className="text-xs text-ivory/40">Monthly collection</div>
                  </div>

                  <ArrowRight className="w-6 h-6 text-estate/40 rotate-90 md:rotate-0" />

                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-estate/20 flex items-center justify-center">
                      <RefreshCw className="w-8 h-8 text-estate-light" />
                    </div>
                    <div className="font-serif text-lg text-ivory">Smart Contract</div>
                    <div className="text-xs text-ivory/40">Captures revenue</div>
                  </div>

                  <ArrowRight className="w-6 h-6 text-gold/40 rotate-90 md:rotate-0" />

                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gold/10 flex items-center justify-center">
                      <Coins className="w-8 h-8 text-gold" />
                    </div>
                    <div className="font-serif text-lg text-ivory">USDC Conversion</div>
                    <div className="text-xs text-ivory/40">Stable value</div>
                  </div>

                  <ArrowRight className="w-6 h-6 text-gold/40 rotate-90 md:rotate-0" />

                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gold/10 flex items-center justify-center">
                      <Wallet className="w-8 h-8 text-gold" />
                    </div>
                    <div className="font-serif text-lg text-ivory">Your Wallet</div>
                    <div className="text-xs text-ivory/40">Monthly airdrop</div>
                  </div>
                </div>
              </div>

              <h2 className="font-serif text-2xl text-ivory mt-12 mb-6">Step-by-Step Breakdown</h2>

              <h3 className="font-serif text-xl text-ivory mt-8 mb-4">Step 1: Tenant Pays Rent</h3>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                Each property in our portfolio has tenants—whether short-term vacation renters 
                or long-term residents. Rent is collected by our licensed property management 
                partners on the ground.
              </p>

              <p className="text-ivory/70 leading-relaxed mb-6">
                For $BAHARI (our Watamu property), this includes:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-estate-light flex-shrink-0 mt-1" />
                  Short-term vacation rentals (Airbnb-style)
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-estate-light flex-shrink-0 mt-1" />
                  Monthly long-term tenants
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-estate-light flex-shrink-0 mt-1" />
                  Event rentals and special bookings
                </li>
              </ul>

              <h3 className="font-serif text-xl text-ivory mt-8 mb-4">Step 2: Revenue Capture</h3>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                This is where the magic happens. Unlike traditional real estate where you 
                wait for the landlord to &quot;remember&quot; to distribute profits, our smart contracts 
                capture revenue automatically.
              </p>

              <div className="bg-estate/10 border border-estate/30 p-6 my-8">
                <p className="text-ivory/80 m-0">
                  <strong className="text-estate-light">Key Point:</strong> Revenue is captured 
                  at the source—before the property manager receives funds. This eliminates 
                  counterparty risk and ensures transparent, verifiable income flows.
                </p>
              </div>

              <p className="text-ivory/70 leading-relaxed mb-6">
                The smart contract records:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-ivory/70">
                  <div className="w-2 h-2 bg-estate mt-2 flex-shrink-0"></div>
                  Exact amount collected
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <div className="w-2 h-2 bg-estate mt-2 flex-shrink-0"></div>
                  Timestamp of collection
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <div className="w-2 h-2 bg-estate mt-2 flex-shrink-0"></div>
                  Source property identifier
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <div className="w-2 h-2 bg-estate mt-2 flex-shrink-0"></div>
                  Deductions (if any) for maintenance reserves
                </li>
              </ul>

              <h3 className="font-serif text-xl text-ivory mt-8 mb-4">Step 3: USDC Conversion</h3>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                Rental income arrives in local currency (Kenyan Shillings for our East African 
                properties). The protocol immediately converts this to USDC through licensed 
                fiat-to-crypto rails.
              </p>

              <p className="text-ivory/70 leading-relaxed mb-6">
                Why USDC?
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span><strong className="text-ivory">Stable Value:</strong> Pegged 1:1 to USD, no crypto volatility</span>
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span><strong className="text-ivory">Universal:</strong> Easily usable across DeFi, or off-ramp to fiat</span>
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <span><strong className="text-ivory">Regulated:</strong> Circle-issued, fully backed, audited reserves</span>
                </li>
              </ul>

              <h3 className="font-serif text-xl text-ivory mt-8 mb-4">Step 4: Distribution Calculation</h3>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                At the end of each month, the protocol calculates your share of the dividend:
              </p>

              <div className="bg-charcoal border border-gold/20 p-6 my-8 font-mono text-sm">
                <div className="text-ivory/50 mb-2">// Simplified distribution logic</div>
                <div className="text-ivory">
                  your_dividend = total_rent_collected × (your_tokens / total_supply)
                </div>
              </div>

              <p className="text-ivory/70 leading-relaxed mb-6">
                For example, if $BAHARI collects $4,000 in rent this month and you own 1% 
                of the token supply, you receive $40 in USDC.
              </p>

              <h3 className="font-serif text-xl text-ivory mt-8 mb-4">Step 5: Airdrop to Your Wallet</h3>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                On the 1st of each month, dividends are automatically sent to every wallet 
                holding the token. No claiming. No gas fees for you. It just arrives.
              </p>

              <div className="bg-estate/10 border border-estate/30 p-6 my-8">
                <p className="text-ivory/80 m-0">
                  <strong className="text-estate-light">Pro tip:</strong> Make sure you hold tokens 
                  in a self-custody wallet (not on an exchange) to receive airdrops. Tokens held 
                  on centralized exchanges may not be eligible for distributions.
                </p>
              </div>

              <h2 className="font-serif text-2xl text-ivory mt-12 mb-6">Transparency & Verification</h2>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                Every step is verifiable on-chain:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-estate-light flex-shrink-0 mt-1" />
                  Revenue deposits visible on block explorer
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-estate-light flex-shrink-0 mt-1" />
                  USDC conversion transactions recorded
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-estate-light flex-shrink-0 mt-1" />
                  Distribution calculations open source
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-estate-light flex-shrink-0 mt-1" />
                  Monthly reports published publicly
                </li>
              </ul>

              <p className="text-ivory/70 leading-relaxed mb-6">
                This is real estate income with a level of transparency impossible in 
                traditional property investment.
              </p>

              <div className="bg-gold/10 border border-gold/30 p-8 my-8 text-center">
                <p className="text-xl text-gold font-serif mb-4">Ready to start earning?</p>
                <Link href="/#bahari" className="btn-gold inline-flex">
                  Get $BAHARI Tokens
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
