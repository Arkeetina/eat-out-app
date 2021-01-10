/*
  Warnings:

  - You are about to drop the column `description` on the `inventoryItems` table. All the data in the column will be lost.
  - You are about to drop the `admins` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `url` to the `inventoryItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "inventoryItems" DROP COLUMN "description",
ADD COLUMN     "note" TEXT,
ADD COLUMN     "url" TEXT NOT NULL;

-- DropTable
DROP TABLE "admins";
