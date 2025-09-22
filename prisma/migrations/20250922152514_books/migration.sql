-- CreateTable
CREATE TABLE "public"."Books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "copies" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "publicationYear" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);
