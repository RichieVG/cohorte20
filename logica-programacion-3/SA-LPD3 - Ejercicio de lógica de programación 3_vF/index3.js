fact();
function fact() {

  let num;

  do { num = Number(prompt("Agrega el número:"));
    {
      let r = 1;
        for (let i = 1; i <= num; i++) {r *= i;
      }
    console.log("El factorial es: ", r);
    }
  } while (isNaN(num));
}