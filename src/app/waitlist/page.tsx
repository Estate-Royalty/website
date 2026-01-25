'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import TypeformInput from '@/components/forms/TypeformInput'
import TypeformProgress from '@/components/forms/TypeformProgress'
import { CheckCircle2, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react'

const steps = [
  {
    title: 'Personal Information',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true },
      { name: 'email', label: 'Email Address', type: 'email', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
      { name: 'country', label: 'Country of Residence', type: 'text', required: true },
    ]
  },
  {
    title: 'Investment Profile',
    fields: [
      { 
        name: 'investmentExperience', 
        label: 'Investment Experience', 
        type: 'select',
        options: [
          { value: 'none', label: 'No experience' },
          { value: 'beginner', label: 'Beginner (1-2 years)' },
          { value: 'intermediate', label: 'Intermediate (3-5 years)' },
          { value: 'advanced', label: 'Advanced (5+ years)' },
          { value: 'professional', label: 'Professional Investor' },
        ],
        required: true 
      },
      { 
        name: 'investmentAmount', 
        label: 'Intended Investment Amount (USD)', 
        type: 'select',
        options: [
          { value: 'under-10k', label: 'Under $10,000' },
          { value: '10k-50k', label: '$10,000 - $50,000' },
          { value: '50k-100k', label: '$50,000 - $100,000' },
          { value: '100k-250k', label: '$100,000 - $250,000' },
          { value: '250k-500k', label: '$250,000 - $500,000' },
          { value: 'over-500k', label: 'Over $500,000' },
        ],
        required: true 
      },
      { 
        name: 'preferredVault', 
        label: 'Preferred Vault Type', 
        type: 'select',
        options: [
          { value: 'senior', label: 'Senior Vault (11-13% APY, Stable)' },
          { value: 'junior', label: 'Junior Vault (Up to 200% APY, Variable)' },
          { value: 'reserve', label: 'Reserve Vault (Max Yield, Direct Tokens)' },
          { value: 'tokens', label: 'Direct Token Holdings ($BAHARI)' },
          { value: 'not-sure', label: 'Not Sure Yet' },
        ],
        required: true 
      },
    ]
  },
  {
    title: 'Investment Goals',
    fields: [
      { 
        name: 'investmentGoals', 
        label: 'What are your investment goals?', 
        type: 'textarea',
        placeholder: 'e.g., Monthly passive income, long-term wealth building, diversification...',
        required: true 
      },
      { 
        name: 'howDidYouHear', 
        label: 'How did you hear about Estate Royalty?', 
        type: 'select',
        options: [
          { value: 'social-media', label: 'Social Media' },
          { value: 'friend', label: 'Friend/Referral' },
          { value: 'news', label: 'News/Article' },
          { value: 'search', label: 'Search Engine' },
          { value: 'podcast', label: 'Podcast' },
          { value: 'other', label: 'Other' },
        ],
        required: true 
      },
      { 
        name: 'additionalInfo', 
        label: 'Additional Information', 
        type: 'textarea',
        placeholder: 'Any questions or additional details...',
        required: false 
      },
    ]
  },
]

export default function WaitlistForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateStep = () => {
    const stepFields = steps[currentStep].fields
    const newErrors: Record<string, string> = {}
    
    stepFields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`
      }
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        handleSubmit()
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
      } else {
        alert('Submission failed. Please try again.')
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('An error occurred. Please try again.')
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <main className="pt-36 lg:pt-40 min-h-screen flex items-center bg-charcoal">
        <div className="container-estate">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-gold" />
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl text-ivory mb-6">
              You&apos;re on the Waitlist!
            </h1>
            <p className="text-xl text-ivory/60 leading-relaxed mb-8">
              Thank you for your interest in Estate Royalty. We&apos;ll notify you as soon as 
              $BAHARI tokens become available and vaults open for deposits.
            </p>
            <button
              onClick={() => router.push('/')}
              className="btn-secondary"
            >
              Return to Homepage
            </button>
          </motion.div>
        </div>
      </main>
    )
  }

  const currentStepData = steps[currentStep]

  return (
    <main className="pt-36 lg:pt-40 min-h-screen bg-charcoal">
      <div className="container-estate py-16">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <TypeformProgress currentStep={currentStep + 1} totalSteps={steps.length} />

          {/* Step Title */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="mb-8"
          >
            <h1 className="font-serif text-4xl lg:text-5xl text-ivory mb-4">
              {currentStepData.title}
            </h1>
            <p className="text-ivory/50">
              Step {currentStep + 1} of {steps.length}
            </p>
          </motion.div>

          {/* Form Fields */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStepData.fields.map((field) => (
                <TypeformInput
                  key={field.name}
                  label={field.label}
                  type={field.type as any}
                  placeholder={'placeholder' in field ? field.placeholder : undefined}
                  required={field.required}
                  error={errors[field.name]}
                  value={formData[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  options={'options' in field ? field.options : undefined}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-estate/20">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 ${
                currentStep === 0
                  ? 'text-ivory/20 cursor-not-allowed'
                  : 'text-ivory hover:text-gold transition-colors'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={isSubmitting}
              className="btn-gold group"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : currentStep === steps.length - 1 ? (
                <>
                  Join Waitlist
                  <CheckCircle2 className="ml-2 w-5 h-5" />
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
