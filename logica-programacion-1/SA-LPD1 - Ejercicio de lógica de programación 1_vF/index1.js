const number1 = parseInt(prompt("Introduce el primer número: "));
const number2 = parseInt(prompt("Introduce el segundo número: "));
const number3 = parseInt(prompt("Introduce el tercer número: "));

ordenar(number1, number2, number3);

function ordenar(a, b, c) {
  if (a == b && b == c) {
    console.log("Todos los números son iguales");
  } else {
    if (a > b && a > c) {
      if (b > c) {
        imprimir(a, b, c);
        } else {
          imprimir(a, c, b);
      }
        } else if (b > a && b > c) {
      if (a > c) {
            imprimir(b, a, c);
            } else {
              imprimir(b, c, a);
      }
        } else if (c > a && c > b) {
      if (a > b) {
                imprimir(c, a, b);
              } else {
                  imprimir(c, b, a);
      }
    }
  }
}

function imprimir(number1, number2, number3) {
  console.log(
    "Los números ordenados de mayor a menor se acomodan así: " +
      number1 +
      "," +
      number2 +
      "," +
      number3
  );
}