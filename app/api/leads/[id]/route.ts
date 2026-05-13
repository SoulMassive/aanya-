import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Lead from '@/models/Lead'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret'

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin_token')?.value

    if (!token) {
      return NextResponse.json({ success: false, error: 'Not authenticated' }, { status: 401 })
    }

    jwt.verify(token, JWT_SECRET)
    
    await dbConnect()
    const { id } = params
    const { status } = await req.json()
    
    const updated = await Lead.findByIdAndUpdate(
      id, 
      { status }, 
      { new: true, runValidators: true }
    )
    
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: updated })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin_token')?.value

    if (!token) {
      return NextResponse.json({ success: false, error: 'Not authenticated' }, { status: 401 })
    }

    jwt.verify(token, JWT_SECRET)
    
    await dbConnect()
    const { id } = params
    
    const deleted = await Lead.findByIdAndDelete(id)
    
    if (!deleted) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: 'Deleted successfully' })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Unauthorized or error deleting' }, { status: 401 })
  }
}
