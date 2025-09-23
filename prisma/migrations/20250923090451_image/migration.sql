/*
  Warnings:

  - You are about to drop the `BookImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."BookImage" DROP CONSTRAINT "BookImage_bookId_fkey";

-- DropTable
DROP TABLE "public"."BookImage";
