create database sistemaTurnos;
use sistemaTurnos;

CREATE TABLE tipo_area (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE area (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    fk_tipo_area INT NOT NULL,
    CONSTRAINT fk_area_tipo
        FOREIGN KEY (fk_tipo_area)
        REFERENCES tipo_area(id)
);

CREATE TABLE estatu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL
);

CREATE TABLE genero (
    id INT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL
);


CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido_paterno VARCHAR(50),
    apellido_materno VARCHAR(50)
);


CREATE TABLE turno (
    id INT AUTO_INCREMENT PRIMARY KEY,
    folio VARCHAR(10) NOT NULL,
    fecha_hora DATETIME NOT NULL,
    fecha_hora_atendida DATETIME,
    fk_usuario INT,
    fk_area_asignada INT,
    fk_estatu INT NOT NULL,
    fk_genero INT,

    CONSTRAINT fk_turno_usuario
        FOREIGN KEY (fk_usuario) REFERENCES usuario(id),

    CONSTRAINT fk_turno_area
        FOREIGN KEY (fk_area_asignada) REFERENCES area(id),

    CONSTRAINT fk_turno_estatu
        FOREIGN KEY (fk_estatu) REFERENCES estatu(id),

    CONSTRAINT fk_turno_genero
        FOREIGN KEY (fk_genero) REFERENCES genero(id)
);

CREATE TABLE contador (
    id INT AUTO_INCREMENT PRIMARY KEY,
    consecutivo INT NOT NULL,
    fecha DATE NOT NULL,
    fk_tipo_area INT NOT NULL,

    CONSTRAINT fk_contador_tipo_area
        FOREIGN KEY (fk_tipo_area) REFERENCES tipo_area(id)
);