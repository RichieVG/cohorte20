/*OPERADORES*/
SELECT * FROM productos;
SELECT * FROM productos where idCategoria = 1 and precio = 10 and existencia = 10;
/*Se tienen que cumplir todos los and para que se muestren, caso contrario que no se cumplan las condiciones no aparecerán.*/
SELECT * FROM productos where idCategoria = 1 or precio = 10;
/* != diferente
   <> diferente
   */
SELECT * FROM productos where idCategoria != 1;

/* null y not null */
SELECT * FROM productos where precio is not null;

/* between and */
SELECT * FROM productos
where precio 
between 5 and 10;

/* not between and */
SELECT * FROM productos
where precio 
not between 5 and 10;