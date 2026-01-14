'use client'

import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-ivory/60 leading-relaxed">
              How we collect, use, and protect your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-charcoal-50">
        <div className="container-estate">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">1. Information We Collect</h2>
                <div className="text-ivory/70 text-sm leading-relaxed space-y-4">
                  <p><span className="text-ivory font-medium">Identity Information:</span> Name, date of birth, 
                  nationality, government-issued ID, and photograph for KYC verification.</p>
                  <p><span className="text-ivory font-medium">Contact Information:</span> Email address and 
                  communication preferences.</p>
                  <p><span className="text-ivory font-medium">Financial Information:</span> Wallet addresses, 
                  transaction history, investment amounts, and distribution records.</p>
                  <p><span className="text-ivory font-medium">Technical Information:</span> IP address, browser type, 
                  device information, and usage patterns.</p>
                </div>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">2. How We Use Your Information</h2>
                <div className="text-ivory/70 text-sm leading-relaxed space-y-4">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Verify your identity and comply with regulatory requirements</li>
                    <li>Process your investments and distribute royalties</li>
                    <li>Communicate about your account and the Protocol</li>
                    <li>Detect and prevent fraud or unauthorized access</li>
                    <li>Improve our services and user experience</li>
                    <li>Comply with legal obligations and respond to lawful requests</li>
                  </ul>
                </div>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">3. Information Sharing</h2>
                <div className="text-ivory/70 text-sm leading-relaxed space-y-4">
                  <p>We may share your information with:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><span className="text-ivory">KYC/AML Providers:</span> Third-party identity verification services</li>
                    <li><span className="text-ivory">Auditors:</span> For compliance and financial auditing purposes</li>
                    <li><span className="text-ivory">Legal Authorities:</span> When required by law or legal process</li>
                    <li><span className="text-ivory">Service Providers:</span> Who assist in operating the Protocol</li>
                  </ul>
                  <p className="mt-4">We do not sell your personal information to third parties.</p>
                </div>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">4. Data Security</h2>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  We implement industry-standard security measures to protect your information, 
                  including encryption, access controls, and regular security assessments. However, 
                  no system is completely secure, and we cannot guarantee absolute security of your data.
                </p>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">5. Data Retention</h2>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  We retain your personal information for as long as necessary to provide services, 
                  comply with legal obligations, and resolve disputes. KYC information is retained 
                  in accordance with applicable anti-money laundering regulations.
                </p>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">6. Your Rights</h2>
                <div className="text-ivory/70 text-sm leading-relaxed space-y-4">
                  <p>Depending on your jurisdiction, you may have rights to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and obtain a copy of your personal data</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your data (subject to legal requirements)</li>
                    <li>Object to or restrict certain processing</li>
                    <li>Data portability</li>
                  </ul>
                  <p className="mt-4">Contact privacy@estateroyalty.io to exercise these rights.</p>
                </div>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">7. Blockchain Transparency</h2>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  Please note that transactions on public blockchains are permanent and publicly 
                  visible. While we protect off-chain personal data, on-chain transaction data 
                  including wallet addresses cannot be deleted or modified.
                </p>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">8. Cookies & Tracking</h2>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  We use cookies and similar technologies to enhance your experience, analyze usage, 
                  and for security purposes. You can control cookie preferences through your browser 
                  settings, though this may affect Protocol functionality.
                </p>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">9. International Transfers</h2>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  Your information may be transferred to and processed in countries other than your 
                  country of residence. We ensure appropriate safeguards are in place for such 
                  transfers in compliance with applicable data protection laws.
                </p>
              </div>

              <div className="bg-charcoal border border-estate/20 p-8">
                <h2 className="font-serif text-2xl text-ivory mb-4">10. Contact Us</h2>
                <p className="text-ivory/70 text-sm leading-relaxed">
                  For privacy-related inquiries, contact our Data Protection Officer at 
                  privacy@estateroyalty.io
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
