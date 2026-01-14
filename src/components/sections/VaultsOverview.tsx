'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, TrendingUp, Gem, ArrowRight, Info } from 'lucide-react'

const vaults = [
  {
    name: 'Senior Vault',
    icon: Shield,
    risk: 'Conservative',
    targetYield: '11-13%',
    description: 'First priority on rental royalty payouts. Holds LP tokens for stable, predictable returns with lowest risk exposure.',
    features: [
      'Holds LP tokens (not direct exposure)',
      'First claim on distributions',
      'Stable, predictable yield',
      'Monthly USD payouts'
    ],
    comparison: 'Similar to preferred equity in traditional real estate investing',
    color: 'estate',
    gradient: 'from-estate/20 to-estate/5'
  },
  {
    name: 'Junior Vault',
    icon: TrendingUp,
    risk: 'Variable',
    targetYield: 'Up to 200%',
    description: 'Variable returns with significant upside. Holds LP tokens and receives distributions after Senior, with amplified yield potential.',
    features: [
      'Holds LP tokens for amplified yield',
      'Variable returns based on performance',
      'Second priority after Senior',
      'High upside potential'
    ],
    comparison: 'Similar to mezzanine financing with equity kicker',
    color: 'gold',
    gradient: 'from-gold/20 to-gold/5'
  },
  {
    name: 'Reserve Vault',
    icon: Gem,
    risk: 'Maximum',
    targetYield: 'Max Yield',
    description: 'Direct exposure to property tokens—not LP tokens. Receives the full benefit of rental royalties and token appreciation. Maximum possible yield.',
    features: [
      'Holds property tokens directly',
      'Full rental royalty exposure',
      'Maximum yield potential',
      'Direct asset appreciation'
    ],
    comparison: 'Direct equity ownership in tokenized real estate',
    color: 'gold-dark',
    gradient: 'from-gold-dark/20 to-gold-dark/5'
  }
]

export default function VaultsOverview() {
  return (
    <section id="vaults" className="relative py-24 lg:py-32 bg-charcoal-50">
      {/* Decorative Elements - contained within section */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-estate/30 to-transparent pointer-events-none"></div>

      <div className="container-estate relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-medium text-gold uppercase tracking-[0.2em] mb-4">
            Amplify Your Yields
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-ivory mb-6">
            Structured Vaults
          </h2>
          <p className="text-lg text-ivory/60 max-w-2xl mx-auto leading-relaxed">
            Already earning from Royalty Tokens? Deposit into vaults to amplify your yields. 
            Different tiers for different risk appetites.
          </p>
        </motion.div>

        {/* Understanding the Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-charcoal border border-estate/20 p-6 lg:p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <Info className="w-5 h-5 text-estate-light flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-lg text-ivory mb-2">Two Ways to Earn</h4>
              <div className="text-ivory/60 text-sm leading-relaxed space-y-3">
                <p>
                  <span className="text-gold font-medium">1. Hold Property Tokens Directly:</span> Buy tokens like $BAHARI and receive 
                  stablecoin airdrops every month proportional to your holdings. Simple, direct ownership.
                </p>
                <p>
                  <span className="text-estate-light font-medium">2. Deposit into Vaults:</span> For amplified yields, deposit into 
                  structured vaults. <span className="text-ivory">Senior and Junior hold LP tokens</span> for leveraged exposure, 
                  while <span className="text-ivory">Reserve holds property tokens directly</span> for maximum yield potential.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vault Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {vaults.map((vault, index) => {
            const Icon = vault.icon
            return (
              <motion.div
                key={vault.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className={`h-full bg-gradient-to-b ${vault.gradient} border border-${vault.color}/20 
                              p-8 transition-all duration-500 hover:border-${vault.color}/40`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 flex items-center justify-center ${
                      vault.color === 'estate' ? 'bg-estate/20' : 
                      vault.color === 'gold' ? 'bg-gold/10' : 'bg-gold-dark/10'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        vault.color === 'estate' ? 'text-estate-light' : 
                        vault.color === 'gold' ? 'text-gold' : 'text-gold-dark'
                      }`} />
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 ${
                      vault.color === 'estate' ? 'bg-estate/20 text-estate-light' : 
                      vault.color === 'gold' ? 'bg-gold/10 text-gold' : 'bg-gold-dark/10 text-gold-dark'
                    }`}>
                      {vault.risk}
                    </span>
                  </div>

                  {/* Title & Yield */}
                  <h3 className="font-serif text-2xl text-ivory mb-2">{vault.name}</h3>
                  <div className={`font-serif text-3xl mb-4 ${
                    vault.color === 'estate' ? 'text-estate-light' : 
                    vault.color === 'gold' ? 'text-gold' : 'text-gold'
                  }`}>
                    {vault.targetYield} <span className="text-lg text-ivory/40">APY</span>
                  </div>

                  {/* Description */}
                  <p className="text-ivory/60 text-sm leading-relaxed mb-6">
                    {vault.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {vault.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-ivory/50">
                        <div className={`w-1.5 h-1.5 ${
                          vault.color === 'estate' ? 'bg-estate' : 
                          vault.color === 'gold' ? 'bg-gold' : 'bg-gold-dark'
                        }`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Comparison */}
                  <div className="pt-6 border-t border-ivory/10">
                    <p className="text-xs text-ivory/40 italic">
                      "{vault.comparison}"
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/vaults" className="btn-gold group">
            View All Vaults
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
