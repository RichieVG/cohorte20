show columns from productos;
INSERT INTO productos (nombre, precio, fecha_alta, idCategoria, existencia, marca)
VALUES ('Ariel', 30, curdate(),9,60, "");

select * from productos;
select * from categoria;

update productos SET precio = 25
WHERE idProducto =29;

update productos SET precio = replace (precio, 3, 13);
select * from productos;

alter table productos add column marca varchar(20) not null;


INSERT INTO categoria (nombre) VALUES ('Bebidas');
DELETE FROM productos WHERE idProducto= 27;
select * from categoria;
show columns from detalle_producto_proveedor;

delete from productos where idProducto = 6;

truncate table productos;

SELECT COUNT (idProducto) AS cantidad, idCategoria FROM productos GROUP BY idCategoria;
