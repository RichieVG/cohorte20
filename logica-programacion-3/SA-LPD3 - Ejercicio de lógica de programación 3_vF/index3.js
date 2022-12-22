fact();

function fact() {
  let numero;
  do {
    numero = Number(
      prompt("Introduce el número:"));
    {
      let resultado = 1;
        for (let i = 1; i <= numero; i++) {
          resultado *= i;
      }
    console.log("El factorial es: ", resultado);
    }
  } while (isNaN(numero));
}