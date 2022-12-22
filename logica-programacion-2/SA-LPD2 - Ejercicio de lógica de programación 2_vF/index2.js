transCtoKF();

function transCtoKF() {
  let c;
  do {
    c = parseInt(prompt("Introduzca los grados Celsius para convertir:"));
    {
      console.log("Los grados Kelvin son: ", (c + 273.15));
      console.log("Los grados Fahrenheit son: ", c * 1.8 + 32);
    }
  } while (isNaN(c));
}