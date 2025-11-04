// lib/prisma.ts
import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

// Fungsi untuk membuat instance Prisma dengan Accelerate
const prismaClientSingleton = () => {
  return new PrismaClient().$extends(withAccelerate())
}

// Mencegah pembuatan instance baru saat development dengan hot-reload
declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

// Buat instance baru jika belum ada, jika sudah ada gunakan yang sudah ada
const prisma = global.prisma ?? prismaClientSingleton()

export default prisma

// Simpan instance ke global scope agar tidak dibuat ulang saat hot-reload
if (process.env.NODE_ENV !== 'production') global.prisma = prisma