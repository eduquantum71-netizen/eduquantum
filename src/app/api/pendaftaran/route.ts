// File: src/app/api/pendaftaran/route.ts

import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma' // Pastikan file ini ada
import { googleSheetsService } from '@/lib/google-sheets' // Import service Google Sheets

export async function GET() {
  try {
    const pendaftarans = await prisma.pendaftaran.findMany({
      include: {
        program: true
      },
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
    
    // --- TAMBAHKAN BARIS INI UNTUK DEBUGGING ---
    // Baris ini akan mencetak semua data yang diterima dari formulir ke terminal
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
      programId,
      mataPelajaran,
      jumlahSesi
    } = body

    // Validasi field yang diperlukan
    if (!namaPanggilan || !namaLengkap || !jenisKelamin || !asalSekolah || 
        !kelas || !kurikulum || !noHpOrangTua || !programId || 
        !mataPelajaran || !jumlahSesi) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // 1. SIMPAN DATA KE DATABASE (PRISMA)
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
        programId,
        mataPelajaran: Array.isArray(mataPelajaran) ? mataPelajaran.join(', ') : mataPelajaran,
        jumlahSesi: parseInt(jumlahSesi),
        status: 'pending'
      },
      include: {
        program: true
      }
    });

    console.log(`✅ Data berhasil disimpan ke DB dengan ID: ${pendaftaran.id}`);

    // 2. KIRIM DATA KE GOOGLE SHEETS (BEST EFFORT)
    try {
      // Siapkan data untuk Google Sheets
      const sheetsData = {
        ...pendaftaran,
        createdAt: pendaftaran.createdAt.toISOString(), // Konversi Date ke string ISO
      };

      await googleSheetsService.appendData(sheetsData);
      console.log('✅ Data berhasil disinkronkan ke Google Sheets.');

    } catch (sheetsError: any) {
      // Jika gagal kirim ke Sheets, LOG errornya, tapi jangan gagalkan proses utama.
      console.error('❌ GAGAL sinkronisasi ke Google Sheets:', sheetsError.message);
      // Anda bisa menambahkan logika antrian ulang (retry queue) di sini jika perlu.
    }

    // 3. KIRIM RESPONSE SUKSES KE CLIENT
    return NextResponse.json(pendaftaran, { status: 201 })

  } catch (error) {
    console.error('❌ Error creating pendaftaran:', error)
    return NextResponse.json(
      { error: 'Failed to create pendaftaran' },
      { status: 500 }
    )
  }
}