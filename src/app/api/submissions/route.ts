import { NextResponse } from 'next/server'
import pool from '@/lib/db'

// Prevent caching - always fetch fresh data
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    // Check if DATABASE_URL is set
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'DATABASE_URL is not configured',
          hint: 'Please set DATABASE_URL in your .env.local file'
        },
        { status: 500 }
      )
    }

    // Check if tables exist first
    const tablesCheck = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('property_assessments', 'investor_waitlist')
    `)
    
    const existingTables = tablesCheck.rows.map(row => row.table_name)
    const hasAssessmentsTable = existingTables.includes('property_assessments')
    const hasWaitlistTable = existingTables.includes('investor_waitlist')

    if (!hasAssessmentsTable || !hasWaitlistTable) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database tables do not exist',
          hint: 'Please run database/schema.sql to create the tables',
          missingTables: {
            property_assessments: !hasAssessmentsTable,
            investor_waitlist: !hasWaitlistTable
          }
        },
        { status: 500 }
      )
    }

    // Get property assessments
    const assessmentsResult = await pool.query(
      'SELECT * FROM property_assessments ORDER BY created_at DESC LIMIT 100'
    )
    
    // Get waitlist submissions
    const waitlistResult = await pool.query(
      'SELECT * FROM investor_waitlist ORDER BY created_at DESC LIMIT 100'
    )
    
    // Get database info (without exposing credentials)
    const dbInfo = process.env.DATABASE_URL 
      ? {
          host: process.env.DATABASE_URL.match(/@([^:]+)/)?.[1] || 'unknown',
          isLocal: process.env.DATABASE_URL.includes('localhost') || process.env.DATABASE_URL.includes('127.0.0.1'),
        }
      : null
    
    const response = NextResponse.json({
      success: true,
      assessments: {
        count: assessmentsResult.rows.length,
        data: assessmentsResult.rows
      },
      waitlist: {
        count: waitlistResult.rows.length,
        data: waitlistResult.rows
      },
      total: assessmentsResult.rows.length + waitlistResult.rows.length,
      dbInfo: dbInfo,
      timestamp: new Date().toISOString() // Add timestamp to prevent caching
    })
    
    // Set headers to prevent caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    response.headers.set('Surrogate-Control', 'no-store')
    
    return response
  } catch (error: any) {
    console.error('Submissions API error:', error)
    
    // Provide more specific error messages
    let errorMessage = error.message || 'Unknown database error'
    let hint = 'Make sure the database tables exist. Run database/schema.sql if needed.'
    
    if (error.code === 'ECONNREFUSED') {
      errorMessage = 'Cannot connect to database server'
      hint = 'Make sure PostgreSQL is running and DATABASE_URL is correct'
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = 'Database host not found'
      hint = 'Check your DATABASE_URL - the host might be incorrect'
    } else if (error.code === '28P01') {
      errorMessage = 'Database authentication failed'
      hint = 'Check your DATABASE_URL username and password'
    } else if (error.message?.includes('relation') || error.message?.includes('does not exist')) {
      errorMessage = 'Database tables do not exist'
      hint = 'Please run database/schema.sql to create the tables'
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        hint: hint,
        code: error.code
      },
      { status: 500 }
    )
  }
}
