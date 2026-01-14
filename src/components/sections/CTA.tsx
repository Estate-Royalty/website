'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, TrendingUp, Building } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-estate/10 to-charcoal"></div>
      <div className="absolute inset-0 bg-estate-pattern opacity-30"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-estate/10 rounded-full blur-3xl"></div>
      
      <div className="container-estate relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 mb-8">
            <span className="w-2 h-2 bg-gold rounded-full"></span>
            <span className="text-xs font-medium text-gold tracking-wider uppercase">
              Vaults Open for Deposit
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-ivory mb-6 leading-tight">
            Own Cash Flow.
            <span className="text-gradient-gold"> Not Complexity.</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-ivory/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            Royalty Tokens give you real business revenue backing your returns. 
            No voting rights. No operational headaches. Just monthly stablecoin 
            dividends from real rental income.
          </p>

          {/* Benefits Row */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-4">
              <Shield className="w-8 h-8 text-estate-light mb-3" />
              <span className="text-sm text-ivory">Audited Contracts</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <TrendingUp className="w-8 h-8 text-gold mb-3" />
              <span className="text-sm text-ivory">Up to 200% APY</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <Building className="w-8 h-8 text-ivory/60 mb-3" />
              <span className="text-sm text-ivory">Real Asset Backing</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#bahari" className="btn-gold group">
              Get $BAHARI Tokens
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/vaults" className="btn-secondary">
              Explore Vaults
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="mt-12 text-xs text-ivory/30 max-w-xl mx-auto">
            Investment involves risk. Returns are not guaranteed. Please read all risk 
            disclosures and consult with a financial advisor before investing. 
            Estate Royalty is not available to residents of restricted jurisdictions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
