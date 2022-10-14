// AVISO

let miVariable = prompt("Cuál es tu nombre: ")

function saludoPer() {
    alert(miVariable)
}

// SUMA

function suma(){
    let num1 = parseInt( prompt("de el valor de numero 1: "));
    let num2 = parseInt( prompt("de el valor de numero 2: "));
    let resultado = num1 + num2;
    return resultado;
}

saludoPer();
alert(suma());

function suma (){
    let num1 = 10;
    let num2 = 5;
    return num1 + num2;

}
console.log("El resultado de la suma es: "+ suma());

// RESTA

function resta (){
    let num1 = 10;
    let num2 = 5;
    return num1 - num2;
}
console.log("El resultado de la resta es: "+ resta());

// MULTIPLICACIÓN

function multiplicacion (){
    let num1 = 10;
    let num2 = 5;
    return num1 * num2;
}
console.log("El resultado de la multiplicación es: "+ multiplicacion());

// DIVISIÓN

function division (){
    let num1 = 10;
    let num2 = 5;
    return num1 / num2;
}
console.log("El resultado de la división es: "+ division());

// RESIDUO

function residuo (){
    let num1 = 7;
    let num2 = 2;
    let resultado = (num1 % num2);
    return resultado;

}
console.log("El residuo es: "+ residuo());

// ADICIONALES

function adicionales (){
    let num1 = 30;
    let num2 = 0;
    if (num2 == 0 ){
console.log("El denominador es 0");
    return num1 / num2
}
console.log("");
}
console.log("El número adicional es: "+ adicionales());

// EDAD

function edad (){
    let miEdad = 18;
    if (miEdad >=18){
        console.log("Eres mayor de edad");
    } else {console.log("No eres mayor de edad")};

    }
edad()

/* else es cuando la prueba lógica no ha sido satisfactoria
la función está dentro de las llaves, si la llamada
está dentro de las llaves es como llamarte a ti mismo.*/

function conjunciones (){
    let valor1 = true;
    let valor2 = true;
    if (valor1 && valor2) {
        console.log("El valor 1 y el valor 2 son verdaderos");
    } else {
        console.log("Un valor es falso");
    }
}
conjunciones();

function disfuncion(){
    let valor1 = false;
    let valor2 = false;
    if (valor1 || valor2){
        console.log("El operador or es verdadero");
    } else {
        console.log(("El operador es falso"));
    }
}
disfuncion()

function negacion(){
    let valor1 = false;
    if(!(!valor1)){
        console.log("El valor es " + valor1);
    }else{
        console.log("El valor negado es " + valor1);
    }
}
negacion()