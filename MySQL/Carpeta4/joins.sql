/* Joins */
SELECT * FROM productos;
SELECT * FROM categoria;

SELECT * FROM productos, categoria
where idCategoria = id;

SELECT p.nombre, p.precio, p.existencia, c.nombre FROM productos as p inner join categoria as c
on p.idCategoria = c.id;