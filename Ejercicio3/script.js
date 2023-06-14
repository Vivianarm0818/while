
let numeros = [];

while (true) {
  let numero = prompt("Ingresa un número (presiona 0 para terminar):");

  if (numero === "0") {
    break;
  }

  numero = parseFloat(numero);

  if (!isNaN(numero)) {
    numeros.push(numero);
  }
}

alert("Números capturados: " + numeros);

