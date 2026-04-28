USE clases_particulares;

INSERT INTO consultas (
    nombre,
    telefono,
    ciudad,
    carrera_o_nivel,
    materia,
    cantidad_estudiantes,
    modalidad,
    disponibilidad,
    mensaje,
    origen,
    estado
)
VALUES
(
    'María Pérez',
    '099 000 000',
    'Montevideo',
    'Bachillerato',
    'Física',
    1,
    'Zoom',
    'Lunes y miércoles después de 18:00',
    'Consulta ficticia para preparar parcial de Física.',
    'Instagram',
    'agendada'
),
(
    'Juan Rodríguez',
    '098 000 000',
    'Durazno',
    'UTU - nivel terciario',
    'Física',
    2,
    'Online',
    'Después de 20:30 o sábados de mañana',
    'Consulta ficticia para apoyo de Física en nivel terciario.',
    'Recomendación',
    'agendada'
);

INSERT INTO clases (
    id_consulta,
    fecha_clase,
    hora_inicio,
    duracion_minutos,
    modalidad,
    tema,
    precio_total,
    estado,
    observaciones
)
VALUES
(
    1,
    '2026-04-28',
    '18:00:00',
    60,
    'Zoom',
    'Leyes de Newton y ejercicios de dinámica',
    400.00,
    'realizada',
    'Clase individual ficticia.'
),
(
    2,
    '2026-04-29',
    '20:30:00',
    60,
    'Zoom',
    'Física aplicada - dudas del curso',
    700.00,
    'agendada',
    'Clase grupal ficticia para dos estudiantes.'
);

INSERT INTO pagos (
    id_clase,
    monto,
    metodo,
    tipo_pago,
    estado
)
VALUES
(
    1,
    400.00,
    'Transferencia',
    'Pago completo',
    'pagado'
),
(
    2,
    350.00,
    'Transferencia',
    'Seña 50%',
    'pagado'
);