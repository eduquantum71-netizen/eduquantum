// File: src/app/api/karir/route.ts

import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { writeFile, mkdir } from 'fs/promises' // Modul untuk menulis file dan membuat folder
import { join } from 'path' // Modul untuk menggabungkan path dengan aman

// --- FUNGSI GET (TIDAK BERUBAH) ---
export async function GET() {
  try {
    const karirApplications = await prisma.karir.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        position: true,
        experience: true,
        education: true,
        message: true,
        resume: true,
        createdAt: true,
        updatedAt: true,
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

// --- FUNGSI POST (DIPERBAIKI - MENANGANI FILE) ---
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
    const resume = formData.get('resume') as File | null
    
    // Validate required fields
    if (!name || !email || !phone || !position) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, or position' },
        { status: 400 }
      )
    }
    
    let resumeUrl = '';

    // --- AWAL: LOGIKA PENYIMPANAN FILE ---
    if (resume && resume.size > 0) {
      // 1. Tentukan direktori tempat menyimpan file
      // `process.cwd()` memberikan path root proyek Anda
      const uploadDir = join(process.cwd(), 'public', 'uploads', 'cv');

      // 2. Buat direktori jika belum ada
      // `recursive: true` akan membuat folder 'uploads' dan 'cv' jika keduanya tidak ada
      try {
        await mkdir(uploadDir, { recursive: true });
      } catch (err) {
        console.error("Gagal membuat direktori upload:", err);
        return NextResponse.json({ error: "Gagal menyiapkan penyimpanan file." }, { status: 500 });
      }

      // 3. Buat nama file yang unik untuk menghindari tumpang tindih
      const uniqueFilename = `${Date.now()}-${resume.name}`;

      // 4. Konversi file (File object) menjadi Buffer
      const bytes = await resume.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // 5. Tulis buffer ke file sistem
      const filePath = join(uploadDir, uniqueFilename);
      await writeFile(filePath, buffer);

      // 6. Buat URL yang akan disimpan di database
      // URL ini relatif terhadap folder 'public'
      resumeUrl = `/uploads/cv/${uniqueFilename}`;
      
      console.log(`✅ File CV berhasil disimpan di: ${filePath}`);
    }
    // --- AKHIR: LOGIKA PENYIMPANAN FILE ---
    
    // Create career application di database
    const karir = await prisma.karir.create({
      data: {
        name,
        email,
        phone,
        position,
        experience: experience || null,
        education: education || null,
        message: message || null,
        resume: resumeUrl || null, // Simpan URL file atau null jika tidak ada
      }
    })
    
    console.log(`✅ Karir application dari ${email} berhasil disimpan dengan ID: ${karir.id}`);
    
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