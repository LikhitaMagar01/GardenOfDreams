/*
  Warnings:

  - You are about to drop the column `quantity` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `stripeId` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `stripePriceId` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `stripeStatus` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `stripeCustomerId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Subscription_stripeId_key";

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "quantity",
DROP COLUMN "stripeId",
DROP COLUMN "stripePriceId",
DROP COLUMN "stripeStatus";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "stripeCustomerId";
