-- CreateTable
CREATE TABLE `tipo_area` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `area` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `fk_tipo_area` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estatu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `genero` (
    `id` INTEGER NOT NULL,
    `nombre` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `nombre` VARCHAR(50) NOT NULL,
    `apellido_paterno` VARCHAR(50) NULL,
    `apellido_materno` VARCHAR(50) NULL,

    UNIQUE INDEX `usuario_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `turno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `folio` VARCHAR(10) NOT NULL,
    `fecha_hora` DATETIME(3) NOT NULL,
    `fecha_hora_atendida` DATETIME(3) NULL,
    `fk_usuario` INTEGER NULL,
    `fk_area_asignada` INTEGER NULL,
    `fk_estatu` INTEGER NOT NULL,
    `fk_genero` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contador` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `consecutivo` INTEGER NOT NULL,
    `fecha` DATE NOT NULL,
    `fk_tipo_area` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `area` ADD CONSTRAINT `area_fk_tipo_area_fkey` FOREIGN KEY (`fk_tipo_area`) REFERENCES `tipo_area`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `turno` ADD CONSTRAINT `turno_fk_usuario_fkey` FOREIGN KEY (`fk_usuario`) REFERENCES `usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `turno` ADD CONSTRAINT `turno_fk_area_asignada_fkey` FOREIGN KEY (`fk_area_asignada`) REFERENCES `area`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `turno` ADD CONSTRAINT `turno_fk_estatu_fkey` FOREIGN KEY (`fk_estatu`) REFERENCES `estatu`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `turno` ADD CONSTRAINT `turno_fk_genero_fkey` FOREIGN KEY (`fk_genero`) REFERENCES `genero`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contador` ADD CONSTRAINT `contador_fk_tipo_area_fkey` FOREIGN KEY (`fk_tipo_area`) REFERENCES `tipo_area`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
