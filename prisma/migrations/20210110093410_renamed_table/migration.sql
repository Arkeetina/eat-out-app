/*
  Warnings:

  - You are about to drop the `inventoryItems` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateTable
CREATE TABLE "eatOutSpots" (
"id" SERIAL,
    "name" TEXT,
    "note" TEXT,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- DropTable
DROP TABLE "inventoryItems";
