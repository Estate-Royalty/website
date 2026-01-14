'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Coins, Calendar, ArrowRight } from 'lucide-react'

export default function TokenLaunch() {
  return (
    <section id="bahari" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-estate/5"></div>
      
      <div className="container-estate relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-gold tracking-wider uppercase">
              First Royalty Token Launch
            </span>
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-ivory mb-6">
            Introducing <span className="text-gold">$BAHARI</span>
          </h2>
          <p className="text-lg text-ivory/60 max-w-2xl mx-auto leading-relaxed">
            A Royalty Token representing ownership of rental revenue from premium 
            Kenyan coastal property. Hold tokens, earn stablecoin dividends. That's it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Property Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Property Card */}
            <div className="bg-charcoal-50 border border-gold/20 overflow-hidden">
              {/* Property Header - Real Image */}
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src="/eastafrica.png" 
                  alt="Watamu Beachfront Property" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-serif text-2xl text-ivory">Watamu Beachfront</div>
                  <div className="text-sm text-ivory/70">Premium Coastal Property</div>
                </div>
              </div>
              
              <div className="p-8">
                {/* Location */}
                <div className="flex items-center gap-2 text-ivory/70 mb-6">
                  <MapPin className="w-5 h-5 text-estate-light" />
                  <span>Watamu, Kilifi County, Kenya</span>
                </div>

                <p className="text-ivory/60 leading-relaxed mb-8">
                  Prime beachfront property on Kenya's stunning Swahili coast. High-demand 
                  vacation rental with consistent bookings from international tourists and 
                  digital nomads. Revenue captured at point-of-sale, distributed to token holders.
                </p>

                {/* Property Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-charcoal p-4">
                    <div className="text-xs text-ivory/50 mb-1">Property Type</div>
                    <div className="text-ivory">Beachfront Villa</div>
                  </div>
                  <div className="bg-charcoal p-4">
                    <div className="text-xs text-ivory/50 mb-1">Rental Model</div>
                    <div className="text-ivory">Short-term + Long-term</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Token Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Token Economics */}
            <div className="bg-charcoal-50 border border-estate/20 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                  <span className="font-serif text-3xl text-charcoal font-bold">B</span>
                </div>
                <div>
                  <div className="font-serif text-3xl text-ivory">$BAHARI</div>
                  <div className="text-sm text-ivory/50">Swahili for "Ocean"</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-b border-estate/20">
                  <span className="text-ivory/60">Launch Price</span>
                  <span className="font-serif text-3xl text-gold">$10</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-estate/20">
                  <span className="text-ivory/60">Est. Monthly Distribution</span>
                  <span className="font-serif text-3xl text-estate-light">$4,000</span>
                </div>
                <div className="flex items-center justify-between py-4">
                  <span className="text-ivory/60">Distribution Method</span>
                  <span className="text-ivory">USDC Airdrop</span>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-estate/10 border border-estate/30 p-6">
              <h4 className="font-serif text-lg text-ivory mb-4">How It Works</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-xs font-bold">1</span>
                  </div>
                  <p className="text-sm text-ivory/70">
                    <span className="text-ivory">Buy $BAHARI tokens</span> at launch price of $10 per token
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-xs font-bold">2</span>
                  </div>
                  <p className="text-sm text-ivory/70">
                    <span className="text-ivory">Hold in your wallet</span> — your tokens represent fractional ownership
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-xs font-bold">3</span>
                  </div>
                  <p className="text-sm text-ivory/70">
                    <span className="text-ivory">Receive monthly USDC airdrops</span> proportional to your share of supply
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full btn-gold group">
              Join Waitlist for $BAHARI
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-ivory/40 text-sm max-w-2xl mx-auto">
            $BAHARI is the first property token on Estate Royalty. More properties from 
            East Africa and Dubai coming soon. Token holders can also deposit into vaults 
            for amplified yield strategies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
