/* crear una aplicación con JS, recibir una palabra y va a regresar la palabra invertida
raul  ==> luar */

const palabraInvertida = cadena => cadena.split("").reverse().join("");
 
let cadena = prompt("Inserta la palabra: ");
console.log("La palabra invertida: ", palabraInvertida(cadena));
