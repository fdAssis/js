/*
* - Manipular informações
- Transformar
  - map
  - flat e flatMap
  - reverse
  - reduce
  - reduceRight
  - fill
- Combinar
  - Object.assign
  - Operador spread
  - reduce
  - reduceRight
  - concat
- Ordenar
  - sort
- Filtrar
  - filter
  - reduce
  - reduceRight
- Eliminar
  - filter
  - reduce
  - reduceRight
- Localizar
  - find
  - findIndex
- Testar
  - some
  - every
  - includes
*/

// Conversão entre tipos

// Object.keys(obj)
// Object.values(obj)
// Object.entries(obj)
// Object.fromEntries(arr)

const obj = { name: "Francisco", lastName: "Assis" };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.fromEntries(Object.entries(obj)));

console.log("============================================");

const obj2 = { first: "Anna", second: "Peddro" };

function invertObject(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [value, key])
  );
}

console.log(invertObject(obj2));
