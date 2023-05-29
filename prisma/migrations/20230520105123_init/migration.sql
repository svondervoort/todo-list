/*
  Warnings:

  - You are about to drop the column `published` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `List` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Category` DROP COLUMN `published`;

-- AlterTable
ALTER TABLE `Item` DROP COLUMN `published`;

-- AlterTable
ALTER TABLE `List` DROP COLUMN `published`;
