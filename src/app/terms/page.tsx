'use client'

import { motion } from 'framer-motion'

export default function TermsOfService() {
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
              Legal
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl text-ivory mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-ivory/60 leading-relaxed">
              These terms govern your use of the Estate Royalty protocol and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-charcoal-50">
        <div className="container-estate">
          <div className="max-w-4xl mx-auto prose prose-invert prose-estate">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">1. Acceptance of Terms</h2>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  By accessing or using Estate Royalty (the "Protocol"), you agree to be bound by 
                  these Terms of Service. If you do not agree to these terms, do not use the Protocol.
                  These terms constitute a legally binding agreement between you and Estate Royalty.
                </p>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">2. Eligibility</h2>
                <div className="text-ivory/70 text-sm leading-relaxed space-y-4">
                  <p>To use the Protocol, you must:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
                    <li>Have the legal capacity to enter into binding agreements</li>
                    <li>Not be a resident of any jurisdiction where the Protocol is prohibited</li>
                    <li>Complete all required identity verification procedures</li>
                    <li>Not be subject to sanctions or located in sanctioned jurisdictions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">3. Description of Services</h2>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  Estate Royalty provides a blockchain-based platform for investing in tokenized 
                  real estate through structured vaults. The Protocol facilitates deposits into 
                  vaults, allocation of capital to property positions, and distribution of rental 
                  royalties. The Protocol does not provide investment advice, and all investment 
                  decisions are made solely by you.
                </p>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">4. Investment Risks</h2>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  You acknowledge that investing through the Protocol involves significant risks 
                  including but not limited to loss of principal, market volatility, regulatory 
                  changes, smart contract vulnerabilities, and liquidity constraints. You should 
                  carefully review the Risk Disclosure before investing and only invest funds 
                  you can afford to lose.
                </p>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">5. User Responsibilities</h2>
                <div className="text-ivory/70 text-sm leading-relaxed space-y-4">
                  <p>You are responsible for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Maintaining the security of your wallet and private keys</li>
                    <li>Ensuring accuracy of information provided during verification</li>
                    <li>Complying with all applicable laws in your jurisdiction</li>
                    <li>Paying all applicable taxes on your investment returns</li>
                    <li>Your own investment decisions and due diligence</li>
                  </ul>
                </div>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">6. Prohibited Activities</h2>
                <div className="text-ivory/70 text-sm leading-relaxed space-y-4">
                  <p>You may not:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use the Protocol for money laundering or terrorist financing</li>
                    <li>Circumvent identity verification requirements</li>
                    <li>Manipulate vault mechanics or exploit vulnerabilities</li>
                    <li>Use the Protocol from restricted jurisdictions</li>
                    <li>Engage in fraudulent or deceptive activities</li>
                  </ul>
                </div>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">7. Intellectual Property</h2>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  The Protocol, including its design, content, and trademarks, is the property of 
                  Estate Royalty. You are granted a limited license to use the Protocol for its 
                  intended purpose. You may not copy, modify, or distribute any part of the Protocol 
                  without written permission.
                </p>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">8. Limitation of Liability</h2>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  To the maximum extent permitted by law, Estate Royalty shall not be liable for 
                  any indirect, incidental, special, consequential, or punitive damages, including 
                  loss of profits or investment losses. Our total liability shall not exceed the 
                  amount of fees you have paid to the Protocol in the preceding 12 months.
                </p>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">9. Dispute Resolution</h2>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  Any disputes arising from these terms shall be resolved through binding arbitration 
                  in accordance with the rules of the relevant arbitration body. You waive any right 
                  to participate in class action lawsuits against Estate Royalty.
                </p>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">10. Modifications</h2>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  We reserve the right to modify these terms at any time. Material changes will be 
                  communicated through the Protocol interface. Your continued use after modifications 
                  constitutes acceptance of the updated terms.
                </p>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">11. Contact</h2>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  For questions about these Terms of Service, contact us at legal@estateroyalty.io
                </p>
              </div>
            </motion.div>

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
