'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Search, BookOpen, TrendingUp, Building, FileText } from 'lucide-react'

const categories = [
  { id: 'all', name: 'All' },
  { id: 'education', name: 'Education' },
  { id: 'market-analysis', name: 'Market Analysis' },
  { id: 'protocol', name: 'Protocol' },
  { id: 'guides', name: 'Investment Guides' },
]

const articles = [
  {
    id: 1,
    category: 'education',
    categoryLabel: 'Education',
    title: 'What Are Royalty Tokens? The Complete Guide',
    excerpt: 'If you have ever wanted to own a piece of real estate without all the complexity, Royalty Tokens are about to become your new favorite asset class. Own cash flow, not equity.',
    date: 'Jan 12, 2026',
    readTime: '10 min read',
    slug: 'what-are-royalty-tokens',
    featured: true,
    icon: BookOpen,
    image: '/eastafrica.png'
  },
  {
    id: 2,
    category: 'market-analysis',
    categoryLabel: 'Market Analysis',
    title: 'Why East African Coastal Properties Outperform',
    excerpt: 'Analyzing rental yields, tourism trends, and diaspora investment patterns shaping property markets in Watamu, Zanzibar, and the Swahili coast. 7-10% yields with growth potential.',
    date: 'Jan 8, 2026',
    readTime: '12 min read',
    slug: 'east-africa-2026-outlook',
    featured: true,
    icon: TrendingUp,
    image: '/eastafrica.png'
  },
  {
    id: 3,
    category: 'protocol',
    categoryLabel: 'Protocol',
    title: 'From Rent to Your Wallet: How Dividends Flow',
    excerpt: 'Technical deep-dive into how rental revenue is captured at point-of-sale, converted to USDC, and airdropped to token holders every month. Fully automatic.',
    date: 'Jan 3, 2026',
    readTime: '8 min read',
    slug: 'dividend-flow-explained',
    featured: false,
    icon: FileText,
    image: '/eastafrica.png'
  },
  {
    id: 4,
    category: 'education',
    categoryLabel: 'Education',
    title: 'Royalty Tokens vs Traditional Equity: What is Different?',
    excerpt: 'No dilution. No voting rights. No lockups. Just monthly stablecoin dividends from real rental income. Here is why Royalty Tokens beat traditional equity.',
    date: 'Dec 28, 2025',
    readTime: '7 min read',
    slug: 'royalty-vs-equity',
    featured: false,
    icon: BookOpen,
    image: '/dubai.png'
  },
  {
    id: 5,
    category: 'market-analysis',
    categoryLabel: 'Market Analysis',
    title: 'Dubai Real Estate: Premium Yields, Global Demand',
    excerpt: 'Overview of Dubai property market fundamentals, regulatory environment, and why it presents compelling opportunities for tokenized real estate royalties.',
    date: 'Dec 20, 2025',
    readTime: '9 min read',
    slug: 'dubai-market-overview',
    featured: false,
    icon: Building,
    image: '/dubai.png'
  },
  {
    id: 6,
    category: 'guides',
    categoryLabel: 'Investment Guide',
    title: 'Getting Started: Buy Your First Royalty Token',
    excerpt: 'Step-by-step guide to connecting your wallet, purchasing $BAHARI tokens, and receiving your first monthly USDC airdrop.',
    date: 'Dec 15, 2025',
    readTime: '5 min read',
    slug: 'getting-started-guide',
    featured: false,
    icon: FileText,
    image: '/eastafrica.png'
  },
  {
    id: 7,
    category: 'protocol',
    categoryLabel: 'Protocol',
    title: 'How Vaults Amplify Your Royalty Token Yields',
    excerpt: 'Understanding the difference between holding tokens directly vs depositing into vaults. When to use Senior, Junior, or Reserve strategies.',
    date: 'Dec 10, 2025',
    readTime: '8 min read',
    slug: 'vault-amplification',
    featured: false,
    icon: FileText,
    image: '/dubai.png'
  },
  {
    id: 8,
    category: 'guides',
    categoryLabel: 'Investment Guide',
    title: 'The Third Path: Beyond T-Bills and Memecoins',
    excerpt: 'DeFi has forced you into a false binary: boring yields or degenerate gambling. Royalty Tokens offer exposure to real, profitable real estate with actual fundamentals.',
    date: 'Dec 5, 2025',
    readTime: '6 min read',
    slug: 'third-path-investing',
    featured: false,
    icon: BookOpen,
    image: '/eastafrica.png'
  },
]

export default function ResearchPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticles = articles.filter(a => a.featured)

  return (
    <main className="pt-36 lg:pt-40">
      {/* Hero */}
      <section className="relative py-16 lg:py-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-estate-pattern opacity-30"></div>
        
        <div className="container-estate relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-medium text-gold uppercase tracking-[0.2em] mb-4">
              Insights & Education
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-ivory mb-6">
              Research
            </h1>
            <p className="text-lg text-ivory/60 leading-relaxed">
              In-depth analysis, protocol education, and market insights to help you 
              make informed investment decisions. Education over hype.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-charcoal-50">
        <div className="container-estate">
          <h2 className="font-serif text-2xl text-ivory mb-8">Featured</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredArticles.map((article, index) => {
              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-charcoal border border-estate/20 hover:border-estate/40 transition-all duration-300 overflow-hidden"
                >
                  <Link href={`/research/${article.slug}`} className="block">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={article.image} 
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent"></div>
                      <span className="absolute bottom-4 left-4 text-xs font-medium text-gold uppercase tracking-wider bg-charcoal/80 px-2 py-1">
                        {article.categoryLabel}
                      </span>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-serif text-2xl text-ivory mb-4 group-hover:text-ivory/80 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-ivory/50 leading-relaxed mb-6 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-ivory/40">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {article.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-estate-light opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-charcoal">
        <div className="container-estate">
          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-estate text-ivory'
                      : 'bg-charcoal-50 text-ivory/50 hover:text-ivory border border-estate/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory/30" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 bg-charcoal-50 border border-estate/20 
                         text-ivory placeholder:text-ivory/30 text-sm focus:outline-none 
                         focus:border-estate transition-colors"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-charcoal-50 border border-estate/20 hover:border-estate/40 transition-all duration-300 overflow-hidden"
              >
                <Link href={`/research/${article.slug}`} className="block">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <Image 
                      src={article.image} 
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-50 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <span className="inline-block text-xs font-medium text-gold uppercase tracking-wider mb-3">
                      {article.categoryLabel}
                    </span>
                    
                    <h3 className="font-serif text-xl text-ivory mb-3 group-hover:text-ivory/80 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-ivory/50 leading-relaxed mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
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
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-ivory/50">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-charcoal-50">
        <div className="container-estate">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-estate/20 to-estate/5 border border-estate/30 p-8 lg:p-12 text-center"
          >
            <BookOpen className="w-10 h-10 text-estate-light mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-ivory mb-3">
              Stay Informed
            </h3>
            <p className="text-ivory/60 text-sm leading-relaxed max-w-xl mx-auto mb-8">
              Get monthly insights on real estate tokenization, market analysis, and protocol 
              updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
          </motion.div>
        </div>
      </section>
    </main>
  )
}
