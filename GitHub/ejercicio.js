const numeros = [12, 11, 2001, 6, 21, 456, 31, 3, 12];

numeros.sort();

numeros.sort((a,b) => a -b);
console.log(numeros);

numeros.reverse((a,b) => a -b);
console.log(numeros);