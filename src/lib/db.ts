// @/lib/db.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db = globalForPrisma.prisma ?? new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL // <-- PASTIKAN INI ADA
    }
  }
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db