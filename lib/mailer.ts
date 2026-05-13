import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export const sendConsultationEmail = async (data: any) => {
  const mailOptions = {
    from: `"Aanya Notifications" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Consultation Request: ${data.fullName}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #2563EB;">New Consultation Request</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.workEmail}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Team Size:</strong> ${data.teamSize}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f4f4f4; padding: 15px; border-radius: 8px;">${data.message}</p>
        <p><strong>Preferred Date:</strong> ${data.preferredDate || 'Not specified'}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #666;">View this request in your <a href="${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard">Admin Dashboard</a></p>
      </div>
    `,
  }

  return transporter.sendMail(mailOptions)
}

export const sendLeadEmail = async (data: any) => {
  const mailOptions = {
    from: `"Aanya Notifications" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Lead: ${data.name} (${data.userType})`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #2563EB;">New Onboarding Lead</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.workEmail}</p>
        <p><strong>Type:</strong> ${data.userType}</p>
        <p><strong>Goal:</strong> ${data.goal}</p>
        <p><strong>Company Size:</strong> ${data.companySize}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #666;">View this lead in your <a href="${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard">Admin Dashboard</a></p>
      </div>
    `,
  }

  return transporter.sendMail(mailOptions)
}
