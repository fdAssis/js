/**
 * - Diferente de objetos que chaves podem ser somente strings, numero e symbol,
 * o Map permite qualquer tipo, até objetos e array.
 *
 * - Assim como array, Map mantém a ordem dos elementos (diferente de objetos).
 *
 * - É possivel acessar rapidamente um valor (semelhante a objetos).
 *
 * - Acessar a quantidade de elementos.
 */

const mapa = new Map([
  ["chave", "Francisco"],
  [false, "aaaaaa"],
  [{ id: "123" }, 1000],
]);

console.log(mapa);

const mapa_2 = new Map();
mapa_2.set("Dog", "Caramelo");

const array = ["Arroz", "Feijao"];
mapa_2.set(array, 10.5);

const obj = { km: 102.02 };
mapa_2.set(obj, "Gol");

console.log(mapa_2);

console.log(mapa.get(false));
console.log(mapa_2.get(array));

console.log(mapa.get({ id: "123" })); //undefined
console.log(mapa_2.get(obj)); // Gol

// ================================================================
console.log(mapa.size);

/**
 * Metodos Map
 *  - has
 *  - delete
 *  - clear
 *  - forEach
 *  - keys
 *  - values
 *  - entries
 *  - size
 */

console.log(mapa.has("chave"));
mapa.delete("chave");
console.log(mapa.has("chave"));

mapa.forEach(function (value, key) {
  console.log(key);
});

for (let m of mapa) {
  console.log(m);
}

for (let [key, value] of mapa) {
  console.log(key);
}

console.log(mapa_2.keys());
console.log(Array.from(mapa_2.keys()));
console.log([...mapa_2.keys()]);

console.log(mapa_2.values());
console.log(Array.from(mapa_2.values()));
console.log([...mapa_2.values()]);

for (let entry of mapa.entries()) {
  console.log("entry - ", entry);
}
