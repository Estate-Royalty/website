import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      fullName,
      email,
      phone,
      propertyLocation,
      propertyType,
      propertyValue,
      monthlyRentalIncome,
      occupancyRate,
      yearsOwned,
      currentFinancing,
      tokenizationGoals,
      timeline,
      additionalInfo
    } = body

    const result = await pool.query(
      `INSERT INTO property_assessments (
        full_name, email, phone, property_location, property_type, 
        property_value, monthly_rental_income, occupancy_rate, years_owned,
        current_financing, tokenization_goals, timeline, additional_info, created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW())
      RETURNING id`,
      [
        fullName,
        email,
        phone,
        propertyLocation,
        propertyType,
        propertyValue,
        monthlyRentalIncome,
        occupancyRate,
        yearsOwned,
        currentFinancing,
        tokenizationGoals,
        timeline,
        additionalInfo
      ]
    )

    return NextResponse.json(
      { success: true, id: result.rows[0].id },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Assessment submission error:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
