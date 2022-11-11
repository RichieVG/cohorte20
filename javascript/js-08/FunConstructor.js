let constructor = function() {
    let valor0 = 0;
    let valor1 = 0;

    //declarando el objeto
let persona = {
    nombre: "Pedro",
    apellido: "Lara", 
    suma: function(a, b){
        return a+b;
    },
    get nombr (){
        return this._nombre;
    },
    set nombr (nombre0){
        this._nombre = nombre0; 
    }
};
return persona;

};
/* let p1 = constructor()
console.log(p1); */
let p1 = constructor ();
p1.nombre="Carlos";
console.log(p1);