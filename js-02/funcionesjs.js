/* let miNom = "José Ricardo Valdivia González"
console.log(miNombre);

function miNombre (){
    let nombre = "Richie";
    console.log(nombre);
}
miNombre();

function funcion1(){
    let valor = 2;
    valor = valor + 3;
    return valor;
}
let resultado = funcion1();
console.log("El resultado es: " + resultado); */

function funcionEjemplo(){
    let valor1 = 2;
    valor1 = valor1 + 3;
    console.log("El resultado de valor1 es: " + valor1);
}
funcionEjemplo();

let valor2 = 3; // declaración global
function funcion2(){
    valor2 = valor2 + 5;
    console.log("el resultado de valor2 es: " + valor2);
}
funcion2();

    let variableGlobal = 5;
    function funcion3(){
        let variableLocal = "El valor es: ";
        console.log(variableLocal + variableGlobal);
    }
    funcion3();

    function funcion4(valor){
        let numero = 6;
        numero = numero * valor;
        return numero;
    }
    let salida = funcion4(2);

    console.log("El producto es " + salida);
    /* Funciones anonimas */
    let miFuncion0 = function (parametro){
        parametro = parametro * 2;
        return parametro;
    }
console.log("Llamando a la función anónima " + miFuncion0 (4));

let funcion01 = function (caracteres){
return "Hola " + caracteres;
}("Lunes");
console.log("El resultado es: " + funcion01);
