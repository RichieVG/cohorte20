/* subconsultas */
SELECT * FROM productos
where idCategoria = 2 and precio > 10 and existencia between 5 and 20 and fecha_alta is not null;

SELECT * FROM productos;
SELECT * FROM categoria;

SELECT * FROM productos
where idCategoria
in (select id from categoria where id > 2);