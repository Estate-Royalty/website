import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function GET() {
  try {
    // Test connection
    const result = await pool.query('SELECT NOW()')
    
    // Check if tables exist
    const tablesCheck = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('property_assessments', 'investor_waitlist')
    `)
    
    const existingTables = tablesCheck.rows.map(row => row.table_name)
    
    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      timestamp: result.rows[0].now,
      tables: {
        property_assessments: existingTables.includes('property_assessments'),
        investor_waitlist: existingTables.includes('investor_waitlist'),
      },
      allTables: existingTables,
    })
  } catch (error: any) {
    return NextResponse.json(
      { 
        success: false, 
        error: error.message,
        hint: 'Make sure you have run the database/schema.sql file to create the tables'
      },
      { status: 500 }
    )
  }
}
