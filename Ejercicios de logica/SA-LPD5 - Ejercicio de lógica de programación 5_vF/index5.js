let num = Math.floor(
    Math.random() * (Math.floor(100) - Math.ceil(0) + 1) + Math.ceil(0)
  );
  
  let intentos = [];
  let numero = 0;
  
  adivinarNumero(num);
  
  
  function adivinarNumero(aleatorio) {
    do {
      numero = Number(prompt("Adivina el número:"));
       {
        console.log("hola");
        if (numero == aleatorio) {
          console.log("Felicidades, adivinaste el número secreto.");
          console.log(intentos);
        } else {
          alert("El número es incorrecto, inténtalo de nuevo")
          intentos.push(numero);
        }
      }
    } while (isNaN(numero) || numero !== aleatorio);
  }