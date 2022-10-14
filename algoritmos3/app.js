//alert("Funciona");

let nombre  = "Richie"

console.log(nombre);


//Arreglos
let arr1 = new Array("Richie", 3, true)
console.log(arr1);

//notación de corchetes
console.log(arr1[1]);
console.log(arr1[0]);

//modificar valores o agregar
console.log(arr1[3]);
arr1[3] = 234;
console.log(arr1[3]);

arr1[10] = 5;
console.log(arr1);

arr1[10] = "GDL";
console.log(arr1);

let arr2 = [];
console.log(arr2);

arr2[0] = 2;

console.log(arr2);
//alert(arr1[10]);


const arr3 = [];
console.log(arr3);
arr3[4] = "Hola"
console.log(arr3);

const suma = () => {

}

//arreglos multidimensionales, matrices
//un arreglo dentro de otro
const arr4 = [1, "Adiós", false, [1]];
console.log(arr4[2]);
console.log(arr4[3][0]);