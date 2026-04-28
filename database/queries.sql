USE clases_particulares;

SELECT * FROM consultas;

SELECT * FROM clases;

SELECT * FROM pagos;

SELECT 
    q.nombre,
    q.telefono,
    q.materia,
    c.fecha_clase,
    c.hora_inicio,
    c.modalidad,
    c.precio_total,
    c.estado AS estado_clase
FROM consultas q
JOIN clases c ON q.id_consulta = c.id_consulta
ORDER BY c.fecha_clase, c.hora_inicio;

SELECT 
    q.nombre,
    c.fecha_clase,
    c.precio_total,
    SUM(p.monto) AS total_pagado
FROM consultas q
JOIN clases c ON q.id_consulta = c.id_consulta
LEFT JOIN pagos p ON c.id_clase = p.id_clase
GROUP BY q.nombre, c.fecha_clase, c.precio_total;

SELECT 
    materia,
    COUNT(*) AS total_consultas
FROM consultas
GROUP BY materia;

SELECT 
    origen,
    COUNT(*) AS total_consultas
FROM consultas
GROUP BY origen;

SELECT 
    SUM(monto) AS total_cobrado
FROM pagos
WHERE estado = 'pagado';