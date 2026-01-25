import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const isAuthenticated = cookieStore.get('admin_authenticated')?.value === 'true'

    return NextResponse.json({
      authenticated: isAuthenticated
    })
  } catch (error: any) {
    return NextResponse.json(
      { authenticated: false },
      { status: 200 }
    )
  }
}
