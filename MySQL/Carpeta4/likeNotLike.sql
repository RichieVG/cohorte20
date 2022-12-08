/* Like */
SELECT * FROM productos
where nombre like "limonada";

/* para palabras que empiecen con limon, el simbolo de porcentaje busca palabras que complementen a limon */
SELECT * FROM productos
where nombre like "limon%";

/* para palabras que terminen con limon */
SELECT * FROM productos
where nombre like "%limon";

/* lo contrario */
SELECT * FROM productos
where nombre not like "%limon%";