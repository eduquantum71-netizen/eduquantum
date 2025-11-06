// File: src/app/api/programs/route.ts

import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma' // Pastikan path ke prisma client Anda benar

/**
 * API endpoint untuk mengambil semua program yang tersedia.
 * Ini akan dipanggil oleh form pendaftaran untuk menampilkan daftar program.
 */
export async function GET() {
  try {
    const programs = await prisma.program.findMany({
      orderBy: {
        name: 'asc' // Urutkan berdasarkan nama agar rapi
      }
    })

    return NextResponse.json(programs)
  } catch (error) {
    console.error('Error fetching programs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch programs' },
      { status: 500 }
    )
  }
}