'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle2 } from 'lucide-react'

export default function RiskDisclosure() {
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
              Important Information
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl text-ivory mb-6">
              Risk Disclosure
            </h1>
            <p className="text-lg text-ivory/60 leading-relaxed">
              Please read this document carefully before investing. Understanding the risks 
              involved is essential to making informed investment decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-charcoal-50">
        <div className="container-estate">
          <div className="max-w-4xl mx-auto">
            {/* Warning Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gold/10 border border-gold/30 p-6 mb-12 flex items-start gap-4"
            >
              <AlertTriangle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg text-ivory mb-2">Investment Risk Warning</h3>
                <p className="text-sm text-ivory/70 leading-relaxed">
                  Investment in tokenized real estate involves significant risk. You may lose some 
                  or all of your invested capital. Past performance is not indicative of future 
                  results. Returns are not guaranteed.
                </p>
              </div>
            </motion.div>

            {/* Risk Categories */}
            <div className="space-y-12">
              {/* Market Risk */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-charcoal border border-estate/20 p-8"
              >
                <h2 className="font-serif text-2xl text-ivory mb-6">Market & Property Risks</h2>
                <div className="space-y-4 text-ivory/70 text-sm leading-relaxed">
                  <p>
                    <span className="text-ivory font-medium">Property Value Fluctuation:</span> Real 
                    estate values can decline due to economic conditions, local market factors, 
                    property-specific issues, or changes in demand. This may affect both rental 
                    income and the value of underlying property tokens.
                  </p>
                  <p>
                    <span className="text-ivory font-medium">Rental Income Variability:</span> Rental 
                    income is not guaranteed. Vacancies, tenant defaults, rent reductions, or 
                    increased operating costs may reduce distributions below projected levels.
                  </p>
                  <p>
                    <span className="text-ivory font-medium">Geographic Concentration:</span> Properties 
                    are concentrated in specific markets (East Africa, Dubai). Regional economic 
                    downturns, political instability, or regulatory changes could disproportionately 
                    impact returns.
                  </p>
                  <p>
                    <span className="text-ivory font-medium">Currency Risk:</span> Properties generate 
                    income in local currencies which is converted to USD-denominated stablecoins. 
                    Currency fluctuations may affect actual returns.
                  </p>
                </div>
              </motion.div>

              {/* Protocol Risk */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-charcoal border border-estate/20 p-8"
              >
                <h2 className="font-serif text-2xl text-ivory mb-6">Protocol & Technology Risks</h2>
                <div className="space-y-4 text-ivory/70 text-sm leading-relaxed">
                  <p>
                    <span className="text-ivory font-medium">Smart Contract Risk:</span> Despite 
                    security audits, smart contracts may contain vulnerabilities that could result 
                    in loss of funds. New attack vectors may emerge that were not anticipated 
                    during audits.
                  </p>
                  <p>
                    <span className="text-ivory font-medium">Protocol Risk:</span> The Estate Royalty 
                    protocol may experience technical failures, governance disputes, or operational 
                    issues that could affect distributions or access to funds.
                  </p>
                  <p>
                    <span className="text-ivory font-medium">Blockchain Risk:</span> Underlying blockchain 
                    networks may experience congestion, forks, or other issues that could affect 
                    transaction processing and access to your position.
                  </p>
                  <p>
                    <span className="text-ivory font-medium">Stablecoin Risk:</span> USD-denominated 
                    distributions rely on stablecoins which carry their own risks including 
                    de-pegging, regulatory action, or issuer insolvency.
                  </p>
                </div>
              </motion.div>

              {/* Regulatory Risk */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-charcoal border border-estate/20 p-8"
              >
                <h2 className="font-serif text-2xl text-ivory mb-6">Regulatory & Legal Risks</h2>
                <div className="space-y-4 text-ivory/70 text-sm leading-relaxed">
                  <p>
                    <span className="text-ivory font-medium">Regulatory Changes:</span> Laws and 
                    regulations governing tokenized securities and real estate may change. Such 
                    changes could affect the protocol's operations, your ability to access funds, 
                    or the tax treatment of your investment.
                  </p>
                  <p>
                    <span className="text-ivory font-medium">Jurisdictional Restrictions:</span> The 
                    protocol may become unavailable in certain jurisdictions due to regulatory 
                    requirements. You are responsible for compliance with laws in your jurisdiction.
                  </p>
                  <p>
                    <span className="text-ivory font-medium">Legal Structure Risk:</span> The SPV 
                    structures holding property may be subject to legal challenges, tax disputes, 
                    or enforcement actions that could affect your rights to underlying assets.
                  </p>
                </div>
              </motion.div>

              {/* Vault-Specific Risks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-charcoal border border-estate/20 p-8"
              >
                <h2 className="font-serif text-2xl text-ivory mb-6">Vault-Specific Risks</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-lg text-estate-light mb-3">Senior Vault</h3>
                    <p className="text-ivory/70 text-sm leading-relaxed">
                      While Senior vault holders have priority on distributions, this does not 
                      eliminate risk. In severe downturns, even Senior distributions may be 
                      reduced or suspended. Lower returns mean longer time to recover any losses.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-gold mb-3">Junior Vault</h3>
                    <p className="text-ivory/70 text-sm leading-relaxed">
                      Junior vault holders face higher variability in returns. In periods of 
                      reduced rental income, Junior distributions may be significantly reduced 
                      or eliminated while Senior obligations are serviced first.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-gold mb-3">Reserve Vault</h3>
                    <p className="text-ivory/70 text-sm leading-relaxed">
                      Reserve vault holders bear the highest risk. Distributions occur only after 
                      Senior and Junior obligations. In difficult periods, Reserve holders may 
                      receive no distributions. Direct exposure to property token values means 
                      full participation in both upside and downside.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Liquidity Risk */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-charcoal border border-estate/20 p-8"
              >
                <h2 className="font-serif text-2xl text-ivory mb-6">Liquidity & Withdrawal Risks</h2>
                <div className="space-y-4 text-ivory/70 text-sm leading-relaxed">
                  <p>
                    <span className="text-ivory font-medium">Lock Periods:</span> Deposits are subject 
                    to lock periods during which withdrawals are not permitted. Plan your liquidity 
                    needs accordingly.
                  </p>
                  <p>
                    <span className="text-ivory font-medium">Withdrawal Delays:</span> Even after lock 
                    periods, withdrawals may be subject to processing times or queuing depending 
                    on protocol liquidity.
                  </p>
                  <p>
                    <span className="text-ivory font-medium">Secondary Market:</span> There may be 
                    limited secondary market liquidity for vault positions. You may not be able 
                    to sell your position at desired prices.
                  </p>
                </div>
              </motion.div>

              {/* Acknowledgment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-estate/10 border border-estate/30 p-8"
              >
                <h2 className="font-serif text-2xl text-ivory mb-6">Investor Acknowledgment</h2>
                <p className="text-ivory/70 text-sm leading-relaxed mb-6">
                  By investing in Estate Royalty vaults, you acknowledge and accept that:
                </p>
                <ul className="space-y-3">
                  {[
                    'You have read and understood this risk disclosure',
                    'You understand that investment returns are not guaranteed',
                    'You have sufficient financial resources to bear a total loss of your investment',
                    'You have sought independent financial and legal advice as appropriate',
                    'You are investing in accordance with all applicable laws in your jurisdiction',
                    'You understand the specific risks associated with your chosen vault tier',
                    'You accept responsibility for your own investment decisions'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ivory/70">
                      <CheckCircle2 className="w-4 h-4 text-estate-light flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Last Updated */}
            <p className="text-xs text-ivory/30 text-center mt-12">
              Last updated: January 13, 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
