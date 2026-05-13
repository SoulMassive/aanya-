import mongoose from 'mongoose'

const ConsultationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please provide a full name.'],
  },
  workEmail: {
    type: String,
    required: [true, 'Please provide a work email.'],
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email.'],
  },
  company: {
    type: String,
    required: [true, 'Please provide a company name.'],
  },
  teamSize: {
    type: String,
    required: [true, 'Please select a team size.'],
  },
  message: {
    type: String,
    required: [true, 'Please tell us what you are looking for.'],
  },
  preferredDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'scheduled', 'completed'],
    default: 'pending',
  },
}, {
  timestamps: true,
})

export default mongoose.models.Consultation || mongoose.model('Consultation', ConsultationSchema)
