/* let x = 10;
console.log(x); */

let persona = {
    nombre: "Ricardo",
    apellido: "Valdivia",
    nombreCompleto: function () {
        return "El nombre es " + this.nombre + " " + this.apellido;
}
}

for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log("valor" + persona[nombrePropiedad]);
}

console.log( persona );
console.log(persona.nombre);
console.log(persona.nombreCompleto());
console.log(persona["apellido"]);
persona.tel = "555443322";
console.log(persona);
console.log(persona.tel);
delete persona.tel
delete persona.nombreCompleto
console.log(persona);
let personaArreglo = Object.value