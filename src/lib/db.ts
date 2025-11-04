// File: src/lib/db.ts

import { PrismaClient } from '@prisma/client'

// Mencegah pembuatan instance PrismaClient yang baru pada setiap request di development
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // Opsional: Akan menampilkan query SQL di log Vercel, berguna untuk debugging
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db
}