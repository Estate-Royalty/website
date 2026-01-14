'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, TrendingUp, MapPin, Users, Building } from 'lucide-react'

export default function EastAfricaOutlookArticle() {
  return (
    <main className="pt-36 lg:pt-40">
      {/* Hero with Image */}
      <section className="relative py-16 lg:py-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/eastafrica.png" 
            alt="East African Coast" 
            fill 
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/70"></div>
        </div>
        
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
              Market Analysis
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl text-ivory mb-6">
              Why East African Coastal Properties Outperform
            </h1>
            <div className="flex items-center gap-6 text-sm text-ivory/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                January 8, 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                12 min read
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
            >
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-12">
                <div className="bg-charcoal border border-estate/20 p-6 text-center">
                  <div className="font-serif text-3xl text-gold mb-1">7-10%</div>
                  <div className="text-xs text-ivory/50">Average Rental Yield</div>
                </div>
                <div className="bg-charcoal border border-estate/20 p-6 text-center">
                  <div className="font-serif text-3xl text-gold mb-1">15%</div>
                  <div className="text-xs text-ivory/50">Annual Tourism Growth</div>
                </div>
                <div className="bg-charcoal border border-estate/20 p-6 text-center">
                  <div className="font-serif text-3xl text-gold mb-1">$2.1B</div>
                  <div className="text-xs text-ivory/50">Diaspora Remittances</div>
                </div>
              </div>

              {/* Intro */}
              <div className="bg-charcoal border border-estate/20 p-8 mb-12">
                <p className="text-xl text-ivory/80 leading-relaxed m-0">
                  The East African coast—spanning Kenya, Tanzania, and Zanzibar—represents one of 
                  the most compelling real estate opportunities in emerging markets. Here&apos;s why 
                  we&apos;re bullish on Swahili coast properties for tokenization.
                </p>
              </div>

              <h2 className="font-serif text-2xl text-ivory mt-12 mb-6">The Investment Thesis</h2>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                While most crypto projects chase speculative narratives, we&apos;re focused on 
                fundamentals. East African coastal real estate offers something rare: 
                <strong className="text-ivory"> high yields backed by structural demand drivers</strong>.
              </p>

              <h3 className="font-serif text-xl text-ivory mt-8 mb-4 flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-estate-light" />
                1. Tourism Renaissance
              </h3>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                Kenya&apos;s coastal tourism is experiencing explosive growth. Watamu, Diani, and 
                Malindi are attracting a new wave of international visitors—not just traditional 
                safari tourists, but digital nomads, remote workers, and wellness seekers.
              </p>

              <p className="text-ivory/70 leading-relaxed mb-6">
                The numbers tell the story:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-ivory/70">
                  <div className="w-2 h-2 bg-estate mt-2 flex-shrink-0"></div>
                  International arrivals to Kenya up 28% year-over-year
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <div className="w-2 h-2 bg-estate mt-2 flex-shrink-0"></div>
                  Coastal hotel occupancy rates exceeding 75% in peak season
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <div className="w-2 h-2 bg-estate mt-2 flex-shrink-0"></div>
                  Airbnb and short-term rental demand outpacing supply 3:1
                </li>
              </ul>

              <h3 className="font-serif text-xl text-ivory mt-8 mb-4 flex items-center gap-3">
                <Users className="w-5 h-5 text-estate-light" />
                2. Diaspora Investment
              </h3>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                The Kenyan diaspora sends over $4 billion annually in remittances—and a significant 
                portion flows into real estate. Coastal properties are particularly attractive for 
                diaspora investors seeking:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-ivory/70">
                  <div className="w-2 h-2 bg-gold mt-2 flex-shrink-0"></div>
                  Vacation homes for family visits
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <div className="w-2 h-2 bg-gold mt-2 flex-shrink-0"></div>
                  Rental income in USD-equivalent rates
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <div className="w-2 h-2 bg-gold mt-2 flex-shrink-0"></div>
                  Long-term appreciation in a growth market
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <div className="w-2 h-2 bg-gold mt-2 flex-shrink-0"></div>
                  Retirement planning assets
                </li>
              </ul>

              <p className="text-ivory/70 leading-relaxed mb-6">
                Royalty Tokens make it possible for diaspora investors to participate in this 
                market without the complexity of cross-border property management.
              </p>

              <h3 className="font-serif text-xl text-ivory mt-8 mb-4 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-estate-light" />
                3. Watamu: Our First Market
              </h3>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                We&apos;re launching with Watamu for specific reasons:
              </p>

              <div className="bg-charcoal border border-estate/20 p-6 mb-8">
                <h4 className="font-serif text-lg text-ivory mb-4">Why Watamu?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-ivory/70">
                    <div className="w-2 h-2 bg-estate mt-2 flex-shrink-0"></div>
                    <span><strong className="text-ivory">Marine National Park:</strong> Protected beaches, crystal waters, world-class snorkeling</span>
                  </li>
                  <li className="flex items-start gap-3 text-ivory/70">
                    <div className="w-2 h-2 bg-estate mt-2 flex-shrink-0"></div>
                    <span><strong className="text-ivory">Growing Infrastructure:</strong> New road connections, improved utilities, fiber internet</span>
                  </li>
                  <li className="flex items-start gap-3 text-ivory/70">
                    <div className="w-2 h-2 bg-estate mt-2 flex-shrink-0"></div>
                    <span><strong className="text-ivory">Italian Community:</strong> Established expat community drives consistent demand</span>
                  </li>
                  <li className="flex items-start gap-3 text-ivory/70">
                    <div className="w-2 h-2 bg-estate mt-2 flex-shrink-0"></div>
                    <span><strong className="text-ivory">Undervalued:</strong> Prices 40-60% below comparable Zanzibar properties</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-serif text-xl text-ivory mt-8 mb-4 flex items-center gap-3">
                <Building className="w-5 h-5 text-estate-light" />
                4. The Yield Advantage
              </h3>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                Let&apos;s talk numbers. Comparable markets tell the story:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-estate/20">
                      <th className="text-left py-4 text-ivory/50 font-normal">Market</th>
                      <th className="text-center py-4 text-ivory/50 font-normal">Avg. Rental Yield</th>
                      <th className="text-center py-4 text-ivory/50 font-normal">Entry Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-estate/10">
                      <td className="py-4 text-ivory">London</td>
                      <td className="py-4 text-center text-ivory/60">2-3%</td>
                      <td className="py-4 text-center text-ivory/60">$$$$$</td>
                    </tr>
                    <tr className="border-b border-estate/10">
                      <td className="py-4 text-ivory">Dubai</td>
                      <td className="py-4 text-center text-ivory/60">6-8%</td>
                      <td className="py-4 text-center text-ivory/60">$$$$</td>
                    </tr>
                    <tr className="border-b border-estate/10">
                      <td className="py-4 text-ivory">Bali</td>
                      <td className="py-4 text-center text-ivory/60">5-7%</td>
                      <td className="py-4 text-center text-ivory/60">$$$</td>
                    </tr>
                    <tr className="border-b border-estate/10 bg-estate/10">
                      <td className="py-4 text-gold font-medium">Watamu, Kenya</td>
                      <td className="py-4 text-center text-gold font-medium">7-10%</td>
                      <td className="py-4 text-center text-gold font-medium">$$</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-ivory/70 leading-relaxed mb-6">
                Higher yields at lower entry prices, with growth potential as infrastructure 
                improves and tourism expands. This is the emerging market opportunity.
              </p>

              <h2 className="font-serif text-2xl text-ivory mt-12 mb-6">The Tokenization Advantage</h2>
              
              <p className="text-ivory/70 leading-relaxed mb-6">
                Traditional investment in East African real estate comes with challenges:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-ivory/70">
                  <div className="w-2 h-2 bg-red-400 mt-2 flex-shrink-0"></div>
                  Complex land title systems
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <div className="w-2 h-2 bg-red-400 mt-2 flex-shrink-0"></div>
                  Cross-border legal complexity
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <div className="w-2 h-2 bg-red-400 mt-2 flex-shrink-0"></div>
                  Property management from abroad
                </li>
                <li className="flex items-start gap-3 text-ivory/70">
                  <div className="w-2 h-2 bg-red-400 mt-2 flex-shrink-0"></div>
                  Currency conversion and repatriation
                </li>
              </ul>

              <p className="text-ivory/70 leading-relaxed mb-6">
                Royalty Tokens eliminate these barriers. You get exposure to the yield and 
                appreciation without the operational complexity. We handle the property, 
                you collect the dividends.
              </p>

              <div className="bg-gold/10 border border-gold/30 p-8 my-8 text-center">
                <p className="text-xl text-gold font-serif mb-4">Ready to invest in East African real estate?</p>
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
