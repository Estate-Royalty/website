'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Play, Pause } from 'lucide-react'

const heroSlides = [
  {
    image: '/eastafrica.png',
    location: 'Watamu, Kenya',
    title: 'East African Coast',
    subtitle: 'Pristine beaches, world-class marine parks',
    yield: '7-10%',
    token: '$BAHARI'
  },
  {
    image: '/dubai.png',
    location: 'Dubai, UAE',
    title: 'Dubai Marina',
    subtitle: 'Premium waterfront living, global hub',
    yield: '6-8%',
    token: 'Coming Soon'
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPlaying])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/50"></div>
        <div className="absolute inset-0 bg-charcoal/30"></div>
      </div>

      {/* Slide Location Indicator */}
      <motion.div 
        key={`location-${currentSlide}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-44 lg:top-48 right-8 lg:right-16 z-20 hidden md:block"
      >
        <div className="bg-charcoal/80 backdrop-blur-sm border border-gold/30 p-4">
          <div className="flex items-center gap-2 text-gold mb-1">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{heroSlides[currentSlide].location}</span>
          </div>
          <div className="text-ivory/60 text-xs">{heroSlides[currentSlide].subtitle}</div>
          <div className="mt-2 pt-2 border-t border-gold/20">
            <span className="text-xs text-ivory/50">Est. Yield: </span>
            <span className="text-gold font-serif text-lg">{heroSlides[currentSlide].yield}</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container-estate relative z-10 pt-44 lg:pt-48 pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm border border-gold/40 mb-8"
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gold tracking-wider uppercase">
              $BAHARI Token Launching Soon
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-ivory leading-[1.05] mb-6"
          >
            Own Real Estate.
            <br />
            <span className="text-gold">Earn Royalties.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-ivory/70 leading-relaxed max-w-2xl mb-10"
          >
            Hold Royalty Tokens, receive stablecoin dividends monthly. 
            No complexity. No operational headaches. Just cash flow.
          </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link href="/waitlist" className="btn-gold text-lg px-10 py-5 group">
                Join Waitlist
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/vaults" className="btn-secondary text-lg px-10 py-5">
                Explore Vaults
              </Link>
            </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 pt-8 border-t border-ivory/20"
          >
            <div>
              <div className="font-serif text-4xl lg:text-5xl text-gold mb-2">$10</div>
              <div className="text-sm text-ivory/60 uppercase tracking-wide">Launch Price</div>
            </div>
            <div>
              <div className="font-serif text-4xl lg:text-5xl text-gold mb-2">$4K</div>
              <div className="text-sm text-ivory/60 uppercase tracking-wide">Monthly Royalties</div>
            </div>
            <div>
              <div className="font-serif text-4xl lg:text-5xl text-gold mb-2">200%</div>
              <div className="text-sm text-ivory/60 uppercase tracking-wide">Max Vault APY</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        {/* Slide Indicators */}
        <div className="flex items-center gap-3">
          {heroSlides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 h-1.5 bg-gold' 
                  : 'w-6 h-1.5 bg-ivory/30 hover:bg-ivory/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Nav Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 bg-charcoal/60 backdrop-blur-sm border border-ivory/20 flex items-center justify-center text-ivory/70 hover:text-ivory hover:border-ivory/40 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 bg-charcoal/60 backdrop-blur-sm border border-ivory/20 flex items-center justify-center text-ivory/70 hover:text-ivory hover:border-ivory/40 transition-all"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 bg-charcoal/60 backdrop-blur-sm border border-ivory/20 flex items-center justify-center text-ivory/70 hover:text-ivory hover:border-ivory/40 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Property Cards - Bottom */}
      <div className="absolute bottom-24 right-8 lg:right-16 z-20 hidden lg:flex gap-4">
        {heroSlides.map((slide, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            className={`relative w-32 h-20 overflow-hidden border-2 transition-all duration-300 ${
              index === currentSlide 
                ? 'border-gold scale-105' 
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/40"></div>
            <div className="absolute bottom-1 left-2 text-xs text-ivory font-medium">
              {slide.title}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-charcoal to-transparent pointer-events-none"></div>
    </section>
  )
}
