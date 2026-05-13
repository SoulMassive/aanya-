import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import dbConnect from '@/lib/dbConnect'
import Admin from '@/models/Admin'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin_token')?.value

    if (!token) {
      return NextResponse.json({ success: false, error: 'Not authenticated' }, { status: 401 })
    }

    const decoded: any = jwt.verify(token, JWT_SECRET)
    
    await dbConnect()
    const admin = await Admin.findById(decoded.id).select('-password')
    
    if (!admin) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, admin })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid token' }, { status: 401 })
  }
}
