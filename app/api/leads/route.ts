import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendEmail } from '@/lib/email'
import { z } from 'zod'

const leadSchema = z.object({
  company: z.string().min(1, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  name: z.string().optional(),
  countries: z.string().min(1, 'Please select a region'),
  teamSize: z.string().min(1, 'Please select team size'),
  timeline: z.string().min(1, 'Please select timeline'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = leadSchema.parse(body)

    const lead = await prisma.lead.create({
      data: {
        ...validatedData,
        countries: [validatedData.countries],
        source: 'website_form',
      }
    })

    // Send notification email to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      subject: `New Lead: ${validatedData.company}`,
      html: `
        <h2>New Lead Submission</h2>
        <p><strong>Company:</strong> ${validatedData.company}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Region:</strong> ${validatedData.countries}</p>
        <p><strong>Team Size:</strong> ${validatedData.teamSize}</p>
        <p><strong>Timeline:</strong> ${validatedData.timeline}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `
    })

    return NextResponse.json({ success: true, leadId: lead.id })
  } catch (error) {
    console.error('Error creating lead:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}