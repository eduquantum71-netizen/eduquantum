import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { googleSheetsService } from '@/lib/google-sheets'

export async function GET() {
  try {
    const karirApplications = await db.karir.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(karirApplications)
  } catch (error) {
    console.error('Error fetching karir applications:', error)
    return NextResponse.json(
      { error: 'Failed to fetch karir applications' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract form data
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const experience = formData.get('experience') as string
    const education = formData.get('education') as string
    const message = formData.get('message') as string
    const resume = formData.get('resume') as File
    
    // Validate required fields
    if (!name || !email || !phone || !position) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email }
    })
    
    let userId;
    
    if (existingUser) {
      userId = existingUser.id
    } else {
      // Create new user
      const newUser = await db.user.create({
        data: {
          email,
          name,
          phone
        }
      })
      userId = newUser.id
    }
    
    // Handle resume file
    let resumeUrl = '';
    if (resume) {
      // In a real implementation, you would upload the file to a storage service
      // For now, we'll just store the filename
      resumeUrl = `/uploads/${resume.name}`
    }
    
    // Create career application
    const karir = await db.karir.create({
      data: {
        name,
        email,
        phone,
        position,
        experience: experience || null,
        education: education || null,
        message: message || null,
        resume: resumeUrl,
        userId
      }
    })
    
    // Also save to Google Sheets
    try {
      await googleSheetsService.appendKarirData({
        name,
        email,
        phone,
        position,
        experience: experience || '',
        education: education || '',
        message: message || '',
        resume: resumeUrl,
        createdAt: new Date().toISOString()
      })
    } catch (sheetsError) {
      console.error('Error saving to Google Sheets:', sheetsError)
      // Continue even if Google Sheets fails
    }
    
    return NextResponse.json(karir, { status: 201 })
  } catch (error) {
    console.error('Error creating karir application:', error)
    return NextResponse.json(
      { error: 'Failed to create karir application' },
      { status: 500 }
    )
  }
}