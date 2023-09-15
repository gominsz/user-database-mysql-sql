/*
  Warnings:

  - Added the required column `password` to the `pessoas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pessoas` ADD COLUMN `password` VARCHAR(150) NOT NULL;
