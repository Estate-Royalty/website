'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Shield, TrendingUp, Gem, ArrowRight, Info, CheckCircle2, 
  AlertTriangle, DollarSign, Calendar, Lock, PieChart 
} from 'lucide-react'

const vaultDetails = [
  {
    id: 'senior',
    name: 'Senior Vault',
    icon: Shield,
    tagline: 'Stable LP Yields',
    risk: 'Conservative',
    targetYield: '11-13%',
    currentApy: '12.1%',
    tvl: '$4.2M',
    capacity: '$6M',
    description: 'The Senior Vault holds LP tokens (not direct property tokens) for stable, predictable returns. First claim on rental income distributions with lowest risk exposure among vault tiers.',
    howItWorks: [
      'Deposits are converted to LP tokens for leveraged exposure',
      'LP tokens generate yield from protocol liquidity strategies',
      'Senior vault receives distributions before all other tiers',
      'Monthly USD-denominated payouts to vault depositors',
      'Yield is stable and predictable due to LP token mechanics'
    ],
    suitableFor: [
      'Income-focused investors',
      'Conservative capital allocation',
      'Long-term wealth preservation',
      'Those preferring stability over max returns'
    ],
    risks: [
      'Lower returns compared to other tiers',
      'LP token exposure (not direct property ownership)',
      'Capital is locked during distribution periods'
    ],
    color: 'estate',
    metrics: {
      distributionFrequency: 'Monthly',
      lockPeriod: '30 days',
      minDeposit: '$1,000',
      fees: '0.5% management'
    }
  },
  {
    id: 'junior',
    name: 'Junior Vault',
    icon: TrendingUp,
    tagline: 'Variable High Yield',
    risk: 'Variable',
    targetYield: 'Up to 200%',
    currentApy: 'Variable',
    tvl: '$3.1M',
    capacity: '$5M',
    description: 'The Junior Vault holds LP tokens with amplified yield potential. Returns are variable and can reach up to 200% in favorable conditions. Receives distributions after Senior obligations are met.',
    howItWorks: [
      'Deposits are converted to LP tokens for leveraged yield',
      'Higher leverage ratio than Senior for amplified returns',
      'Receives distributions after Senior vault obligations',
      'Returns are variable based on market conditions',
      'Benefits from rental income growth and LP performance'
    ],
    suitableFor: [
      'Growth-oriented investors',
      'Those comfortable with variable returns',
      'Experienced DeFi participants',
      'Investors seeking high upside potential'
    ],
    risks: [
      'Returns are highly variable',
      'LP token exposure with higher leverage',
      'Distributions depend on Senior being satisfied first',
      'May receive reduced payouts in volatile periods'
    ],
    color: 'gold',
    metrics: {
      distributionFrequency: 'Monthly',
      lockPeriod: '60 days',
      minDeposit: '$2,500',
      fees: '0.75% management + 15% performance'
    }
  },
  {
    id: 'reserve',
    name: 'Reserve Vault',
    icon: Gem,
    tagline: 'Direct Token Exposure',
    risk: 'Maximum',
    targetYield: 'Max Possible',
    currentApy: 'Maximum',
    tvl: '$1.8M',
    capacity: '$3M',
    description: 'The Reserve Vault holds property tokens directly—not LP tokens. This gives you full exposure to rental royalties and token appreciation. Maximum possible yield because you receive the actual property income.',
    howItWorks: [
      'Holds property tokens directly (like $BAHARI)',
      'You receive actual rental royalties, not LP yields',
      'Full exposure to rental income and token appreciation',
      'No leverage or LP token abstraction',
      'Maximum yield potential with direct ownership benefits'
    ],
    suitableFor: [
      'Those wanting direct property exposure',
      'Long-term believers in tokenized real estate',
      'Investors seeking maximum yield',
      'Those who prefer simplicity over LP mechanics'
    ],
    risks: [
      'Full exposure to property market volatility',
      'No risk buffering from LP structures',
      'Longer lock periods required',
      'Direct correlation to property performance'
    ],
    color: 'gold-dark',
    metrics: {
      distributionFrequency: 'Monthly',
      lockPeriod: '90 days',
      minDeposit: '$5,000',
      fees: '1% management'
    }
  }
]

