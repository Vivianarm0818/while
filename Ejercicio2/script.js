
let primerNumero = prompt("Ingrese un numero del 1 al 50: ");
let segundoNumero = prompt("Ingrese otro numero del 1 al 50: ");


if (primerNumero >= 1 && primerNumero <= 50 && segundoNumero >= 1 && segundoNumero <= 50) {
    let contador = 1;
  
    while (contador <= 50) {
      if (contador == primerNumero || contador == segundoNumero) {
        alert(contador + " ¡Lotería!");
      } else {
        alert(contador);
      }
  
      contador++;
    }
  } else {
    alert("Rango de números no válidos.");
  }
