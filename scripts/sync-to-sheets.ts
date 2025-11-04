// File: scripts/sync-to-sheets.ts

import { PrismaClient } from '@prisma/client';
import { google } from 'googleapis';

// --- Konfigurasi Prisma ---
const prisma = new PrismaClient();

// --- Konfigurasi Google Sheets ---
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

if (!SPREADSHEET_ID || !SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
  throw new Error('Variabel environment untuk Google Sheets tidak lengkap.');
}

// --- Fungsi Autentikasi Google ---
async function getAuth() {
  const auth = new google.auth.JWT({
    email: SERVICE_ACCOUNT_EMAIL,
    key: PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  await auth.authorize();
  return auth;
}

// --- Konfigurasi Sinkronisasi untuk Setiap Tipe Data ---
const syncConfigs = [
  {
    name: 'Pendaftaran',
    envRange: 'GOOGLE_SHEETS_RANGE',
    prismaModel: 'pendaftaran',
    include: { program: true },
    mapData: (data: any) => [
      data.namaPanggilan,
      data.namaLengkap,
      data.jenisKelamin,
      data.asalSekolah,
      data.kelas,
      data.kurikulum,
      data.noHpOrangTua,
      data.noHpSiswa || '',
      data.programId,
      data.program?.nama || '',
      data.mataPelajaran,
      data.jumlahSesi,
      data.status,
      data.createdAt.toISOString(),
    ],
  },
  {
    name: 'Karir',
    envRange: 'GOOGLE_SHEETS_KARIR_RANGE',
    prismaModel: 'karir',
    include: { user: true }, // Sesuaikan jika ada relasi
    mapData: (data: any) => [
      data.name,
      data.email,
      data.phone,
      data.position,
      data.experience || '',
      data.education || '',
      data.message || '',
      data.resume || '',
      data.createdAt.toISOString(),
    ],
  },
];

// --- Fungsi Sinkronisasi Umum ---
async function syncData(config: any) {
  console.log(`\n🚀 Memulai sinkronisasi data ${config.name}...`);

  const range = process.env[config.envRange];
  if (!range) {
    console.error(`❌ Variabel lingkungan ${config.envRange} tidak ditemukan. Melewati sinkronisasi ${config.name}.`);
    return;
  }

  try {
    // 1. Ambil semua data dari database
    // @ts-ignore
    const allData = await prisma[config.prismaModel].findMany({
      include: config.include,
      orderBy: { createdAt: 'asc' },
    });

    if (allData.length === 0) {
      console.log(`✅ Tidak ada data ${config.name} di database.`);
      return;
    }

    console.log(`📋 Ditemukan ${allData.length} data ${config.name}. Mengirim ke Google Sheets...`);

    const auth = await getAuth();
    const sheets = google.sheets({ version: 'v4', auth });

    // 2. Siapkan data untuk dikirim
    const values = allData.map(config.mapData);

    // 3. Kirim data dalam satu permintaan (lebih efisien)
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: range,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });

    console.log(`✅ Berhasil mengirim ${allData.length} data ${config.name} ke Google Sheets.`);

  } catch (error: any) {
    console.error(`❌ Gagal sinkronisasi data ${config.name}. Error: ${error.message}`);
  }
}

// --- Fungsi Utama ---
async function syncAllToSheets() {
  console.log('========================================');
  console.log('🔄 Memulai sinkronisasi SEMUA data ke Google Sheets...');
  console.log('========================================');

  for (const config of syncConfigs) {
    await syncData(config);
  }

  console.log('\n🎉 Semua proses sinkronisasi selesai!');
  await prisma.$disconnect();
}

// Jalankan fungsinya
syncAllToSheets();