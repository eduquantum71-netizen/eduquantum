// File: src/app/api/pendaftaran/route.ts

import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    // Tidak perlu `include` lagi karena tidak ada relasi
    const pendaftarans = await prisma.pendaftaran.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(pendaftarans)
  } catch (error) {
    console.error('Error fetching pendaftarans:', error)
    return NextResponse.json(
      { error: 'Failed to fetch pendaftarans' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('🔍 DATA DITERIMA DARI FORM:', body);

    const {
      namaPanggilan,
      namaLengkap,
      jenisKelamin,
      asalSekolah,
      kelas,
      kurikulum,
      noHpOrangTua,
      noHpSiswa,
      // Kita menerima NAMA program langsung dari frontend
      programNama,
      mataPelajaran,
      jumlahSesi
    } = body

    // Validasi field yang diperlukan, termasuk programNama
    if (!namaPanggilan || !namaLengkap || !jenisKelamin || !asalSekolah || 
        !kelas || !kurikulum || !noHpOrangTua || !programNama || 
        !mataPelajaran || !jumlahSesi) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Simpan data pendaftaran baru ke database
    const pendaftaran = await prisma.pendaftaran.create({
      data: {
        namaPanggilan,
        namaLengkap,
        jenisKelamin,
        asalSekolah,
        kelas,
        kurikulum,
        noHpOrangTua,
        noHpSiswa: noHpSiswa || null,
        // Simpan nama program langsung ke field programNama
        programNama: programNama,
        mataPelajaran: Array.isArray(mataPelajaran) ? mataPelajaran.join(', ') : mataPelajaran,
        jumlahSesi: parseInt(jumlahSesi),
        status: 'pending'
      }
      // Tidak perlu `include` lagi
    });

    console.log(`✅ Data pendaftaran berhasil disimpan dengan ID: ${pendaftaran.id}`);
    return NextResponse.json(pendaftaran, { status: 201 })

  } catch (error) {
    console.error('❌ Error creating pendaftaran:', error)
    return NextResponse.json(
      { error: 'Failed to create pendaftaran' },
      { status: 500 }
    )
  }
}