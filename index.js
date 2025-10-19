// Comentarios TODO resueltos o convertidos en tareas concretas
function calcular(a, b) {
  if (a === null || a === undefined) {
    console.log("a es nulo");
    return false;
  }
  // uso correcto de === y devolver el cálculo real
  const resultado = a + b;
  return resultado;
}

function funcionLarga(x) {
  // simplificamos usando matemáticas o estructura más compacta
  if (Number.isInteger(x) && x >= 1 && x <= 9) {
    return x;
  }
  return 0;
}

console.log(calcular(2, 2));
console.log(funcionLarga(3));
