import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Admin from '@/models/Admin'

export async function GET() {
  try {
    await dbConnect()
    
    // Check if any admin exists
    const adminCount = await Admin.countDocuments()
    
    if (adminCount > 0) {
      return NextResponse.json({ 
        success: false, 
        message: 'Admin already exists. This route is disabled for security.' 
      }, { status: 403 })
    }

    // Create default admin
    const defaultAdmin = new Admin({
      name: 'System Admin',
      email: 'admin@aanya.com',
      password: 'adminpassword123', // This will be hashed by the pre-save hook
      role: 'superadmin'
    })

    await defaultAdmin.save()

    return NextResponse.json({ 
      success: true, 
      message: 'Default admin created successfully',
      credentials: {
        email: 'admin@aanya.com',
        password: 'adminpassword123'
      }
    })
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 })
  }
}
