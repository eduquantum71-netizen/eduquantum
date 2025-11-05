// prisma/prisma.config.ts

// Hapus baris import ini
// import type { PrismaConfig } from '@prisma/client';

// Hapus tipe ": PrismaConfig" dari variabel config
const config = {
  seed: {
    engine: {
      binary: 'tsx',
      args: ['prisma/seed.ts'],
    },
  },
};

export default config;