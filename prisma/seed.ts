// File: prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// PERBAIKAN: Inisialisasi Prisma Client dengan URL langsung (non-pooling).
// Ini lebih cepat dan aman untuk operasi seeding (menulis banyak data sekaligus)
// karena tidak melewati connection pooler.
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.POSTGRES_URL_NON_POOLING,
    },
  },
});

// Data program yang akan diisi ke database
const programs = [
  {
    id: 'reguler',
    name: 'Reguler',
    category: 'Umum',
    description: 'Program les privat untuk meningkatkan pemahaman mata pelajaran sekolah.',
    price: 150000,
    duration: '90 menit/sesi',
    features: 'Modul, Tryout, Report'
  },
  {
    id: 'nasional-plus',
    name: 'Nasional Plus',
    category: 'Prestasi',
    description: 'Program dengan kurikulum nasional plus untuk persiapan olimpiade dan ujian.',
    price: 200000,
    duration: '90 menit/sesi',
    features: 'Modul Khusus, Tryout, Report, Sertifikat'
  },
  {
    id: 'olimpiade',
    name: 'Olimpiade',
    category: 'Prestasi',
    description: 'Program intensif khusus persiapan olimpiade sains, matematika, dan lainnya.',
    price: 250000,
    duration: '120 menit/sesi',
    features: 'Drill Soal, Simulasi, Mentorship, Sertifikat'
  },
  {
    id: 'utbk',
    name: 'UTBK',
    category: 'Perguruan Tinggi',
    description: 'Program persiapan UTBK SNBT untuk masuk PTN favorit.',
    price: 225000,
    duration: '120 menit/sesi',
    features: 'Modul UTBK, Tryout Online, Pembahasan Soal'
  },
  {
    id: 'speak-up',
    name: 'Speak Up (bahasa)',
    category: 'Bahasa',
    description: 'Program untuk meningkatkan kemampuan berbicara bahasa asing dengan percaya diri.',
    price: 175000,
    duration: '90 menit/sesi',
    features: 'Conversation Class, Native Speaker, Sertifikat'
  },
  {
    id: 'tka',
    name: 'TKA',
    category: 'Perguruan Tinggi',
    description: 'Program persiapan Tes Kemampuan Akademik untuk penerimaan mahasiswa baru.',
    price: 200000,
    duration: '120 menit/sesi',
    features: 'Modul TPA, Simulasi Tes, Pembahasan'
  },
  {
    id: 'cpns',
    name: 'CPNS',
    category: 'Profesional',
    description: 'Program bimbingan untuk persiapan tes CPNS dan BUMN.',
    price: 225000,
    duration: '120 menit/sesi',
    features: 'Modul TWK, TIU, TKP, Simulasi CAT'
  },
  {
    id: 'skripsi',
    name: 'Bimbingan Skripsi',
    category: 'Perguruan Tinggi',
    description: 'Program bimbingan tugas akhir, skripsi, tesis, dan disertasi.',
    price: 300000,
    duration: 'disesuaikan',
    features: 'Konsultasi, Review, Bimbingan Full'
  }
];

async function main() {
  console.log('Start seeding...');

  // Menggunakan Promise.all untuk menjalankan semua upsert secara paralel (lebih cepat)
  const seedingPromises = programs.map(program =>
    prisma.program.upsert({
      where: { id: program.id },
      update: program,
      create: program,
    })
  );

  await Promise.all(seedingPromises);

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });