-- CreateTable
CREATE TABLE `pessoas` (
    `uuid` VARCHAR(90) NOT NULL,
    `roule` ENUM('admin', 'user') NULL DEFAULT 'user',
    `nome` VARCHAR(30) NOT NULL,
    `email` VARCHAR(255) NULL,
    `profissao` VARCHAR(90) NULL,
    `nascimento` DATE NULL,
    `sexo` ENUM('M', 'F') NULL,
    `peso` DECIMAL(5, 2) NULL,
    `altura` DECIMAL(3, 2) NULL,
    `nacionalidade` VARCHAR(20) NULL DEFAULT 'Brasil',
    `createdAt` DATETIME(0) NULL,

    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
