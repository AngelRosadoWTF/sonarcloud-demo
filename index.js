// TODO: mejorar manejo de errores
function calcular(a, b) {
  var resultado = a + b; // variable 'resultado' podría causar "unused" si no se usa
  if (a == null) {
    console.log("a es nulo");
  }
  // mala práctica: comparación doble ==, no ===
  if (a == b) {
    return true;
  } else {
    return false;
  }
}

function funcionLarga(x) {
  // función deliberadamente larga / repetitiva para subir la complejidad ciclomática
  if (x === 1) return 1;
  if (x === 2) return 2;
  if (x === 3) return 3;
  if (x === 4) return 4;
  if (x === 5) return 5;
  if (x === 6) return 6;
  if (x === 7) return 7;
  if (x === 8) return 8;
  if (x === 9) return 9;
  // ...
  return 0;
}

console.log(calcular(2, "2"));
console.log(funcionLarga(3));
