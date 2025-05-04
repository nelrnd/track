/*
  Warnings:

  - A unique constraint covering the columns `[userId,habitId,createdAt]` on the table `Track` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Track_userId_habitId_createdAt_key" ON "Track"("userId", "habitId", "createdAt");
