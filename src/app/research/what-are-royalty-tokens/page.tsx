'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, CheckCircle2, X } from 'lucide-react'

export default function WhatAreRoyaltyTokensArticle() {
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
              Education
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl text-ivory mb-6">
              What Are Royalty Tokens? The Complete Guide
            </h1>
            <div className="flex items-center gap-6 text-sm text-ivory/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                January 12, 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                10 min read
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
              className="prose prose-invert prose-lg max-w-none"
            >
              {/* Intro */}
              <div className="bg-charcoal border border-gold/20 p-8 mb-12">
                <p className="text-xl text-ivory/80 leading-relaxed m-0">
                  If you have ever wanted to own a piece of real estate without all the complexity, 
                  Royalty Tokens are about to become your new favorite asset class.
                </p>
              </div>

              <h2 className="font-serif text-2xl text-ivory mt-12 mb-6">The Simple Explanation</h2>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                A Royalty Token is a blockchain-based token that represents ownership of a 
                percentage of a property&apos;s rental revenue.
              </p>

              <p className="text-ivory/70 leading-relaxed mb-6">
                Think of it like this:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-estate-light flex-shrink-0 mt-1" />
                  A property generates rental income from tenants
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-estate-light flex-shrink-0 mt-1" />
                  We capture a percentage of that rental revenue on-chain
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-estate-light flex-shrink-0 mt-1" />
                  That revenue gets distributed to token holders every month
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-estate-light flex-shrink-0 mt-1" />
                  You earn real stablecoin dividends automatically
                </li>
              </ul>

              <div className="bg-estate/10 border border-estate/30 p-6 my-8">
                <p className="text-lg text-estate-light font-medium m-0">
                  No voting rights. No board meetings. No operational headaches. Just cash flow.
                </p>
              </div>

              <h2 className="font-serif text-2xl text-ivory mt-12 mb-6">How It Actually Works</h2>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                Let&apos;s break it down step by step:
              </p>

              <h3 className="font-serif text-xl text-ivory mt-8 mb-4">1. Revenue Capture</h3>
              <p className="text-ivory/70 leading-relaxed mb-6">
                When tenants pay rent, our smart contracts automatically capture the designated 
                percentage at the point of collection—before the property manager even receives the funds.
              </p>
              <p className="text-ivory/70 leading-relaxed mb-6">
                This is key: we&apos;re not relying on anyone to &quot;remember&quot; to pay token holders. 
                It&apos;s automatic and non-negotiable.
              </p>

              <h3 className="font-serif text-xl text-ivory mt-8 mb-4">2. Conversion to Stablecoins</h3>
              <p className="text-ivory/70 leading-relaxed mb-6">
                The captured revenue gets immediately converted to USDC stablecoins. This means 
                your dividends maintain stable value regardless of crypto market volatility.
              </p>

              <h3 className="font-serif text-xl text-ivory mt-8 mb-4">3. Monthly Airdrops</h3>
              <p className="text-ivory/70 leading-relaxed mb-6">
                Every month, dividends are airdropped directly to your wallet. No claiming required. 
                No gas fees to worry about. It just shows up.
              </p>

              <h3 className="font-serif text-xl text-ivory mt-8 mb-4">4. Trade Anytime</h3>
              <p className="text-ivory/70 leading-relaxed mb-6">
                Unlike traditional real estate that locks you in for years, Royalty Tokens are 
                tradeable on DEXs. Want to exit? Just sell your tokens. No lockups, no waiting periods.
              </p>

              <h2 className="font-serif text-2xl text-ivory mt-12 mb-6">What Makes This Different from Equity?</h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-estate/20">
                      <th className="text-left py-4 text-ivory/50 font-normal">Feature</th>
                      <th className="text-center py-4 text-ivory/50 font-normal">Traditional Equity</th>
                      <th className="text-center py-4 text-gold font-serif">Royalty Tokens</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-estate/10">
                      <td className="py-4 text-ivory">Dilution</td>
                      <td className="py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-4 h-4 text-red-400" />
                          <span className="text-ivory/50">High risk</span>
                        </div>
                      </td>
                      <td className="py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-estate-light" />
                          <span className="text-ivory">Fixed % forever</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-estate/10">
                      <td className="py-4 text-ivory">Cash Flow</td>
                      <td className="py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-4 h-4 text-red-400" />
                          <span className="text-ivory/50">No guarantees</span>
                        </div>
                      </td>
                      <td className="py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-estate-light" />
                          <span className="text-ivory">Monthly dividends</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-estate/10">
                      <td className="py-4 text-ivory">Liquidity</td>
                      <td className="py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-4 h-4 text-red-400" />
                          <span className="text-ivory/50">Locked for years</span>
                        </div>
                      </td>
                      <td className="py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-estate-light" />
                          <span className="text-ivory">Trade anytime</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 text-ivory">Complexity</td>
                      <td className="py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-4 h-4 text-red-400" />
                          <span className="text-ivory/50">Legal overhead</span>
                        </div>
                      </td>
                      <td className="py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-estate-light" />
                          <span className="text-ivory">Simple ownership</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="font-serif text-2xl text-ivory mt-12 mb-6">The Returns</h2>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                Your returns come from three sources:
              </p>

              <ol className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-ivory/70">
                  <span className="w-6 h-6 bg-gold/20 flex items-center justify-center flex-shrink-0 text-gold text-sm font-bold">1</span>
                  <span><strong className="text-ivory">Property rental income</strong> paid monthly in stablecoins</span>
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <span className="w-6 h-6 bg-gold/20 flex items-center justify-center flex-shrink-0 text-gold text-sm font-bold">2</span>
                  <span><strong className="text-ivory">Token appreciation</strong> as property value and rental rates grow</span>
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <span className="w-6 h-6 bg-gold/20 flex items-center justify-center flex-shrink-0 text-gold text-sm font-bold">3</span>
                  <span><strong className="text-ivory">Vault amplification</strong> for those who want boosted yields (optional)</span>
                </li>
              </ol>

              <h2 className="font-serif text-2xl text-ivory mt-12 mb-6">Who Is This For?</h2>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                DeFi has forced you into a false binary:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-ivory/70">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-ivory">Option A:</strong> Low yields (~4% on stablecoins) with boring, predictable returns</span>
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <span><strong className="text-ivory">Option B:</strong> Degenerate gambling on memecoins with zero fundamentals</span>
                </li>
              </ul>

              <p className="text-ivory/70 leading-relaxed mb-6">
                We&apos;re offering a third path.
              </p>

              <p className="text-ivory/70 leading-relaxed mb-6">
                Royalty Tokens give you exposure to real, income-generating properties. These aren&apos;t 
                ponzinomics or speculative vapor—they&apos;re actual buildings with tenants paying rent 
                and audited financials.
              </p>

              <div className="bg-charcoal border border-estate/20 p-8 my-8">
                <p className="text-lg text-ivory mb-4">This is for you if you:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-ivory/70">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    Want real property revenue backing your returns
                  </li>
                  <li className="flex items-center gap-2 text-ivory/70">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    Are tired of choosing between boring yields and reckless speculation
                  </li>
                  <li className="flex items-center gap-2 text-ivory/70">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    Value transparency, liquidity, and actual fundamentals
                  </li>
                  <li className="flex items-center gap-2 text-ivory/70">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    Believe profitable real estate &gt; memecoins
                  </li>
                </ul>
              </div>

              <h2 className="font-serif text-2xl text-ivory mt-12 mb-6">Conclusion</h2>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                Royalty Tokens let you own cash flow, not equity:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  Predictable monthly dividends from income-generating properties
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  Upside from property appreciation and rental growth
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  No complexity, no illiquidity, no ponzinomics
                </li>
              </ul>

              <div className="bg-gold/10 border border-gold/30 p-8 my-8 text-center">
                <p className="text-xl text-gold font-serif mb-4">Just real yield from real rent.</p>
                <Link href="/#bahari" className="btn-gold inline-flex">
                  Explore $BAHARI Token
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
