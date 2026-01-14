import Hero from '@/components/sections/Hero'
import WhatAreRoyaltyTokens from '@/components/sections/WhatAreRoyaltyTokens'
import TokenLaunch from '@/components/sections/TokenLaunch'
import VaultsOverview from '@/components/sections/VaultsOverview'
import Markets from '@/components/sections/Markets'
import Security from '@/components/sections/Security'
import Research from '@/components/sections/Research'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <WhatAreRoyaltyTokens />
      <TokenLaunch />
      <VaultsOverview />
      <Markets />
      <Security />
      <Research />
      <CTA />
    </>
  )
}
