# Database

Modelo inicial de base de datos MySQL para gestionar consultas, clases y pagos de clases particulares.

## Archivos

- `schema.sql`: crea la base de datos y las tablas principales.
- `seed_demo.sql`: inserta datos ficticios para pruebas.
- `queries.sql`: contiene consultas útiles para revisar agenda, pagos y estadísticas.

## Tablas

- `consultas`: registra personas interesadas, materia, modalidad, disponibilidad y estado.
- `clases`: registra clases agendadas o realizadas, fecha, hora, duración, tema y precio.
- `pagos`: registra señas, pagos completos o saldos pendientes.

## Uso

Ejecutar primero:

```sql
source schema.sql;
source seed_demo.sql