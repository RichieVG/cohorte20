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
console.log("El resultado es: " + resultado);
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

    console.log("El producto es " + salida); */
    /* Funciones anonimas */
    /* let miFuncion0 = function (parametro){
        parametro = parametro * 2;
        return parametro;
    }
console.log("Llamando a la función anónima " + miFuncion0 (4));

let funcion01 = function (caracteres){
return "Hola " + caracteres;
}("Lunes");
console.log("El resultado es: " + funcion01);

let suma = (x, y) => {
    return x+y
};
let resultado = suma (5, 3);
console.log("La suma es: " + resultado); */

//EJERCICIOS

/* Realizar una funcion (calcularPrecioTotal)
para Calcular el precio total de una compra tomando encuenta 
impuestos = 1.16, gartos de envio = 10, y como parametro el precio
donde 
precioTotal = (precio * impuesto ) + gartosEnvio;

como salida precio Total */


/* let calcularPrecioTotal = function (precio){
let impuesto = 1.16;
let gastosEnvio = 10;
let precioTotal = (precio * impuesto ) + gastosEnvio;
return precioTotal;
}
let precioTotal = calcularPrecioTotal(23.34);
console.log("El precio total es: " + precioTotal); */

//FUNCIÓN FLECHA
/* let salida

let calcularPrecioTotalFlecha = (precio) => {
    let impuestos = 1.16;
    let gastosEnvio = 10;
    let precioTotal = (precio*impuestos) + gastosEnvio
    return precioTotal;
}
let precioTotal = calcularPrecioTotalFlecha (23.34);
console.log("El precio total con función flecha es: " + precioTotal);

let calcularPrecioTotalFlecha = (precio,porcentajeImpuestos) => {
    let impuesto = 1.16;
    let gastosEnvio = 10;
    let precioConImpuesto = ((1+porcentajeImpuestos)/100) *precio;
    let precioTotal;
    return precioTotal;
}
let precioTotal = calcularPrecioTotalFlecha (23.34);
console.log("El precio total con función flecha es: " + precioTotal); */

//

/* function calcularPrecioTotal(precio = 0){
    let precioTotal = (precio * imp) + env
    return precioTotal
}
console.log("Precio Total (Normal) = ", calcularPrecioTotal(prec));

//Función anónima

let precioTotal = function (precio = 0){
    let total = (precio * imp) + env
    return total
}
console.log("Precio Total (Anonima) = ", precioTotal1(prec));

// Función flecha

let precioTotal2 = (precio = 0) => (precio * imp) + env
console.log("Precio Total (Flecha) = ", precioTotal2(prec)); */

//ABSTRACCIÖN

let miObjeto = {
    nombre: "Juan",
    edad: 30,
    datos: function () {

        let mensaje = "Tú eres " + this.nombre;
        mensaje += " y tienes " + this.edad + " años";
        console.log(mensaje);
    }
};
miObjeto.datos();

let constructor = function () {
    let objPersona = {
        nombre: "Richie",
        nss: 2357,
        datosPersona: function () {
            let msj = "Eres " + this.nombre + " el número nss es " + this.nss;
            console.log(msj);
        },
        otroMetodo: function (parametro){
            let numero = 8;
            console.log("La suma es: " + (numero + parametro));
        }
    };
    return objPersona;
}
let varObjReg = constructor() //crear la variable objeto
varObjReg.datosPersona();
varObjReg.otroMetodo(5);

//implementar este metodos con aplicar los impuestos