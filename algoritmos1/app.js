alert("Hola mundo desde visual studio code!");

//declaración de una variable (pueden estar vacías)

let miVariable;


//inicializar variable (NO pueden estar vacías)
const otraVariable = 5
miVariable = "Hola";
let nombre = "Richie";


console.log(otraVariable);
console.log(miVariable);
console.log(nombre);

//mutación de valor o reasignación
console.log(miVariable);
miVariable = "Adiós";
console.log(miVariable);


//Valores primitivos
//String - cadena de texto
//palabras, nombres, caracteres

let palabra = "Martin Garrix"
console.log(palabra);


//Number -  números
let num = 3;
let num2 = 65.60;
let num3 = 9800;

console.log(num);
console.log(num2);
console.log(num3);
console.log(num, num2, num3);
console.log(num + num2 + num3);
console.log("Este número es", num);
console.log("Este número es " + num);

console.log("1" + 1);
console.log("1" + "1");

//Boolean - boleano
//true - false
let verdadero = true;
let falso = false;

console.log(verdadero);
console.log(falso);

//null
//una variable que estemos dejando vacía intencionalmente
let valorNulo = null;
console.log(valorNulo);

//undefined
//estado
//
let varUn;
console.log(varUn);
console.log(varUn + 1);

//Valores compuestos

//operador typeof - nos permite conocer un tipo de dato

let a = 1
let b = "Hola";
let c = true;

console.log(typeof a);
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(4567));


