import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Consultation from '@/models/Consultation'
import { sendConsultationEmail } from '@/lib/mailer'

export async function POST(req: Request) {
  try {
    await dbConnect()
    const body = await req.json()
    
    const consultation = await Consultation.create(body)
    
    // Send email notification (don't await to avoid slowing down response)
    sendConsultationEmail(consultation).catch(err => console.error('Email failed:', err))
    
    return NextResponse.json({ 
      success: true, 
      data: consultation 
    }, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 400 })
  }
}
