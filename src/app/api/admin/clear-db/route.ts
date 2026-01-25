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

    // Clear both tables
    await pool.query('TRUNCATE TABLE property_assessments RESTART IDENTITY CASCADE')
    await pool.query('TRUNCATE TABLE investor_waitlist RESTART IDENTITY CASCADE')

    return NextResponse.json({
      success: true,
      message: 'Database cleared successfully'
    })
  } catch (error: any) {
    console.error('Clear DB error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to clear database' 
      },
      { status: 500 }
    )
  }
}
