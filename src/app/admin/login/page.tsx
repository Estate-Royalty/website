'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Shield, Loader2, ArrowRight, Lock } from 'lucide-react'

export default function AdminLogin() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if already authenticated
    checkAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/check-auth')
      const data = await response.json()
      if (data.authenticated) {
        router.push('/admin')
      }
    } catch (err) {
      // Not authenticated, stay on login page
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    setLoading(true)
    setError(null)

    if (!password) {
      setError('Please enter the admin password')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }))
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()

      if (data.success) {
        setTimeout(() => {
          router.push('/admin')
          router.refresh()
        }, 500)
      } else {
        setError(data.error || 'Invalid password. Please try again.')
        setPassword('')
      }
    } catch (err: any) {
      console.error('Login error:', err)
      setError(err.message || 'Failed to login. Please try again.')
      setPassword('')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="pt-36 lg:pt-40 min-h-screen bg-charcoal flex items-center">
      <div className="container-estate">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-charcoal-50 border border-estate/20 p-8 lg:p-10"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-estate/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-estate-light" />
              </div>
              <h1 className="font-serif text-3xl text-ivory mb-2">
                Admin Access
              </h1>
              <p className="text-ivory/50 text-sm">
                Enter OTP sent to admin phone number
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 p-4 mb-6">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label className="block text-ivory mb-3 font-medium">
                  Admin Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ivory/30" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full pl-12 pr-4 py-3 bg-charcoal border border-estate/30 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold transition-colors"
                    autoFocus
                    disabled={loading}
                  />
                </div>
                <p className="text-ivory/40 text-xs mt-2">
                  Enter the admin password to access the dashboard
                </p>
              </div>

              <button
                type="submit"
                disabled={loading || !password}
                className={`w-full btn-gold ${
                  loading || !password 
                    ? 'opacity-50 cursor-not-allowed' 
                    : ''
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    Login
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
