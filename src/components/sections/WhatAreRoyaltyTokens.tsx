'use client'

import { motion } from 'framer-motion'
import { Coins, Zap, RefreshCw, ArrowRightLeft, CheckCircle2, X } from 'lucide-react'

const comparisonData = [
  {
    feature: 'Dilution Risk',
    equity: { text: 'High risk from fundraising rounds', bad: true },
    royalty: { text: 'Fixed % of revenue, no dilution', bad: false }
  },
  {
    feature: 'Cash Flow',
    equity: { text: 'No guaranteed returns', bad: true },
    royalty: { text: 'Monthly stablecoin dividends', bad: false }
  },
  {
    feature: 'Control',
    equity: { text: 'Voting rights (meaningless for small holders)', bad: true },
    royalty: { text: 'No operational responsibility', bad: false }
  },
  {
    feature: 'Liquidity',
    equity: { text: 'Locked until sale/exit', bad: true },
    royalty: { text: 'Trade anytime on DEXs', bad: false }
  },
  {
    feature: 'Complexity',
    equity: { text: 'Legal overhead, paperwork, meetings', bad: true },
    royalty: { text: 'Own tokens, earn yield. Simple.', bad: false }
  },
]

export default function WhatAreRoyaltyTokens() {
  return (
    <section className="relative py-24 lg:py-32 bg-charcoal-50 overflow-hidden">      
      <div className="container-estate relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-medium text-gold uppercase tracking-[0.2em] mb-4">
            The Asset Class
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-ivory mb-6">
            What Are Royalty Tokens?
          </h2>
          <p className="text-lg text-ivory/60 max-w-3xl mx-auto leading-relaxed">
            If you have ever wanted to own a piece of real estate without all the complexity, 
            Royalty Tokens are about to become your new favorite asset class.
          </p>
        </motion.div>

        {/* Simple Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-charcoal border border-gold/20 p-8 lg:p-12 mb-16"
        >
          <h3 className="font-serif text-2xl text-ivory mb-6 text-center">The Simple Explanation</h3>
          <p className="text-xl text-ivory/70 text-center max-w-3xl mx-auto leading-relaxed mb-8">
            A <span className="text-gold font-medium">Royalty Token</span> is a blockchain-based token that represents 
            ownership of a <span className="text-ivory">percentage of a property&apos;s rental revenue</span>.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-charcoal-50 p-6 text-center">
              <div className="font-serif text-lg text-ivory mb-2">Property generates rent</div>
              <div className="text-sm text-ivory/50">Tenants pay monthly</div>
            </div>
            <div className="bg-charcoal-50 p-6 text-center">
              <div className="font-serif text-lg text-ivory mb-2">Revenue is captured</div>
              <div className="text-sm text-ivory/50">Automatically on-chain</div>
            </div>
            <div className="bg-charcoal-50 p-6 text-center">
              <div className="font-serif text-lg text-ivory mb-2">Converted to USDC</div>
              <div className="text-sm text-ivory/50">Stable, spendable</div>
            </div>
            <div className="bg-charcoal-50 p-6 text-center">
              <div className="font-serif text-lg text-ivory mb-2">Airdropped to you</div>
              <div className="text-sm text-ivory/50">Every month, automatically</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-estate-light font-medium">
              No voting rights. No board meetings. No operational headaches. Just cash flow.
            </p>
          </div>
        </motion.div>

        {/* How It Works Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-charcoal border border-estate/20 p-6">
            <div className="w-12 h-12 bg-estate/20 flex items-center justify-center mb-4">
              <Coins className="w-6 h-6 text-estate-light" />
            </div>
            <div className="text-xs text-gold uppercase tracking-wider mb-2">Step 1</div>
            <h4 className="font-serif text-lg text-ivory mb-2">Revenue Capture</h4>
            <p className="text-sm text-ivory/60">
              Rental income is captured automatically through smart contracts—before the 
              property manager even receives the funds.
            </p>
          </div>

          <div className="bg-charcoal border border-estate/20 p-6">
            <div className="w-12 h-12 bg-estate/20 flex items-center justify-center mb-4">
              <RefreshCw className="w-6 h-6 text-estate-light" />
            </div>
            <div className="text-xs text-gold uppercase tracking-wider mb-2">Step 2</div>
            <h4 className="font-serif text-lg text-ivory mb-2">Stablecoin Conversion</h4>
            <p className="text-sm text-ivory/60">
              Rental payments are immediately converted to USDC stablecoins. 
              Stable value, ready to spend or reinvest.
            </p>
          </div>

          <div className="bg-charcoal border border-estate/20 p-6">
            <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-gold" />
            </div>
            <div className="text-xs text-gold uppercase tracking-wider mb-2">Step 3</div>
            <h4 className="font-serif text-lg text-ivory mb-2">Monthly Airdrops</h4>
            <p className="text-sm text-ivory/60">
              Dividends are airdropped directly to your wallet every month. 
              No claiming required. No gas fees. It just shows up.
            </p>
          </div>

          <div className="bg-charcoal border border-estate/20 p-6">
            <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-4">
              <ArrowRightLeft className="w-6 h-6 text-gold" />
            </div>
            <div className="text-xs text-gold uppercase tracking-wider mb-2">Step 4</div>
            <h4 className="font-serif text-lg text-ivory mb-2">Trade Anytime</h4>
            <p className="text-sm text-ivory/60">
              Unlike traditional real estate, Royalty Tokens are tradeable on DEXs. 
              Want to exit? Just sell. No lockups, no waiting.
            </p>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-charcoal border border-estate/20 p-8 lg:p-10"
        >
          <h3 className="font-serif text-2xl text-ivory mb-8 text-center">
            Royalty Tokens vs Traditional Equity
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-estate/20">
                  <th className="text-left py-4 text-sm text-ivory/50 font-normal">Feature</th>
                  <th className="text-center py-4 text-sm text-ivory/50 font-normal">Traditional Equity</th>
                  <th className="text-center py-4 text-sm text-gold font-serif">Royalty Tokens</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {comparisonData.map((row, index) => (
                  <tr key={row.feature} className="border-b border-estate/10">
                    <td className="py-4 text-ivory">{row.feature}</td>
                    <td className="py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-4 h-4 text-red-400" />
                        <span className="text-ivory/50">{row.equity.text}</span>
                      </div>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-estate-light" />
                        <span className="text-ivory">{row.royalty.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Returns Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="font-serif text-2xl text-ivory mb-6">Your Returns Come From</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-estate/10 border border-estate/30 p-6">
              <div className="font-serif text-3xl text-estate-light mb-2">1</div>
              <div className="text-ivory mb-1">Monthly Rental Dividends</div>
              <div className="text-sm text-ivory/50">Paid in USDC stablecoins</div>
            </div>
            <div className="bg-gold/10 border border-gold/30 p-6">
              <div className="font-serif text-3xl text-gold mb-2">2</div>
              <div className="text-ivory mb-1">Token Appreciation</div>
              <div className="text-sm text-ivory/50">As property value grows</div>
            </div>
            <div className="bg-charcoal border border-ivory/20 p-6">
              <div className="font-serif text-3xl text-ivory/60 mb-2">3</div>
              <div className="text-ivory mb-1">Vault Amplification</div>
              <div className="text-sm text-ivory/50">Optional: deposit for boosted yields</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
