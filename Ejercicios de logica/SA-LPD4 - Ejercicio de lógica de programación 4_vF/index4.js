fibonacci();

function fibonacci() {
  let num;
  do {
    num = Number(
      prompt(
        "Introduce los números:"
      )
    );
    {
      let serie = [0, 1];
      for (let i = 2; i < num; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
      }
      let sec = "";
      serie.forEach((element) => {
        sec += element + ", ";
      });
      sec = sec.slice(0, -2);
      sec += ".";
      console.log(sec);
    }
  } while (isNaN(num));
}