'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react'

const articles = [
  {
    category: 'Education',
    title: 'What Are Royalty Tokens? The Complete Guide',
    excerpt: 'If you have ever wanted to own a piece of real estate without all the complexity, Royalty Tokens are about to become your new favorite asset class.',
    date: 'Jan 12, 2026',
    readTime: '10 min read',
    slug: 'what-are-royalty-tokens'
  },
  {
    category: 'Market Analysis',
    title: 'Why East African Coastal Properties Outperform',
    excerpt: 'Analyzing rental yields, tourism trends, and diaspora investment patterns shaping property markets in Watamu, Zanzibar, and the Swahili coast.',
    date: 'Jan 8, 2026',
    readTime: '12 min read',
    slug: 'east-africa-2026-outlook'
  },
  {
    category: 'Protocol',
    title: 'From Rent to Your Wallet: How Dividends Flow',
    excerpt: 'Technical deep-dive into how rental revenue is captured, converted to stablecoins, and airdropped to token holders every month.',
    date: 'Jan 3, 2026',
    readTime: '8 min read',
    slug: 'dividend-flow-explained'
  }
]

export default function Research() {
  return (
    <section className="relative py-24 lg:py-32 bg-charcoal">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      <div className="container-estate relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="inline-block text-xs font-medium text-gold uppercase tracking-[0.2em] mb-4">
              Insights & Education
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-ivory mb-4">
              Research
            </h2>
            <p className="text-lg text-ivory/60 max-w-xl">
              In-depth analysis, protocol education, and market insights 
              to help you make informed investment decisions.
            </p>
          </div>
          <Link 
            href="/research" 
            className="mt-6 md:mt-0 btn-secondary group"
          >
            View All
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-charcoal-50 border border-estate/20 hover:border-estate/40 transition-all duration-300"
            >
              <Link href={`/research/${article.slug}`} className="block p-6">
                {/* Category */}
                <span className="inline-block text-xs font-medium text-gold uppercase tracking-wider mb-4">
                  {article.category}
                </span>
                
                {/* Title */}
                <h3 className="font-serif text-xl text-ivory mb-3 group-hover:text-ivory/80 transition-colors">
                  {article.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-sm text-ivory/50 leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-ivory/40 pt-4 border-t border-estate/10">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-estate/20 to-estate/5 border border-estate/30 p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-estate-light" />
                <span className="text-xs text-gold uppercase tracking-wider">Monthly Newsletter</span>
              </div>
              <h3 className="font-serif text-2xl text-ivory mb-3">
                Estate Royalty Digest
              </h3>
              <p className="text-ivory/60 text-sm leading-relaxed">
                Monthly insights on real estate tokenization, market analysis, protocol updates, 
                and educational content. No spam, unsubscribe anytime.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-charcoal border border-estate/30 text-ivory 
                         placeholder:text-ivory/30 focus:outline-none focus:border-estate 
                         transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
