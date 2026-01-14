'use client'

import { motion } from 'framer-motion'
import { Shield, FileCheck, Globe, Users, Scale, Building } from 'lucide-react'

const complianceAreas = [
  {
    icon: FileCheck,
    title: 'KYC/AML Procedures',
    description: 'All investors undergo identity verification and anti-money laundering checks before accessing vaults. We partner with licensed KYC providers to ensure compliance with international standards.',
  },
  {
    icon: Globe,
    title: 'Jurisdictional Compliance',
    description: 'The protocol operates in compliance with applicable laws in each market. Certain jurisdictions are restricted based on regulatory requirements and sanctions lists.',
  },
  {
    icon: Building,
    title: 'Regulated Token Issuance',
    description: 'Property tokens are issued through regulated frameworks appropriate to each jurisdiction. Legal structures ensure token holders have documented claims to underlying assets.',
  },
  {
    icon: Scale,
    title: 'Legal Structure',
    description: 'Each property is held in a Special Purpose Vehicle (SPV) with appropriate legal documentation. Independent legal counsel reviews all property transactions and token structures.',
  },
  {
    icon: Users,
    title: 'Investor Protection',
    description: 'Clear risk disclosures, regular reporting, and transparent fee structures ensure investors have the information needed to make informed decisions.',
  },
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'Personal information is handled in accordance with applicable data protection laws including GDPR where applicable. See our Privacy Policy for details.',
  },
]

const restrictedJurisdictions = [
  'United States',
  'North Korea',
  'Iran',
  'Cuba',
  'Syria',
  'Russia',
  'Belarus',
  'Crimea Region',
  'Other OFAC-sanctioned regions'
]

export default function CompliancePage() {
  return (
    <main className="pt-36 lg:pt-40">
      {/* Hero */}
      <section className="relative py-16 lg:py-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-estate-pattern opacity-20"></div>
        
        <div className="container-estate relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-medium text-gold uppercase tracking-[0.2em] mb-4">
              Legal & Regulatory
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl text-ivory mb-6">
              Compliance
            </h1>
            <p className="text-lg text-ivory/60 leading-relaxed">
              Estate Royalty is committed to operating within established regulatory frameworks 
              and maintaining the highest standards of compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Overview */}
      <section className="py-16 bg-charcoal-50">
        <div className="container-estate">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl text-ivory mb-4">Our Compliance Framework</h2>
            <p className="text-ivory/60 max-w-2xl mx-auto">
              We build trust through transparency, rigorous processes, and adherence to 
              regulatory requirements across all jurisdictions where we operate.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-charcoal border border-estate/20 p-6"
                >
                  <div className="w-12 h-12 bg-estate/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-estate-light" />
                  </div>
                  <h3 className="font-serif text-lg text-ivory mb-3">{area.title}</h3>
                  <p className="text-sm text-ivory/60 leading-relaxed">{area.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Restricted Jurisdictions */}
      <section className="py-16 bg-charcoal">
        <div className="container-estate">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gold/5 border border-gold/20 p-8"
            >
              <h2 className="font-serif text-2xl text-ivory mb-6">Restricted Jurisdictions</h2>
              <p className="text-ivory/70 text-sm leading-relaxed mb-6">
                Estate Royalty services are not available to residents of the following 
                jurisdictions due to regulatory restrictions or sanctions:
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {restrictedJurisdictions.map((jurisdiction) => (
                  <div 
                    key={jurisdiction}
                    className="text-sm text-ivory/50 py-2 px-3 bg-charcoal"
                  >
                    {jurisdiction}
                  </div>
                ))}
              </div>
              <p className="text-ivory/50 text-xs mt-6">
                This list is not exhaustive and may change. Users are responsible for 
                ensuring they are permitted to use the protocol in their jurisdiction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-16 bg-charcoal-50">
        <div className="container-estate">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-charcoal border border-estate/20 p-8"
            >
              <h2 className="font-serif text-2xl text-ivory mb-6">Investor Verification Process</h2>
              <div className="space-y-6 text-sm text-ivory/70 leading-relaxed">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-estate/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-estate-light font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="text-ivory font-medium mb-1">Identity Verification</h4>
                    <p>Submit government-issued identification and proof of address through our 
                    secure verification portal.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-estate/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-estate-light font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="text-ivory font-medium mb-1">AML Screening</h4>
                    <p>Automated screening against sanctions lists and politically exposed 
                    persons databases.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-estate/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-estate-light font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="text-ivory font-medium mb-1">Risk Assessment</h4>
                    <p>Review of investor profile to ensure suitability and compliance with 
                    applicable requirements.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-estate/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-estate-light font-medium">4</span>
                  </div>
                  <div>
                    <h4 className="text-ivory font-medium mb-1">Approval</h4>
                    <p>Upon successful verification, access to vaults is granted. Verification 
                    typically completes within 24-48 hours.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-charcoal">
        <div className="container-estate text-center">
          <h3 className="font-serif text-2xl text-ivory mb-4">Compliance Inquiries</h3>
          <p className="text-ivory/60 text-sm mb-6">
            For compliance-related questions, contact our compliance team.
          </p>
          <a 
            href="mailto:compliance@estateroyalty.io" 
            className="text-estate-light hover:text-estate transition-colors"
          >
            compliance@estateroyalty.io
          </a>
        </div>
      </section>
    </main>
  )
}
