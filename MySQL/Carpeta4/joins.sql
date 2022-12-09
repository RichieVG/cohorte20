/* Joins */
SELECT * FROM productos;
SELECT * FROM categoria;

SELECT * FROM productos, categoria
where idCategoria = id;

/* INNER */
SELECT p.nombre, p.precio, p.existencia, c.nombre FROM productos as p inner join categoria as c
on p.idCategoria = c.id;

/* LEFT JOIN */
SELECT p.nombre, p.precio, p.existencia, c.nombre FROM productos as p left join temp as t
on p.idCategoria = t.id;

/* RIGHT JOIN  */
SELECT p.nombre, p.precio, p.existencia, c.nombre FROM productos as p left join temp as t
on p.idCategoria = t.id;

SELECT * FROM proveedores;

SELECT * FROM categoria union
SELECT nombre, precio FROM productos;

/* multi consultas */
SELECT p.nombre, p. precio, p.existencia FROM productos as p;

select idCategoria from productos;

select * from proveedores;

select p.nombre as nombre_producto, c.nombre as nombre_categoria, pv.nombre as nombre_proveedor
from productos as p
left join categoria as c
on p.idCategoria = c.id
left join detalle_producto_proveedor as detalle
on p.idProducto = detalle.idProducto
left join proveedores as pv
on detalle.id = pv.id;

