/* let x = 10;
console.log(x);

let persona = {
    nobre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(){
        return "El nombre es " + this.nombre + " " + this.apellido;
    }
}
console.log(persona);

console.log( persona );
console.log( persona.nombre);
console.log(persona.nombreCompleto());

let persona1 = new Object();
persona1.edad = 23;
console.log(persona1.edad); */



let persona = {
    nobre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(){
        return "El nombre es " + this.nombre + " " + this.apellido;
    }
}
console.log(persona);

console.log( persona );
console.log( persona.nombre);
console.log(persona.nombreCompleto());


for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log("valor:" + persona[nombrePropiedad]);
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto);
console.log(persona["apellido"]);
persona.tel = "553356565";
console.log(persona);
console.log(persona.tel);
delete persona.tel
console.log(persona);
let personaArreglo = Object.values(persona);
let personaString = JSON.stringify(persona);
console.log(personaString);