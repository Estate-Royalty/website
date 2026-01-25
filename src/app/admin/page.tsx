'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Users, Building2, LogOut, ChevronDown, ChevronUp, Search, Download, ArrowUpDown, Trash2, AlertTriangle } from 'lucide-react'

interface Submission {
  id: number
  full_name: string
  email: string
  phone?: string
  created_at: string
  [key: string]: any
}

type SortField = string
type SortDirection = 'asc' | 'desc'

export default function AdminPage() {
  const router = useRouter()
  const [assessments, setAssessments] = useState<Submission[]>([])
  const [waitlist, setWaitlist] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'assessments' | 'waitlist'>('assessments')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortField, setSortField] = useState<SortField>('created_at')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')
  const [selectedRow, setSelectedRow] = useState<number | null>(null)
  const [showClearConfirm, setShowClearConfirm] = useState(false)
  const [clearing, setClearing] = useState(false)

  useEffect(() => {
    checkAuthentication()
  }, [])

  const checkAuthentication = async () => {
    try {
      const response = await fetch('/api/admin/check-auth')
      const data = await response.json()
      
      if (data.authenticated) {
        setIsAuthenticated(true)
        fetchSubmissions()
      } else {
        router.push('/admin/login')
      }
    } catch (err) {
      router.push('/admin/login')
    } finally {
      setCheckingAuth(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (err) {
      router.push('/admin/login')
    }
  }

  const fetchSubmissions = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/submissions')
      const data = await response.json()
      
      if (data.success) {
        setAssessments(data.assessments.data)
        setWaitlist(data.waitlist.data)
        setError(null)
      } else {
        setError(data.error || 'Failed to fetch submissions')
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  // Get column definitions based on active tab
  const getColumns = () => {
    if (activeTab === 'assessments') {
      return [
        { key: 'id', label: 'ID', width: '60px' },
        { key: 'full_name', label: 'Name', width: '150px' },
        { key: 'email', label: 'Email', width: '200px' },
        { key: 'phone', label: 'Phone', width: '130px' },
        { key: 'property_location', label: 'Location', width: '180px' },
        { key: 'property_type', label: 'Type', width: '120px' },
        { key: 'property_value', label: 'Value', width: '120px' },
        { key: 'monthly_rental_income', label: 'Monthly Income', width: '140px' },
        { key: 'occupancy_rate', label: 'Occupancy', width: '100px' },
        { key: 'years_owned', label: 'Years Owned', width: '110px' },
        { key: 'current_financing', label: 'Financing', width: '130px' },
        { key: 'timeline', label: 'Timeline', width: '140px' },
        { key: 'tokenization_goals', label: 'Goals', width: '250px' },
        { key: 'additional_info', label: 'Additional Info', width: '300px' },
        { key: 'created_at', label: 'Submitted', width: '160px' },
      ]
    } else {
      return [
        { key: 'id', label: 'ID', width: '60px' },
        { key: 'full_name', label: 'Name', width: '150px' },
        { key: 'email', label: 'Email', width: '200px' },
        { key: 'phone', label: 'Phone', width: '130px' },
        { key: 'country', label: 'Country', width: '120px' },
        { key: 'investment_experience', label: 'Experience', width: '130px' },
        { key: 'investment_amount', label: 'Amount', width: '140px' },
        { key: 'preferred_vault', label: 'Preferred Vault', width: '150px' },
        { key: 'investment_goals', label: 'Goals', width: '250px' },
        { key: 'how_did_you_hear', label: 'Source', width: '140px' },
        { key: 'additional_info', label: 'Additional Info', width: '300px' },
        { key: 'created_at', label: 'Submitted', width: '160px' },
      ]
    }
  }

  const columns = getColumns()
  const currentData = activeTab === 'assessments' ? assessments : waitlist

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = currentData

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = currentData.filter((row) => {
        return Object.values(row).some((value) => 
          value && value.toString().toLowerCase().includes(query)
        )
      })
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      const aValue = a[sortField]
      const bValue = b[sortField]

      if (aValue === null || aValue === undefined) return 1
      if (bValue === null || bValue === undefined) return -1

      if (sortField === 'created_at') {
        const aDate = new Date(aValue).getTime()
        const bDate = new Date(bValue).getTime()
        return sortDirection === 'asc' ? aDate - bDate : bDate - aDate
      }

      const aStr = String(aValue).toLowerCase()
      const bStr = String(bValue).toLowerCase()

      if (sortDirection === 'asc') {
        return aStr.localeCompare(bStr)
      } else {
        return bStr.localeCompare(aStr)
      }
    })

    return sorted
  }, [currentData, searchQuery, sortField, sortDirection])

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const exportToCSV = () => {
    const headers = columns.map(col => col.label)
    const rows = filteredAndSortedData.map(row => 
      columns.map(col => {
        const value = row[col.key] || ''
        // Escape commas and quotes in CSV
        if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
          return `"${value.replace(/"/g, '""')}"`
        }
        return value
      })
    )

    const csv = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${activeTab}-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const handleClearDB = async () => {
    if (!showClearConfirm) {
      setShowClearConfirm(true)
      return
    }

    setClearing(true)
    try {
      const response = await fetch('/api/admin/clear-db', {
        method: 'POST',
      })

      const data = await response.json()

      if (data.success) {
        setAssessments([])
        setWaitlist([])
        setShowClearConfirm(false)
        alert('Database cleared successfully')
      } else {
        alert('Failed to clear database: ' + data.error)
      }
    } catch (err: any) {
      alert('Error clearing database: ' + err.message)
    } finally {
      setClearing(false)
      setShowClearConfirm(false)
    }
  }

  if (checkingAuth) {
    return (
      <main className="pt-36 lg:pt-40 min-h-screen bg-charcoal flex items-center">
        <div className="container-estate text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gold"></div>
          <p className="text-ivory/50 mt-4">Checking authentication...</p>
        </div>
      </main>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <main className="pt-36 lg:pt-40 min-h-screen bg-charcoal">
      <div className="container-estate py-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl text-ivory mb-2">
              Submissions Dashboard
            </h1>
            <p className="text-ivory/50 text-sm">
              {assessments.length} assessments • {waitlist.length} waitlist entries
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm text-ivory/50 hover:text-ivory border border-estate/20 hover:border-estate/40 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Tabs and Controls */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex gap-2 border-b border-estate/20">
            <button
              onClick={() => {
                setActiveTab('assessments')
                setSearchQuery('')
                setSelectedRow(null)
              }}
              className={`px-6 py-3 font-medium transition-colors border-b-2 ${
                activeTab === 'assessments'
                  ? 'text-gold border-gold'
                  : 'text-ivory/50 border-transparent hover:text-ivory'
              }`}
            >
              Assessments ({assessments.length})
            </button>
            <button
              onClick={() => {
                setActiveTab('waitlist')
                setSearchQuery('')
                setSelectedRow(null)
              }}
              className={`px-6 py-3 font-medium transition-colors border-b-2 ${
                activeTab === 'waitlist'
                  ? 'text-gold border-gold'
                  : 'text-ivory/50 border-transparent hover:text-ivory'
              }`}
            >
              Waitlist ({waitlist.length})
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory/30" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-charcoal-50 border border-estate/20 text-ivory placeholder:text-ivory/30 text-sm focus:outline-none focus:border-estate w-64"
              />
            </div>
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-4 py-2 bg-estate/20 hover:bg-estate/30 border border-estate/30 text-ivory text-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
            <button
              onClick={fetchSubmissions}
              className="px-4 py-2 bg-charcoal-50 hover:bg-charcoal border border-estate/20 text-ivory text-sm transition-colors"
            >
              Refresh
            </button>
            <button
              onClick={handleClearDB}
              disabled={clearing}
              className={`flex items-center gap-2 px-4 py-2 border text-sm transition-colors ${
                showClearConfirm
                  ? 'bg-red-500/20 border-red-500/50 text-red-400 hover:bg-red-500/30'
                  : 'bg-charcoal-50 hover:bg-charcoal border-red-500/30 text-red-400 hover:border-red-500/50'
              }`}
            >
              {clearing ? (
                <>
                  <div className="w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full animate-spin"></div>
                  Clearing...
                </>
              ) : (
                <>
                  <Trash2 className="w-4 h-4" />
                  {showClearConfirm ? 'Confirm Clear' : 'Clear DB'}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Clear Confirmation Warning */}
        {showClearConfirm && (
          <div className="mb-6 bg-red-500/10 border border-red-500/30 p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-red-400 font-medium mb-1">Warning: This will delete all data</p>
              <p className="text-red-300/80 text-sm">
                This action cannot be undone. All {assessments.length + waitlist.length} submissions will be permanently deleted.
              </p>
            </div>
            <button
              onClick={() => setShowClearConfirm(false)}
              className="text-red-400 hover:text-red-300 text-sm"
            >
              Cancel
            </button>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 p-4 mb-6">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gold"></div>
            <p className="text-ivory/50 mt-4">Loading submissions...</p>
          </div>
        )}

        {/* Spreadsheet Table */}
        {!loading && !error && (
          <div className="bg-charcoal-50 border border-estate/20 overflow-x-auto">
            {filteredAndSortedData.length === 0 ? (
              <div className="p-12 text-center">
                <Users className="w-12 h-12 text-ivory/30 mx-auto mb-4" />
                <p className="text-xl text-ivory/50 mb-2">No submissions found</p>
                <p className="text-ivory/40">
                  {searchQuery ? 'Try a different search term' : 'No data available yet'}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto" style={{ maxHeight: 'calc(100vh - 300px)' }}>
                <table className="w-full border-collapse" style={{ minWidth: '100%' }}>
                  {/* Header Row */}
                  <thead className="bg-charcoal border-b-2 border-estate/30 sticky top-0 z-10">
                    <tr>
                      {columns.map((column) => (
                        <th
                          key={column.key}
                          className="px-3 py-3 text-left text-xs font-medium text-ivory/70 uppercase tracking-wider border-r border-estate/20 last:border-r-0"
                          style={{ width: column.width, minWidth: column.width }}
                        >
                          <button
                            onClick={() => handleSort(column.key)}
                            className="flex items-center gap-1 hover:text-ivory transition-colors w-full text-left"
                          >
                            {column.label}
                            {sortField === column.key ? (
                              sortDirection === 'asc' ? (
                                <ChevronUp className="w-3 h-3" />
                              ) : (
                                <ChevronDown className="w-3 h-3" />
                              )
                            ) : (
                              <ArrowUpDown className="w-3 h-3 opacity-30" />
                            )}
                          </button>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  {/* Data Rows */}
                  <tbody className="bg-charcoal-50">
                    {filteredAndSortedData.map((row, index) => (
                      <tr
                        key={row.id}
                        onClick={() => setSelectedRow(selectedRow === row.id ? null : row.id)}
                        className={`border-b border-estate/10 hover:bg-charcoal/50 transition-colors cursor-pointer ${
                          selectedRow === row.id ? 'bg-charcoal/30' : ''
                        }`}
                      >
                        {columns.map((column) => {
                          const value = row[column.key]
                          let displayValue = value || '-'
                          
                          if (column.key === 'created_at' && value) {
                            displayValue = formatDate(value)
                          } else if (typeof value === 'string' && value.length > 50) {
                            displayValue = value.substring(0, 50) + '...'
                          }

                          return (
                            <td
                              key={column.key}
                              className="px-3 py-2 text-sm text-ivory/80 border-r border-estate/10 last:border-r-0 whitespace-nowrap"
                              style={{ width: column.width, minWidth: column.width }}
                              title={typeof value === 'string' && value.length > 50 ? value : undefined}
                            >
                              {displayValue}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Results Count */}
            <div className="bg-charcoal border-t border-estate/20 px-4 py-2 flex items-center justify-between text-xs text-ivory/50">
              <span>
                Showing {filteredAndSortedData.length} of {currentData.length} {activeTab}
                {searchQuery && ` (filtered)`}
              </span>
              {selectedRow && (
                <span>Row {filteredAndSortedData.findIndex(r => r.id === selectedRow) + 1} selected</span>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
