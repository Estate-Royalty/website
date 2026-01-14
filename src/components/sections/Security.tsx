'use client'

import { motion } from 'framer-motion'
import { Shield, FileCheck, Lock, Eye, Scale, Users, CheckCircle2 } from 'lucide-react'

const securityFeatures = [
  {
    icon: Shield,
    title: 'Smart Contract Audits',
    description: 'All vault contracts undergo multiple independent security audits by leading blockchain security firms. Audit reports are publicly available.',
  },
  {
    icon: FileCheck,
    title: 'Legal Structure',
    description: 'Each property is held in a regulated Special Purpose Vehicle (SPV). Token holders have documented legal claims to underlying assets.',
  },
  {
    icon: Lock,
    title: 'Custody & Security',
    description: 'Protocol-managed assets are secured through institutional-grade custody solutions with multi-signature controls and insurance coverage.',
  },
  {
    icon: Eye,
    title: 'On-Chain Transparency',
    description: 'All capital flows, distributions, and vault positions are recorded on-chain. Real-time verification of protocol health and reserves.',
  },
  {
    icon: Scale,
    title: 'Regulatory Compliance',
    description: 'Operating within established regulatory frameworks. KYC/AML procedures for investor onboarding. Licensed token issuance.',
  },
  {
    icon: Users,
    title: 'Governance',
    description: 'Protocol governance includes oversight from independent board members and regular third-party operational audits.',
  },
]

const trustIndicators = [
  { label: 'Security Audits', value: '3', detail: 'Independent firms' },
  { label: 'Uptime', value: '99.9%', detail: 'Protocol availability' },
  { label: 'Insurance', value: '$5M', detail: 'Coverage limit' },
  { label: 'Distributions', value: '100%', detail: 'On-time payments' },
]

export default function Security() {
  return (
    <section id="security" className="relative py-24 lg:py-32 bg-charcoal-50">
      {/* Decorative Lines - contained */}
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
            Trust & Verification
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-ivory mb-6">
            Security & Governance
          </h2>
          <p className="text-lg text-ivory/60 max-w-2xl mx-auto leading-relaxed">
            Built for institutional standards. Every layer of the protocol is designed 
            for transparency, security, and regulatory compliance.
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16"
        >
          {trustIndicators.map((indicator, index) => (
            <div 
              key={indicator.label}
              className="bg-charcoal border border-estate/20 p-6 text-center"
            >
              <div className="font-serif text-3xl lg:text-4xl text-gold mb-2">
                {indicator.value}
              </div>
              <div className="text-sm text-ivory mb-1">{indicator.label}</div>
              <div className="text-xs text-ivory/40">{indicator.detail}</div>
            </div>
          ))}
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-charcoal border border-estate/20 p-6 hover:border-estate/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-estate/10 flex items-center justify-center mb-4 group-hover:bg-estate/20 transition-colors">
                  <Icon className="w-6 h-6 text-estate-light" />
                </div>
                <h4 className="font-serif text-lg text-ivory mb-3">{feature.title}</h4>
                <p className="text-sm text-ivory/50 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* DeFi Mechanics Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-charcoal border border-gold/20 p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs text-gold uppercase tracking-wider mb-4 block">
                How Your Investment is Protected
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl text-ivory mb-6">
                The Mechanics Behind Estate Royalty
              </h3>
              <div className="space-y-4 text-ivory/60 text-sm leading-relaxed">
                <p>
                  <span className="text-ivory font-medium">Real-world properties generate rental income</span> → 
                  Tenants pay rent through regulated payment providers and property managers.
                </p>
                <p>
                  <span className="text-ivory font-medium">Income is converted to on-chain value</span> → 
                  Rental payments are converted to USD-denominated stablecoins through licensed exchanges.
                </p>
                <p>
                  <span className="text-ivory font-medium">Smart contracts enforce distribution rules</span> → 
                  Vault contracts automatically distribute royalties according to priority (Senior → Junior → Reserve).
                </p>
                <p>
                  <span className="text-ivory font-medium">LP tokens are held by the protocol</span> → 
                  You never directly interact with liquidity pools. The protocol manages all DeFi complexity on your behalf.
                </p>
              </div>
            </div>
            
            <div className="bg-charcoal-50 border border-estate/20 p-6">
              <h4 className="font-serif text-lg text-ivory mb-6">What This Means For You</h4>
              <ul className="space-y-4">
                {[
                  'All flows are transparent and auditable on-chain',
                  'Distribution rules cannot be changed without governance approval',
                  'No hidden fees or fund manager discretion',
                  'Monthly reports with full breakdown of income sources',
                  'Direct claim to underlying property value through SPV structure'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ivory/60">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
