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
    ]
  },
  {
    title: 'Property Details',
    fields: [
      { 
        name: 'propertyLocation', 
        label: 'Property Location', 
        type: 'text', 
        placeholder: 'City, Country',
        required: true 
      },
      { 
        name: 'propertyType', 
        label: 'Property Type', 
        type: 'select',
        options: [
          { value: 'residential', label: 'Residential (Airbnb/Short-term)' },
          { value: 'hospitality', label: 'Hospitality (Hotel/Serviced Apartment)' },
          { value: 'commercial', label: 'Commercial (Office/Retail)' },
          { value: 'mixed', label: 'Mixed Use' },
        ],
        required: true 
      },
      { 
        name: 'propertyValue', 
        label: 'Estimated Property Value (USD)', 
        type: 'text',
        placeholder: 'e.g., 500000',
        required: true 
      },
    ]
  },
  {
    title: 'Financial Information',
    fields: [
      { 
        name: 'monthlyRentalIncome', 
        label: 'Monthly Rental Income (USD)', 
        type: 'text',
        placeholder: 'e.g., 5000',
        required: true 
      },
      { 
        name: 'occupancyRate', 
        label: 'Average Occupancy Rate (%)', 
        type: 'text',
        placeholder: 'e.g., 75',
        required: true 
      },
      { 
        name: 'yearsOwned', 
        label: 'Years Owned', 
        type: 'text',
        placeholder: 'e.g., 3',
        required: true 
      },
      { 
        name: 'currentFinancing', 
        label: 'Current Financing Status', 
        type: 'select',
        options: [
          { value: 'owned-outright', label: 'Owned Outright' },
          { value: 'mortgage', label: 'Mortgage' },
          { value: 'loan', label: 'Other Loan' },
          { value: 'leasehold', label: 'Leasehold' },
        ],
        required: true 
      },
    ]
  },
  {
    title: 'Tokenization Goals',
    fields: [
      { 
        name: 'tokenizationGoals', 
        label: 'What are your goals for tokenization?', 
        type: 'textarea',
        placeholder: 'e.g., Access global capital, provide liquidity without selling, diversify investor base...',
        required: true 
      },
      { 
        name: 'timeline', 
        label: 'Preferred Timeline', 
        type: 'select',
        options: [
          { value: 'immediate', label: 'Immediate (0-3 months)' },
          { value: 'short-term', label: 'Short-term (3-6 months)' },
          { value: 'medium-term', label: 'Medium-term (6-12 months)' },
          { value: 'exploring', label: 'Just Exploring' },
        ],
        required: true 
      },
      { 
        name: 'additionalInfo', 
        label: 'Additional Information', 
        type: 'textarea',
        placeholder: 'Any other details you\'d like to share...',
        required: false 
      },
    ]
  },
]

export default function AssessmentForm() {
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
      const response = await fetch('/api/assessment', {
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
              Assessment Submitted
            </h1>
            <p className="text-xl text-ivory/60 leading-relaxed mb-8">
              Thank you for your interest in tokenizing your property. Our team will review 
              your submission and contact you within 2-3 business days.
            </p>
            <button
              onClick={() => router.push('/tokenize')}
              className="btn-secondary"
            >
              Return to Tokenization Page
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
                  Submit Assessment
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