export default function VaultsPage() {
  return (
    <main className="pt-36 lg:pt-40">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-estate-pattern opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-estate/10 rounded-full blur-3xl"></div>
        
        <div className="container-estate relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-medium text-gold uppercase tracking-[0.2em] mb-4">
              Investment Vaults
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-ivory mb-6">
              Choose Your Risk Profile
            </h1>
            <p className="text-lg text-ivory/60 leading-relaxed">
              Estate Royalty vaults mirror institutional real estate structures. Each tier 
              offers a different position in the capital stack—from conservative income to 
              growth-focused exposure. Select the vault that matches your investment goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Understanding Tranching */}
      <section className="py-16 bg-charcoal-50">
        <div className="container-estate">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-charcoal border border-estate/20 p-8 lg:p-10"
          >
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-estate-light flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl text-ivory mb-4">Understanding the Waterfall Structure</h3>
                <div className="grid lg:grid-cols-3 gap-6 text-sm text-ivory/60 leading-relaxed">
                  <p>
                    <span className="text-ivory font-medium">Traditional Comparison:</span> Just like 
                    institutional real estate deals have preferred equity, mezzanine debt, and common 
                    equity, Estate Royalty vaults create similar structures on-chain.
                  </p>
                  <p>
                    <span className="text-ivory font-medium">Payment Priority:</span> When rental income 
                    arrives, Senior vault holders are paid first (like preferred equity). Junior receives 
                    next. Reserve holders receive whatever remains (like common equity).
                  </p>
                  <p>
                    <span className="text-ivory font-medium">Risk-Return Tradeoff:</span> Lower tiers 
                    accept more volatility in exchange for higher potential returns. Higher tiers 
                    sacrifice upside for stability and payment priority.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vault Details */}
      {vaultDetails.map((vault, index) => {
        const Icon = vault.icon
        const isEven = index % 2 === 0
        
        return (
          <section 
            key={vault.id} 
            id={vault.id}
            className={`py-20 lg:py-28 ${isEven ? 'bg-charcoal' : 'bg-charcoal-50'}`}
          >
            <div className="container-estate">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Vault Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 flex items-center justify-center ${
                      vault.color === 'estate' ? 'bg-estate/20' : 
                      vault.color === 'gold' ? 'bg-gold/10' : 'bg-gold-dark/10'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        vault.color === 'estate' ? 'text-estate-light' : 
                        vault.color === 'gold' ? 'text-gold' : 'text-gold'
                      }`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="font-serif text-3xl lg:text-4xl text-ivory">{vault.name}</h2>
                        <span className={`text-xs font-medium px-3 py-1 ${
                          vault.color === 'estate' ? 'bg-estate/20 text-estate-light' : 
                          vault.color === 'gold' ? 'bg-gold/10 text-gold' : 'bg-gold-dark/10 text-gold'
                        }`}>
                          {vault.risk}
                        </span>
                      </div>
                      <p className="text-ivory/50">{vault.tagline}</p>
                    </div>
                  </div>
                  
                  {/* Yield Display */}
                  <div className="bg-charcoal-50 border border-estate/20 p-6 lg:min-w-[280px]">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-sm text-ivory/50">Current APY</span>
                      <span className={`font-serif text-4xl ${
                        vault.color === 'estate' ? 'text-estate-light' : 'text-gold'
                      }`}>{vault.currentApy}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-ivory/40">Target Range</span>
                      <span className="text-ivory">{vault.targetYield}</span>
                    </div>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Description & How It Works */}
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <p className="text-ivory/70 leading-relaxed">{vault.description}</p>
                    </div>

                    <div className="bg-charcoal-50 border border-estate/20 p-6">
                      <h4 className="font-serif text-lg text-ivory mb-4">How This Vault Works</h4>
                      <ul className="space-y-3">
                        {vault.howItWorks.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-ivory/60">
                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                              vault.color === 'estate' ? 'text-estate-light' : 'text-gold'
                            }`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Two Column: Suitable For & Risks */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-estate/5 border border-estate/20 p-6">
                        <h4 className="font-serif text-lg text-ivory mb-4">Suitable For</h4>
                        <ul className="space-y-2">
                          {vault.suitableFor.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-ivory/60">
                              <div className="w-1.5 h-1.5 bg-estate"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gold/5 border border-gold/20 p-6">
                        <h4 className="font-serif text-lg text-ivory mb-4 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-gold" />
                          Risk Factors
                        </h4>
                        <ul className="space-y-2">
                          {vault.risks.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-ivory/60">
                              <div className="w-1.5 h-1.5 bg-gold"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar: Metrics & CTA */}
                  <div className="space-y-6">
                    {/* Vault Metrics */}
                    <div className="bg-charcoal border border-estate/20 p-6">
                      <h4 className="font-serif text-lg text-ivory mb-6">Vault Metrics</h4>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-estate/10">
                          <div className="flex items-center gap-2 text-sm text-ivory/50">
                            <DollarSign className="w-4 h-4" />
                            Total Value Locked
                          </div>
                          <span className="text-ivory font-medium">{vault.tvl}</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-estate/10">
                          <div className="flex items-center gap-2 text-sm text-ivory/50">
                            <PieChart className="w-4 h-4" />
                            Capacity
                          </div>
                          <span className="text-ivory font-medium">{vault.capacity}</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-estate/10">
                          <div className="flex items-center gap-2 text-sm text-ivory/50">
                            <Calendar className="w-4 h-4" />
                            Distributions
                          </div>
                          <span className="text-ivory font-medium">{vault.metrics.distributionFrequency}</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-estate/10">
                          <div className="flex items-center gap-2 text-sm text-ivory/50">
                            <Lock className="w-4 h-4" />
                            Lock Period
                          </div>
                          <span className="text-ivory font-medium">{vault.metrics.lockPeriod}</span>
                        </div>
                        <div className="flex items-center justify-between py-3">
                          <div className="text-sm text-ivory/50">Min. Deposit</div>
                          <span className="text-ivory font-medium">{vault.metrics.minDeposit}</span>
                        </div>
                      </div>
                    </div>

                    {/* Fees */}
                    <div className="bg-charcoal border border-estate/20 p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-ivory/50">Fees</span>
                        <span className="text-sm text-ivory">{vault.metrics.fees}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className={`w-full py-4 text-sm font-medium tracking-wide uppercase 
                      transition-all duration-300 ${
                        vault.color === 'estate' 
                          ? 'bg-estate text-ivory hover:bg-estate-light' 
                          : 'bg-gold text-charcoal hover:bg-gold-light'
                      }`}>
                      Deposit to {vault.name}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )
      })}

      {/* Comparison Table */}
      <section className="py-20 bg-charcoal">
        <div className="container-estate">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl text-ivory mb-4">Compare Vaults</h2>
            <p className="text-ivory/50">Side-by-side comparison to help you choose</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-estate/20">
                  <th className="text-left py-4 text-sm text-ivory/50 font-normal">Feature</th>
                  <th className="text-center py-4 text-sm text-estate-light font-serif">Senior</th>
                  <th className="text-center py-4 text-sm text-gold font-serif">Junior</th>
                  <th className="text-center py-4 text-sm text-gold font-serif">Reserve</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-estate/10">
                  <td className="py-4 text-ivory/60">Target APY</td>
                  <td className="py-4 text-center text-ivory">11-13%</td>
                  <td className="py-4 text-center text-ivory">Up to 200%</td>
                  <td className="py-4 text-center text-ivory">Max Possible</td>
                </tr>
                <tr className="border-b border-estate/10">
                  <td className="py-4 text-ivory/60">Holds</td>
                  <td className="py-4 text-center text-estate-light">LP Tokens</td>
                  <td className="py-4 text-center text-gold">LP Tokens</td>
                  <td className="py-4 text-center text-gold">Property Tokens</td>
                </tr>
                <tr className="border-b border-estate/10">
                  <td className="py-4 text-ivory/60">Risk Level</td>
                  <td className="py-4 text-center text-estate-light">Stable</td>
                  <td className="py-4 text-center text-gold">Variable</td>
                  <td className="py-4 text-center text-gold">Maximum</td>
                </tr>
                <tr className="border-b border-estate/10">
                  <td className="py-4 text-ivory/60">Distribution Priority</td>
                  <td className="py-4 text-center text-ivory">1st</td>
                  <td className="py-4 text-center text-ivory">2nd</td>
                  <td className="py-4 text-center text-ivory">3rd</td>
                </tr>
                <tr className="border-b border-estate/10">
                  <td className="py-4 text-ivory/60">Lock Period</td>
                  <td className="py-4 text-center text-ivory">30 days</td>
                  <td className="py-4 text-center text-ivory">60 days</td>
                  <td className="py-4 text-center text-ivory">90 days</td>
                </tr>
                <tr>
                  <td className="py-4 text-ivory/60">Best For</td>
                  <td className="py-4 text-center text-ivory/50 text-xs">Stable income seekers</td>
                  <td className="py-4 text-center text-ivory/50 text-xs">High yield hunters</td>
                  <td className="py-4 text-center text-ivory/50 text-xs">Direct ownership fans</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-b from-charcoal-50 to-charcoal">
        <div className="container-estate text-center">
          <h3 className="font-serif text-2xl text-ivory mb-4">Need Help Choosing?</h3>
          <p className="text-ivory/50 mb-8 max-w-xl mx-auto">
            Our investment guides can help you understand which vault aligns with your 
            risk tolerance and financial goals.
          </p>
          <Link href="/research" className="btn-secondary group">
            Read Investment Guides
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  )
}
