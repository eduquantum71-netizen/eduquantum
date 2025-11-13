/*
  Warnings:

  - You are about to drop the `Kontak` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pengajar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PengajarProgram` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Program` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Testimoni` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Karir" DROP CONSTRAINT "Karir_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Pendaftaran" DROP CONSTRAINT "Pendaftaran_programId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PengajarProgram" DROP CONSTRAINT "PengajarProgram_pengajarId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PengajarProgram" DROP CONSTRAINT "PengajarProgram_programId_fkey";

-- DropTable
DROP TABLE "public"."Kontak";

-- DropTable
DROP TABLE "public"."Pengajar";

-- DropTable
DROP TABLE "public"."PengajarProgram";

-- DropTable
DROP TABLE "public"."Program";

-- DropTable
DROP TABLE "public"."Testimoni";

-- DropTable
DROP TABLE "public"."User";
