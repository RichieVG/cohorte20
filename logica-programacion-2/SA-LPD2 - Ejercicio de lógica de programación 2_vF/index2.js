convertirTemperatura();

function convertirTemperatura() {
  let c;
  do {
    c = parseInt(prompt("Introduzca los grados Celsius:"));
    {
      console.log("Grados Kelvin: ", (c + 273.15));
      console.log("Grados Fahrenheit: ", c * 1.8 + 32);
    }
  } while (isNaN(c));
}