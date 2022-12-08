/* Listas */
/* in */
SELECT * FROM productos;
SELECT * FROM productos
where precio
in (5, 6, 7, 8, 9, 10);

/* not in */
SELECT * FROM productos
where precio
not in (5, 6, 7, 8, 9, 10);

/* date */
SELECT * FROM productos
where date(fecha_alta)
between "2015-01-01" and "2016-07-24";

/* FILTRO DE PRECIO CON OPERACIONES */
SELECT * FROM productos where precio = 5+5;
SELECT * FROM productos where precio = 15-3;
SELECT * FROM productos where precio = 5*2;
SELECT * FROM productos where precio = 27/3;