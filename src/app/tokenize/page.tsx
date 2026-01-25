'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, Building2, Globe, TrendingUp, FileCheck, 
  CheckCircle2, Shield, Scale, Mail, Calendar 
} from 'lucide-react'

const offerings = [
  {
    icon: Building2,
    title: 'Fractionalize Your Property',
    description: 'Convert your property into small, investable digital shares without selling full ownership. Maintain control while accessing global capital.',
  },
  {
    icon: Globe,
    title: 'Access Global Investors',
    description: 'Reach diaspora and international investors seeking real yield backed by real assets. No geographic limitations on investor access.',
  },
  {
    icon: TrendingUp,
    title: 'Structured Yield Distribution',
    description: 'Rental income is distributed transparently on-chain through royalty tokens and vaults. Automated, auditable, and trustless.',
  },
  {
    icon: FileCheck,
    title: 'Professional Asset Structuring',
    description: 'We design pricing, supply, and payout structures aligned with long-term capital. Institutional-grade tokenization from day one.',
  },
]

const readinessFeatures = [
  'Rental income and yield analysis',
  'Asset valuation and fractionalization model',
  'Token supply and pricing structure',
  'Investor payout mechanics',
  'Risk assessment and suitability review',
  'Clear recommendation on next steps',
]

const targetAudience = [
  'Owners of income-generating residential or Airbnb properties',
  'Hospitality operators and serviced apartments',
  'Small real-estate developers',
  'Asset owners seeking liquidity without full exit',
]

