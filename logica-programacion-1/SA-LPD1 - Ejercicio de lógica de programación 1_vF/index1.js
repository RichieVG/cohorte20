const numberOne = parseInt(prompt("Agrega el 1er dato num:"));
const numberTwo = parseInt(prompt("Agrega el 2do dato num:"));
const numberThree = parseInt(prompt("Agrega el 3er dato num:"));

dato(numberOne, numberTwo, numberThree);

function dato(a, b, c) {
  if (a==b && b==c) {console.log("Los números son iguales");
} else {
    if (a>b && a>c) {
      if (b > c) {ss(a, b, c);
        } else {ss(a, c, b);
      }} else if (b > a && b > c) {
      if (a > c) {ss(b, a, c);
        } else {ss(b, c, a);
      }} else if (c > a && c > b) {
      if (a > b) {ss(c, a, b);
        } else {ss(c, b, a);
      }
    }
  }
}

function ss(numberOne, numberTwo, numberThree) {
  console.log("Los números ordenados de mayor a menor se acomodan así: " + numberOne + "," + numberTwo + "," + numberThree);
}