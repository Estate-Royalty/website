'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, TrendingUp, Users, Building2 } from 'lucide-react'

const markets = [
  {
    region: 'East African Coast',
    locations: ['Watamu', 'Mombasa', 'Zanzibar', 'Dar es Salaam'],
    description: 'Emerging markets with strong rental demand driven by tourism, growing middle class, and diaspora investment. Properties selected for stable occupancy and USD-denominated lease structures.',
    stats: [
      { label: 'Avg. Rental Yield', value: '7-10%' },
      { label: 'Properties', value: '18' },
      { label: 'Total Value', value: '$8.2M' },
    ],
    highlights: [
      'Tourism-driven demand',
      'Diaspora investment hub',
      'Growing middle class',
      'USD lease structures'
    ],
    image: '/eastafrica.png',
    accent: 'estate'
  },
  {
    region: 'Dubai & UAE',
    locations: ['Dubai Marina', 'Business Bay', 'JVC', 'Downtown'],
    description: 'World-class real estate market with transparent regulations, strong rental yields, and global investor appeal. Focus on premium residential and mixed-use properties with proven income histories.',
    stats: [
      { label: 'Avg. Rental Yield', value: '6-8%' },
      { label: 'Properties', value: '6' },
      { label: 'Total Value', value: '$3.8M' },
    ],
    highlights: [
      'Tax-free jurisdiction',
      'Global financial hub',
      'Premium asset class',
      'Strong regulations'
    ],
    image: '/dubai.png',
    accent: 'gold'
  }
]

const selectionCriteria = [
  {
    icon: Building2,
    title: 'Income Verification',
    description: '24+ months of verified rental income history before tokenization.'
  },
  {
    icon: Users,
    title: 'Tenant Quality',
    description: 'Long-term lease agreements with creditworthy tenants or corporate leases.'
  },
  {
    icon: TrendingUp,
    title: 'Market Fundamentals',
    description: 'Properties in areas with strong demand drivers and growth potential.'
  },
  {
    icon: MapPin,
    title: 'Location Prime',
    description: 'Focus on established neighborhoods with proven rental track records.'
  }
]

export default function Markets() {
  return (
    <section id="markets" className="relative py-24 lg:py-32 bg-charcoal">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-estate-pattern opacity-50"></div>
      
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
            Global Presence
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-ivory mb-6">
            Our Markets
          </h2>
          <p className="text-lg text-ivory/60 max-w-2xl mx-auto leading-relaxed">
            Carefully selected markets with strong fundamentals, transparent regulations, 
            and proven rental demand. Starting with high-growth emerging markets and 
            established global hubs.
          </p>
        </motion.div>

        {/* Markets Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {markets.map((market, index) => (
            <motion.div
              key={market.region}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative overflow-hidden bg-charcoal-50 border ${
                market.accent === 'estate' ? 'border-estate/20 hover:border-estate/40' : 'border-gold/20 hover:border-gold/40'
              } transition-all duration-500`}
            >
              {/* Real Property Image */}
              <div className="h-56 relative overflow-hidden">
                <Image 
                  src={market.image} 
                  alt={market.region}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-50 via-charcoal-50/50 to-transparent"></div>
                {/* Location Tags */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {market.locations.slice(0, 3).map((loc) => (
                    <span 
                      key={loc}
                      className={`text-xs px-2 py-1 backdrop-blur-sm ${
                        market.accent === 'estate' ? 'bg-estate/40 text-ivory' : 'bg-gold/40 text-ivory'
                      }`}
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-serif text-2xl text-ivory mb-2">{market.region}</h3>
                </div>

                {/* Description */}
                <p className="text-ivory/60 text-sm leading-relaxed mb-6">
                  {market.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-estate/10">
                  {market.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className={`font-serif text-xl ${
                        market.accent === 'estate' ? 'text-estate-light' : 'text-gold'
                      }`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-ivory/40">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3">
                  {market.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-ivory/50">
                      <div className={`w-1.5 h-1.5 ${
                        market.accent === 'estate' ? 'bg-estate' : 'bg-gold'
                      }`}></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selection Criteria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-charcoal-50 border border-estate/20 p-8 lg:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl text-ivory mb-3">Property Selection Criteria</h3>
            <p className="text-ivory/50 text-sm max-w-xl mx-auto">
              Every property undergoes rigorous evaluation before tokenization. 
              We prioritize income stability over speculative appreciation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectionCriteria.map((criteria, index) => {
              const Icon = criteria.icon
              return (
                <motion.div
                  key={criteria.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-estate/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-estate-light" />
                  </div>
                  <h4 className="font-serif text-lg text-ivory mb-2">{criteria.title}</h4>
                  <p className="text-xs text-ivory/50 leading-relaxed">{criteria.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
