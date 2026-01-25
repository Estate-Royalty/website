import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function GET() {
  try {
    // Get property assessments
    const assessmentsResult = await pool.query(
      'SELECT * FROM property_assessments ORDER BY created_at DESC LIMIT 100'
    )
    
    // Get waitlist submissions
    const waitlistResult = await pool.query(
      'SELECT * FROM investor_waitlist ORDER BY created_at DESC LIMIT 100'
    )
    
    return NextResponse.json({
      success: true,
      assessments: {
        count: assessmentsResult.rows.length,
        data: assessmentsResult.rows
      },
      waitlist: {
        count: waitlistResult.rows.length,
        data: waitlistResult.rows
      },
      total: assessmentsResult.rows.length + waitlistResult.rows.length
    })
  } catch (error: any) {
    return NextResponse.json(
      { 
        success: false, 
        error: error.message,
        hint: 'Make sure the database tables exist. Run database/schema.sql if needed.'
      },
      { status: 500 }
    )
  }
}
