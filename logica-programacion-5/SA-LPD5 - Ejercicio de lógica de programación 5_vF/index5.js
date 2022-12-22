const num = Math.floor(Math.random() * 
(Math.floor(100) - 
Math.ceil(0) + 1) + 
Math.ceil(0));
  
  const chan = {};
  const number = 0;
  
  advNum(num);
  function advNum(azar) {
    do {number = Number(prompt("Adivina el número:"));
       {console.log("Bienvenido");
        if (number == azar) {console.log("Acertaste!");
            console.log(chan);
          } else {alert("El número es incorrecto, inténtalo de nuevo")
            chan.push(number);
        }
      }
    } while (isNaN(number)||number !== azar);
  }