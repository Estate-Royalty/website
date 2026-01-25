import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import pool from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const cookieStore = await cookies()
    const isAuthenticated = cookieStore.get('admin_authenticated')?.value === 'true'

    if (!isAuthenticated) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Clear both tables - use DELETE instead of TRUNCATE for better compatibility
    // DELETE is more compatible across different PostgreSQL setups
    const deleteAssessments = await pool.query('DELETE FROM property_assessments')
    const deleteWaitlist = await pool.query('DELETE FROM investor_waitlist')
    
    // Reset sequences to start from 1
    await pool.query("SELECT setval('property_assessments_id_seq', 1, false)")
    await pool.query("SELECT setval('investor_waitlist_id_seq', 1, false)")

    return NextResponse.json({
      success: true,
      message: 'Database cleared successfully',
      deleted: {
        assessments: deleteAssessments.rowCount || 0,
        waitlist: deleteWaitlist.rowCount || 0
      }
    })
  } catch (error: any) {
    console.error('Clear DB error:', error)
    
    // Provide more specific error messages
    let errorMessage = error.message || 'Failed to clear database'
    
    if (error.code === '42P01') {
      errorMessage = 'Database tables do not exist. Please run the schema.sql file first.'
    } else if (error.code === '42501') {
      errorMessage = 'Insufficient permissions to clear database tables.'
    } else if (error.message?.includes('relation') || error.message?.includes('does not exist')) {
      errorMessage = 'Database tables do not exist. Please run the schema.sql file first.'
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}
