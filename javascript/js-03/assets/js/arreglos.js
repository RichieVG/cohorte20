/* const - let - var */



/* var nombre = "Richie";

if(true){
    let nombre = "Jessica"
    console.log(nombre);
}

console.log(nombre); */

const numeros = [2, 4, 6, 57, 200];
let suma = 0;

//forEach
//recorre todo el arreglo y ejecuta el código que le indiquemos sobre los valores guardados




/* numeros.forEach(function sumar(elemento){
    
    console.log(elemento * elemento);
}); */

/* numeros.forEach(function sumar(elemento){
    suma += elemento;
});

console.log(suma); */

numeros.forEach((el, indice, arreglo) => {
    console.log(el * el);
});

//console.log(suma);
console.log(numeros);


/* map */

let nuevoArr = numeros.map((el) => {
    return el * el;
});

console.log(nuevoArr);


//filter
//crea una copia del arreglo original y nos permite filtrar

const frutas = ["papaya", "manzana", "manzana", "uva"];

let frutaFiltrada = frutas.filter((fruta) => fruta.length === 3);

console.log(frutaFiltrada);