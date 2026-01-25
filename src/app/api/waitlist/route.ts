import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      fullName,
      email,
      phone,
      country,
      investmentExperience,
      investmentAmount,
      preferredVault,
      investmentGoals,
      howDidYouHear,
      additionalInfo
    } = body

    const result = await pool.query(
      `INSERT INTO investor_waitlist (
        full_name, email, phone, country, investment_experience,
        investment_amount, preferred_vault, investment_goals,
        how_did_you_hear, additional_info, created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW())
      RETURNING id`,
      [
        fullName,
        email,
        phone,
        country,
        investmentExperience,
        investmentAmount,
        preferredVault,
        investmentGoals,
        howDidYouHear,
        additionalInfo
      ]
    )

    return NextResponse.json(
      { success: true, id: result.rows[0].id },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
