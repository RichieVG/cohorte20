//propiedad de arreglos
//length

const frutas = ["🍐", "Manzana", "Guayaba", "Plátano", "Plátano"];
console.log(frutas);

console.log(frutas.length);

//Métodos - acciones

//push() - agrega al final

let num = frutas.push("Sandia", "Limón");
console.log(frutas);
console.log(num);

//unshift()  agrega al inicio
frutas.unshift("Guanábana");
console.log(frutas);

//Método para quitar
//pop()

let elemento = frutas.pop();
console.log(frutas);
console.log(elemento);

//shift()

let elemento2 = frutas.shift()
console.log(frutas);
console.log(elemento2);

//indexof()
console.log(frutas.indexOf("Manzana"));
console.log(frutas.indexOf("Plátano"));

//reverse() - acomodar al revés
frutas.reverse();
console.log(frutas);

frutas.reverse();
console.log(frutas);

//sort() - acomodar de manera alfabética
frutas.sort();
console.log(frutas);

const numeros = [4, 567, 2, 4566, 45, 78, 1];

numeros.sort();

numeros.sort((a,b) => a -b); //función callback

console.log(numeros);