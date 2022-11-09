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


const nombre = () => {
    const nombres = ["Pepe", "Pancho", "María"];

    setTimeout(() => {
        return nombres;
    }, 0);
}

//console.log(nombre()[0]);


const url = "https://pokeapi.co/api/v2/pokemon/4";

const pokedex = () => {
    fetch(url)
        .then((datos) => datos.json())
        .then((pokemon) => console.log(pokemon))
        .catch(error => console.log(error))
};


pokedex();

// () => {return}

