let num = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0) + 1) + Math.ceil(0));
  
  let chan = [];
  let number = 0;
  
  adivinarNumero(num);
  function adivinarNumero(azar) {
    do {
      number = Number(prompt("Adivina el número:"));
       {
        console.log("Bienvenido");
        if (number == azar) {
          console.log("Es el número correcto.");
            console.log(chan);
          } else {
            alert("El número es incorrecto, inténtalo de nuevo")
            chan.push(number);
          }
      }
    } while (isNaN(number) || number !== azar);
  }