export default function TokenizePage() {
  return (
    <main className="pt-36 lg:pt-40">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-estate-pattern opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-estate/10 rounded-full blur-3xl"></div>
        
        <div className="container-estate relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-xs font-medium text-gold uppercase tracking-[0.2em] mb-6">
              For Property Owners
            </span>
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl text-ivory mb-6 leading-tight">
              Tokenize Your Property.
              <br />
              <span className="text-gradient-gold">Unlock Global Capital.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-ivory/60 leading-relaxed max-w-3xl mb-10">
              Convert income-generating real estate into compliant, on-chain royalty assets 
              and access global investors without selling full ownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link href="/tokenize/assessment" className="btn-gold text-lg px-10 py-5 group inline-flex">
                Start Tokenization Assessment
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="text-sm text-ivory/40">
              For income-producing residential, hospitality, and commercial properties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 lg:py-32 bg-charcoal-50">
        <div className="container-estate">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl lg:text-5xl text-ivory mb-6">
              What Estate Royalty Helps You Do
            </h2>
            <p className="text-lg text-ivory/60 max-w-2xl mx-auto">
              Professional tokenization services designed for serious property owners 
              seeking institutional-grade capital access.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering, index) => {
              const Icon = offering.icon
              return (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-charcoal border border-estate/20 p-8 hover:border-estate/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-estate/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-estate-light" />
                  </div>
                  <h3 className="font-serif text-xl text-ivory mb-4">{offering.title}</h3>
                  <p className="text-ivory/60 text-sm leading-relaxed">{offering.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tokenization Readiness Session */}
      <section className="py-24 lg:py-32 bg-charcoal">
        <div className="container-estate">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-medium text-gold uppercase tracking-[0.2em] mb-4">
                Assessment Process
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl text-ivory mb-6">
                Tokenization Readiness Session
              </h2>
              <p className="text-lg text-ivory/60 leading-relaxed mb-8">
                Before onboarding any property, Estate Royalty conducts a structured assessment 
                to determine whether an asset is suitable for on-chain fractionalization.
              </p>

              <div className="bg-charcoal-50 border border-estate/20 p-6 mb-8">
                <h4 className="font-serif text-lg text-ivory mb-4">What&apos;s Included:</h4>
                <ul className="space-y-3">
                  {readinessFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-ivory/70">
                      <CheckCircle2 className="w-5 h-5 text-estate-light flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gold/10 border border-gold/30 p-6 mb-8">
                <p className="text-sm text-ivory/70 leading-relaxed mb-3">
                  <span className="text-gold font-medium">Structuring Fee:</span> This session 
                  involves a small structuring fee to ensure seriousness and depth of analysis.
                </p>
                <p className="text-sm text-ivory/70 leading-relaxed">
                  <span className="text-gold font-medium">Fee Credit:</span> If your property is 
                  approved and onboarded, this fee is credited toward onboarding costs.
                </p>
              </div>

              <Link href="/tokenize/assessment" className="btn-gold text-lg px-10 py-5 group inline-flex">
                <Calendar className="mr-2 w-5 h-5" />
                Book Assessment
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-charcoal-50 border border-estate/20 p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-estate/20 flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-estate-light" />
                    </div>
                    <div>
                      <div className="font-serif text-lg text-ivory">Structured Analysis</div>
                      <div className="text-sm text-ivory/50">Comprehensive property review</div>
                    </div>
                  </div>
                  
                  <div className="h-px bg-estate/20"></div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-estate/20 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-estate-light" />
                    </div>
                    <div>
                      <div className="font-serif text-lg text-ivory">Valuation Model</div>
                      <div className="text-sm text-ivory/50">Token pricing structure</div>
                    </div>
                  </div>
                  
                  <div className="h-px bg-estate/20"></div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <div className="font-serif text-lg text-ivory">Risk Assessment</div>
                      <div className="text-sm text-ivory/50">Suitability review</div>
                    </div>
                  </div>
                  
                  <div className="h-px bg-estate/20"></div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <div className="font-serif text-lg text-ivory">Clear Recommendation</div>
                      <div className="text-sm text-ivory/50">Next steps outlined</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 lg:py-32 bg-charcoal-50">
        <div className="container-estate">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl lg:text-5xl text-ivory mb-6">
                Who Should Apply
              </h2>
              <p className="text-lg text-ivory/60">
                Properties must demonstrate consistent or forecastable cash flow.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {targetAudience.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-charcoal border border-estate/20 p-6 flex items-start gap-4"
                >
                  <div className="w-2 h-2 bg-gold mt-2 flex-shrink-0"></div>
                  <p className="text-ivory/70 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Compliance */}
      <section className="py-24 lg:py-32 bg-charcoal">
        <div className="container-estate">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-charcoal-50 border border-estate/20 p-10 lg:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-estate/10 flex items-center justify-center">
                  <Scale className="w-7 h-7 text-estate-light" />
                </div>
                <h2 className="font-serif text-3xl text-ivory">Built for Transparency</h2>
              </div>
              
              <p className="text-lg text-ivory/70 leading-relaxed mb-6">
                Estate Royalty prioritizes transparency, on-chain accounting, and investor clarity. 
                All revenue distribution logic, vault rules, and payout mechanisms are designed to be 
                auditable and visible once assets go live.
              </p>
              
              <div className="bg-charcoal border border-estate/20 p-6 mt-8">
                <p className="text-sm text-ivory/60 leading-relaxed">
                  <span className="text-ivory font-medium">Legal Note:</span> Legal structuring 
                  varies by jurisdiction and is evaluated per asset. We work with licensed legal 
                  counsel in each market to ensure compliance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-charcoal-50 to-charcoal">
        <div className="container-estate">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-4xl lg:text-5xl text-ivory mb-6">
              Ready to Explore Tokenization?
            </h2>
            <p className="text-xl text-ivory/60 leading-relaxed mb-10">
              Start with a structured assessment and find out if your property qualifies.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/tokenize/assessment" className="btn-gold text-lg px-10 py-5 group inline-flex">
                Start Tokenization Assessment
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-ivory/50">
              <Mail className="w-4 h-4" />
              <span>Or reach us at </span>
              <a 
                href="mailto:admin@estateroyalty.io" 
                className="text-gold hover:text-gold-light transition-colors"
              >
                admin@estateroyalty.io
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
