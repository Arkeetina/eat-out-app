-- AlterTable
ALTER TABLE "eatOutSpots" ADD COLUMN     "authorId" INTEGER;

-- AddForeignKey
ALTER TABLE "eatOutSpots" ADD FOREIGN KEY("authorId")REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
