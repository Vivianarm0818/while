
while (true) {
    let diaSemana = prompt("Ingresa un día de la semana:");
  
    if (diaSemana.toLowerCase() === "domingo") {
      alert("Ve a descansar");
      break;
    }
  
    diaSemana = diaSemana.toLowerCase();
  
    if (diaSemana === "lunes") {
      alert("¡Es lunes! Felíz inicio de semana.");
    } else if (diaSemana === "martes") {
      alert("¡Es martes! Continúa con tu semana.");
    } else if (diaSemana === "miercoles") {
      alert("¡Es miércoles! Ya es mitad de semana.");
    } else if (diaSemana === "jueves") {
      alert("¡Es jueves! Ya casi llega el fin de semana.");
    } else if (diaSemana === "viernes") {
      alert("¡Es viernes! Mañana es fin de semana!");
    } else if (diaSemana === "sabado") {
      alert("¡Es sábado! Aprovecha y ve de compras");
    } else {
      alert("Día inválido.");
    }
  }
