CREATE DATABASE IF NOT EXISTS clases_particulares;
USE clases_particulares;

CREATE TABLE IF NOT EXISTS consultas (
    id_consulta INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(30),
    ciudad VARCHAR(100),
    carrera_o_nivel VARCHAR(150),
    materia VARCHAR(80),
    cantidad_estudiantes INT DEFAULT 1,
    modalidad VARCHAR(50),
    disponibilidad TEXT,
    mensaje TEXT,
    origen VARCHAR(100),
    estado VARCHAR(50) DEFAULT 'pendiente',
    fecha_consulta DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS clases (
    id_clase INT AUTO_INCREMENT PRIMARY KEY,
    id_consulta INT,
    fecha_clase DATE,
    hora_inicio TIME,
    duracion_minutos INT,
    modalidad VARCHAR(50),
    tema TEXT,
    precio_total DECIMAL(8,2),
    estado VARCHAR(50) DEFAULT 'agendada',
    observaciones TEXT,
    FOREIGN KEY (id_consulta) REFERENCES consultas(id_consulta)
);

CREATE TABLE IF NOT EXISTS pagos (
    id_pago INT AUTO_INCREMENT PRIMARY KEY,
    id_clase INT,
    monto DECIMAL(8,2) NOT NULL,
    metodo VARCHAR(50),
    tipo_pago VARCHAR(50),
    fecha_pago DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(50) DEFAULT 'pendiente',
    FOREIGN KEY (id_clase) REFERENCES clases(id_clase)
);