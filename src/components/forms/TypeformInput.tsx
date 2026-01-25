'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'

interface TypeformInputProps {
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  error?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  options?: { value: string; label: string }[]
  rows?: number
}

const TypeformInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  TypeformInputProps
>(({ label, type = 'text', placeholder, required, error, value, onChange, options, rows }, ref) => {
  const inputId = `input-${label.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <label
        htmlFor={inputId}
        className="block text-lg text-ivory mb-3 font-medium"
      >
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          id={inputId}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows || 4}
          className={`w-full px-4 py-3 bg-charcoal-50 border ${
            error ? 'border-red-400' : 'border-estate/30'
          } text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold transition-colors resize-none`}
        />
      ) : type === 'select' ? (
        <select
          id={inputId}
          ref={ref as React.Ref<HTMLSelectElement>}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full px-4 py-3 bg-charcoal-50 border ${
            error ? 'border-red-400' : 'border-estate/30'
          } text-ivory focus:outline-none focus:border-gold transition-colors`}
        >
          <option value="">{placeholder || 'Select an option...'}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={inputId}
          ref={ref as React.Ref<HTMLInputElement>}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full px-4 py-3 bg-charcoal-50 border ${
            error ? 'border-red-400' : 'border-estate/30'
          } text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold transition-colors`}
        />
      )}
      
      {error && (
        <p className="mt-2 text-sm text-red-400">{error}</p>
      )}
    </motion.div>
  )
})

TypeformInput.displayName = 'TypeformInput'

export default TypeformInput
