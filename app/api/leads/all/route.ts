import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Lead from '@/models/Lead'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin_token')?.value

    if (!token) {
      return NextResponse.json({ success: false, error: 'Not authenticated' }, { status: 401 })
    }

    jwt.verify(token, JWT_SECRET)
    
    await dbConnect()
    const leads = await Lead.find({}).sort({ createdAt: -1 })
    
    return NextResponse.json({ success: true, data: leads })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }
}
