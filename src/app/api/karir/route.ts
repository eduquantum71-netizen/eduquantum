// File: src/app/api/karir/route.ts

import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const karirApplications = await prisma.karir.findMany({
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
    const resume = formData.get('resume') as File | null // Bisa null
    
    // Validate required fields
    if (!name || !email || !phone || !position) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, or position' },
        { status: 400 }
      )
    }
    
    // Handle resume file
    let resumeUrl = '';
    if (resume && resume.size > 0) {
      // CATATAN: Ini adalah implementasi dasar.
      // Pada aplikasi nyata, Anda harus mengupload file ke layanan penyimpanan
      // seperti Vercel Blob, Cloudinary, AWS S3, dll.
      // Lalu simpan URL-nya ke database.
      // Contoh: resumeUrl = await uploadFile(resume);
      resumeUrl = `/uploads/cv/${Date.now()}-${resume.name}`;
    }
    
    // Create career application langsung ke database
    const karir = await prisma.karir.create({
      data: {
        name,
        email,
        phone,
        position,
        experience: experience || null,
        education: education || null,
        message: message || null,
        resume: resumeUrl || null,
      }
    })
    
    console.log(`✅ Karir application dari ${email} berhasil disimpan dengan ID: ${karir.id}`);
    
    // KIRIM RESPONSE SUKSES KE CLIENT
    return NextResponse.json(karir, { status: 201 })

  } catch (error) {
    // Tangani error jika email sudah ada (karena @unique)
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json(
        { error: 'An application with this email already exists.' },
        { status: 409 } // 409 Conflict
      )
    }

    console.error('❌ Error creating karir application:', error)
    return NextResponse.json(
      { error: 'Failed to create karir application' },
      { status: 500 }
    )
  }
}