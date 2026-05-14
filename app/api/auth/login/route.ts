import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Admin from '@/models/Admin'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    console.log('Login attempt for:', email)
    await dbConnect()
    console.log('DB Connected')

    // Find admin by email
    const admin = await Admin.findOne({ email })
    console.log('Admin found:', !!admin)
    
    if (!admin) {
      return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 })
    }

    // Check password
    console.log('Comparing password...')
    const isMatch = await admin.comparePassword(password)
    console.log('Password match:', isMatch)
    
    if (!isMatch) {
      return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 })
    }

    // Create JWT
    console.log('Creating JWT...')
    const token = jwt.sign(
      { id: admin._id, email: admin.email, role: admin.role },
      JWT_SECRET,
      { expiresIn: '1d' }
    )

    // Set cookie
    console.log('Setting cookie...')
    const cookieStore = await cookies()
    cookieStore.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400, // 1 day
      path: '/',
    })

    return NextResponse.json({ 
      success: true, 
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    })
  } catch (error: any) {
    console.error('CRITICAL LOGIN ERROR:', error)
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Internal Server Error',
      stack: error.stack
    }, { status: 500 })
  }
}
