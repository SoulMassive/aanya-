import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Lead from '@/models/Lead'
import { sendLeadEmail } from '@/lib/mailer'

export async function POST(req: Request) {
  try {
    await dbConnect()
    const body = await req.json()
    
    const lead = await Lead.create(body)
    
    // Send email notification
    sendLeadEmail(lead).catch(err => console.error('Email failed:', err))
    
    return NextResponse.json({ 
      success: true, 
      data: lead 
    }, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 400 })
  }
}
