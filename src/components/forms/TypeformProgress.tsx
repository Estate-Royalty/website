'use client'

import { motion } from 'framer-motion'

interface TypeformProgressProps {
  currentStep: number
  totalSteps: number
}

export default function TypeformProgress({ currentStep, totalSteps }: TypeformProgressProps) {
  const percentage = (currentStep / totalSteps) * 100

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-ivory/50">Step {currentStep} of {totalSteps}</span>
        <span className="text-sm text-ivory/50">{Math.round(percentage)}%</span>
      </div>
      <div className="h-1 bg-charcoal-50 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-estate to-gold"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  )
}
