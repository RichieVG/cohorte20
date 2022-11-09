/* 
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar(); second
foo(); first
baz(); third
 */

/* const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 2000);
const baz = () => console.log("Third");

bar();
foo();
baz(); */


/* const nombre = () => {
    const nombres = ["Pepe", "Pancho", "María"];

    setTimeout(() => {
        return nombres;
    }, 0);
} */

//console.log(nombre()[0]);


/* const url = "https://pokeapi.co/api/v2/pokemon/4";

const pokedex = () => {
    fetch(url)
        .then((datos) => datos.json())
        .then((pokemon) => console.log(pokemon))
        .catch(error => console.log(error))
}; */


/* pokedex(); */

// () => {return}

/* const nombres = () => {
    const nombres = ["Pepe", "Pancho", "María"]; */

    

    /* setTimeout(() => {
        return nombres;
    }, 0); */

    /* return new Promise((resolve, reject) => { //resolve -- proceso exitoso
        setTimeout(() => {
                                //reject -- proceso no exitoso
           if(true){
            resolve(nombres);
           }else{
            reject("No hay nombres");
           }
           
        }, 3000)
    });
 */
/* }
nombre().then(nombres => console.log(nombres)).catch(error => console.warn(error));

const obtenerNombre = async () => {

    try {
        let nombres = await nombre();
        console.log(nombres);

    } catch(error) {
        console.log(error);
    }
} */

/* obtenerNombre(); */
const cartaPokemon = document.getElementById('pokemon');
const nombrePokemon = document.getElementById('nombre');
const imagen = document.getElementById('img');


const pokedex = async (numero) => {
    try {

        const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;

        const respuesta = await fetch(url);
        const pokemon = await respuesta.json();
        
        console.log(pokemon.name);

        const datos = {
            nombre: pokemon.name,
            imagen: pokemon.sprites.other['official-artwork'].front_default,
        }

        console.log(datos.imagen);

        nombrePokemon.textContent = datos.nombre;
        imagen.innerHTML = `
            <img src="${datos.imagen}" alt="imagen de ${datos.nombre}" width="250"/>
        `;
        
        
    } catch (error) {


        
    }
}



form.addEventListener("submit", (evento) => {
    //Codigo
    evento.preventDefault();

    const valor = document.getElementById("idP").value;

    console.log(valor);


    pokedex(valor);
    //console.log(evento.target);

    form.reset();

});