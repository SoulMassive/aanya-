import mongoose from 'mongoose'

const LeadSchema = new mongoose.Schema({
  userType: {
    type: String,
    required: [true, 'Please specify your role/type.'],
  },
  goal: {
    type: String,
    required: [true, 'Please specify your primary goal.'],
  },
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
  },
  workEmail: {
    type: String,
    required: [true, 'Please provide a work email.'],
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email.'],
  },
  companySize: {
    type: String,
    required: [true, 'Please select your company size.'],
  },
  status: {
    type: String,
    enum: ['new', 'onboarding', 'active', 'inactive'],
    default: 'new',
  },
}, {
  timestamps: true,
})

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema)
