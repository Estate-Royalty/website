import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const footerLinks = {
  protocol: [
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Vaults', href: '/vaults' },
    { name: 'Markets', href: '/#markets' },
    { name: 'Security', href: '/#security' },
    { name: 'Tokenize Property', href: '/tokenize' },
  ],
  resources: [
    { name: 'Research', href: '/research' },
    { name: 'Documentation', href: '/docs' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Glossary', href: '/glossary' },
  ],
  legal: [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Risk Disclosure', href: '/risk-disclosure' },
    { name: 'Compliance', href: '/compliance' },
  ],
  community: [
    { name: 'Twitter / X', href: 'https://twitter.com/estateroyalty', external: true },
    { name: 'Discord', href: 'https://discord.gg/estateroyalty', external: true },
    { name: 'Telegram', href: 'https://t.me/estateroyalty', external: true },
    { name: 'Medium', href: 'https://medium.com/@estateroyalty', external: true },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-estate/20">
      {/* Main Footer */}
      <div className="container-estate py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-6">
              <Image 
                src="/logo.png" 
                alt="Estate Royalty" 
                width={320} 
                height={320} 
                className="h-24 w-auto"
              />
              <span className="font-serif text-2xl text-ivory tracking-wide">
                Estate <span className="text-gold">Royalty</span>
              </span>
            </Link>
            <p className="text-ivory/60 text-sm leading-relaxed max-w-xs mb-8">
              Property-backed yield through structured vaults. Tokenized real estate income 
              distributed as USD-denominated rental royalties.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-estate/20 text-estate-light border border-estate/30">
                Audited
              </span>
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gold/10 text-gold border border-gold/30">
                Regulated
              </span>
            </div>
          </div>

          {/* Protocol Links */}
          <div>
            <h4 className="font-serif text-sm font-medium text-ivory mb-6 tracking-wide uppercase">
              Protocol
            </h4>
            <ul className="space-y-3">
              {footerLinks.protocol.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-ivory/50 hover:text-ivory transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-serif text-sm font-medium text-ivory mb-6 tracking-wide uppercase">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-ivory/50 hover:text-ivory transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-serif text-sm font-medium text-ivory mb-6 tracking-wide uppercase">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-ivory/50 hover:text-ivory transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-serif text-sm font-medium text-ivory mb-6 tracking-wide uppercase">
              Community
            </h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-ivory/50 hover:text-ivory transition-colors duration-200"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-estate/10">
        <div className="container-estate py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-ivory/40">
              © {new Date().getFullYear()} Estate Royalty. All rights reserved.
            </p>
            <p className="text-xs text-ivory/40 text-center md:text-right max-w-xl">
              Investment in tokenized real estate involves risk. Past performance does not guarantee 
              future returns. Please read all risk disclosures before investing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
