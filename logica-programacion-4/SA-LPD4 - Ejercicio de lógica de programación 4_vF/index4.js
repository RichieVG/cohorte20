f();
function f() {

  let num;

  do {num = Number(prompt("Introduce los números:"));
    {
      let datos = [0, 1];
      for (let i = 2; i < num; i++) {datos.push(datos[i - 1] + datos[i - 2])}
        let sec = "";
        datos.forEach((element) => {sec += element + ", "});
          sec = sec.slice(0, -2);
          sec += ".";
          console.log(sec);
    }
  } while (isNaN(num));
}