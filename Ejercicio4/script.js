
let capturas = [];

while (true) {
  let letras = prompt("Ingresa letras o palabras (deja vacío para terminar):");

  if (letras === "") {
    break;
  }

capturas.push(letras);
}

let resultado = capturas.join("");

alert(resultado);