// File: src/app/api/pendaftaran/route.ts

import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// --- FUNGSI GET (DIPERBAIKI - SEMUA KOLOM TERURUT) ---
export async function GET() {
  try {
    const pendaftarans = await prisma.pendaftaran.findMany({
      // 1. Urutkan baris data berdasarkan yang terbaru dibuat
      orderBy: {
        createdAt: 'desc'
      },
      // 2. Pilih SEMUA kolom dan tentukan urutannya
      // Ini memastikan struktur JSON response selalu konsisten dan terurut.
      select: {
        id: true,
        // Data Siswa
        namaLengkap: true,
        namaPanggilan: true,
        jenisKelamin: true,
        // Data Sekolah
        asalSekolah: true,
        kelas: true,
        kurikulum: true,
        // Data Kontak
        noHpOrangTua: true,
        noHpSiswa: true,
        // Detail Program
        programNama: true,
        mataPelajaran: true,
        jumlahSesi: true,
        // Status dan Timestamp
        status: true,
        createdAt: true,
        updatedAt: true,
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

// --- FUNGSI POST (TIDAK ADA PERUBAHAN) ---
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
      programNama,
      mataPelajaran,
      jumlahSesi
    } = body

    // Validasi input
    if (!namaPanggilan || !namaLengkap || !jenisKelamin || !asalSekolah || 
        !kelas || !kurikulum || !noHpOrangTua || !programNama || 
        !mataPelajaran || !jumlahSesi) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Simpan data pendaftaran baru ke database
    const newPendaftaran = await prisma.pendaftaran.create({
      data: {
        namaPanggilan,
        namaLengkap,
        jenisKelamin,
        asalSekolah,
        kelas,
        kurikulum,
        noHpOrangTua,
        noHpSiswa: noHpSiswa || null,
        programNama: programNama,
        mataPelajaran: Array.isArray(mataPelajaran) ? mataPelajaran.join(', ') : mataPelajaran,
        jumlahSesi: parseInt(jumlahSesi),
        status: 'pending'
      }
    });

    console.log(`✅ Data pendaftaran berhasil disimpan dengan ID: ${newPendaftaran.id}`);
    
    // Kembalikan data yang baru dibuat dengan status 201 (Created)
    return NextResponse.json(newPendaftaran, { status: 201 })

  } catch (error) {
    console.error('❌ Error creating pendaftaran:', error)
    return NextResponse.json(
      { error: 'Failed to create pendaftaran' },
      { status: 500 }
    )
  }
}