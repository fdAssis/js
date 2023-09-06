# Map, Set, WeakMap, WeakSet

No JavaScript, as estruturas de dados `Map`, `Set`, `WeakMap` e `WeakSet` são usadas para armazenar coleções de valores de maneira eficiente e fornecer funcionalidades específicas.

## **Map**

Um Map é uma coleção de pares chave-valor, onde as chaves podem ser de qualquer tipo de dados, incluindo objetos, funções e primitivos.

Os valores são associados às chaves e podem ser recuperados usando as chaves correspondentes.

Pode ser criado usando a classe `Map` embutida no JavaScript.

```jsx
const myMap = new Map();
myMap.set("chave1", "valor1");
myMap.get("chave1"); // Retorna 'valor1'
```

- **Vantagens**:
  - Permite a associação de valores a chaves de qualquer tipo.
  - Mantém a ordem de inserção das chaves.
  - Suporta iteração eficiente.

### Principais métodos do `Map`

- set(key, value): Adiciona um par chave-valor ao `Map`
  ```jsx
  const myMap = new Map();
  myMap.set("chave1", "valor1");
  myMap.set("chave2", "valor2");
  console.log(myMap); // Map { "chave1" => "valor1", "chave2" => "valor2" }
  ```
- get(key): Retorna o valor associado a uma chave específica
  ```jsx
  console.log(myMap.get("chave1")); // "valor1"
  console.log(myMap.get("chave2")); // "valor2"
  ```
- has(key): Verifica se uma chave existe no `Map`
  ```jsx
  console.log(myMap.has("chave1")); // true
  console.log(myMap.has("chave3")); // false
  ```
- delete(key): Remove um par chave-valor do `Map` com base na chave
  ```jsx
  myMap.delete("chave1");
  console.log(myMap); // Map { "chave2" => "valor2" }
  ```
- size: Retorna o número de pares chave-valor no `Map`
  ```jsx
  console.log(myMap.size); // 1
  ```
- clear(): Remove todos os pares chave-valor do `Map`
  ```jsx
  myMap.clear();
  console.log(myMap); // Map {}
  ```
- keys(): Retorna um iterador com as chaves do `Map`
  ```jsx
  for (const key of myMap.keys()) {
    console.log(key);
  }

  // Saída:
  // "chave1"
  // "chave2"
  ```
- values(): Retorna um iterador com os valores do `Map`
  ```jsx
  for (const value of myMap.values()) {
    console.log(value);
  }

  // Saída:
  // "valor1"
  // "valor2"
  ```
- entries(): Retorna um iterador com pares chave-valor do `Map`
  ```jsx
  for (const [key, value] of myMap.entries()) {
    console.log(`${key} => ${value}`);
  }

  // Saíada:
  // "chave1 => valor1"
  // "chave2 => valor2"
  ```

## **Set**

Um Set é uma coleção de valores únicos, onde cada valor só pode aparecer uma vez.

Os valores são armazenados em uma ordem específica e não há duplicatas.

Pode ser criado usando a classe `Set`.

```jsx
const mySet = new Set();
mySet.add("valor1");
mySet.add("valor2");
```

- **Vantagens**:
  - Remove automaticamente valores duplicados.
  - Suporta verificação de existência eficiente.

### Principais métodos do `Set`

- **add(value)**: Adiciona um valor as `Set`
  ```jsx
  const mySet = new Set();
  mySet.add("valor1");
  mySet.add("valor2");
  console.log(mySet); // Set { "valor1", "valor2" }
  ```
- **has(value)**: Verifica se um valor existe no `Set`
  ```jsx
  console.log(mySet.has("valor1")); // true
  console.log(mySet.has("valor3")); // false
  ```
- **delete(value)**: Remove um valor do `Set`
  ```jsx
  mySet.delete("valor1");
  console.lgo(mySet); // Set { "valor2" }
  ```
- **size**: Retorna o número de elementos no `Set`
  ```jsx
  console.log(mySet.size); // 1
  ```
- **clear()**: Remove todos os elementos do `Set`
  ```jsx
  mySet.clear();
  console.log(mySet); // Set {}
  ```
- **keys()**: Retorna um iterador com os valores do `Set` . (Observe que o `Set` não possui chaves, mas tem um método `keys` para compatibilidade com `Map`)
  ```jsx
  for (const key of mySet.keys()) {
    console.log(key);
  }

  // Saída
  // "valor1"
  // "valor2"
  ```
- **values()**: Retorna um iterador com os valores do `Set`. (Essa função é idêntica a `keys` no caso de um `Set`)
  ```jsx
  for (const value of mySet.values()) {
    console.log(value);
  }

  // Saída
  // "valor1"
  // "valor2"
  ```
- **entries()**: Retorna um iterador com pares chaves

## **WeakMap**

Um `WeakMap` é semelhante a um Map, mas com algumas diferenças importantes. As chaves em um `WeakMap` só podem ser objetos, e essas chaves são fracamente referenciadas.

Permite associar valores a objetos de forma "fraca", o que significa que os objetos associados não impedem a coleta de lixo quando não são mais referenciados em outras partes do código.

Pode ser criado usando a classe `WeakMap`.

```jsx
const weakMap = new WeakMap();
const objetoChave = {};
weakMap.set(objetoChave, "valor");
```

- **Vantagens**:
  - Útil para evitar vazamentos de memória quando os objetos-chave não são mais utilizados.
  - Não é enumerável, o que significa que não é possível iterar diretamente sobre suas chaves.

### Principais métodos do `WeakMap`

- **set(key, value)**: Adiciona um par chave-valor ao `WeakMap`. A chave deve ser um objetivo e é mantida como uma referência fraca
  ```jsx
  const weakMap = new WeakMap();
  const key = {};
  weakMap.set(key, "valor");
  ```
- **get(key)**: Retorna o valor associado a uma chave específica
  ```jsx
  console.log(weakMap.get(key)); // "valor"
  ```
- **has(key)**: Verifica se uma chave existe no `WeakMap`
  ```jsx
  console.log(weakMap.has(key)); // true
  ```
- **delete(key)**: Remove um par chave-valor do `WeakMap` com base na chave
  ```jsx
  weakMap.delete(key);
  console.log(weakMap.has(key)); // false
  ```

O **`WeakMap`** não tem métodos como **`keys()`**, **`values()`**, **`entries()`**, **`size`**, ou **`clear()`**. Isso ocorre porque não é possível iterar diretamente sobre as chaves ou valores de um **`WeakMap`**, uma vez que as chaves são referências fracas.

## **WeakSet**

Um `WeakSet` é semelhante a um Set, mas apenas aceita objetos e os mantém de forma "fraca".

Permite armazenar objetos de forma que eles não impeçam a coleta de lixo quando não são mais referenciados em outras partes do código.

Pode ser criado usando a classe `WeakSet`.

```jsx
const weakSet = new WeakSet();
const objeto = {};
weakSet.add(objeto);
```

- **Vantagens**:
  - Útil para evitar vazamentos de memória quando os objetos não são mais utilizados.
  - Como o `WeakSet` só permite objetos, ele garante que os objetos armazenados sejam referenciados de forma "fraca".

### Principais métodos do `WeakSet`

- **add(value)**: Adiciona um valor ao `WeakSet`. Os valores devem ser objetos e são mantidos como referências fracas.
  ```jsx
  const weakSet = new WeakSet();
  const obj = {};
  weakSet.add(obj);
  ```
- **has(value)**: Verifica se um valor existe no `WeakSet`.
  ```jsx
  console.log(weakSet.has(obj)); // true
  ```
- **delete(value)**: Remove um valor do `WeakSet`.
  ```jsx
  weakSet.delete(obj);
  console.log(weakSet.has(obj)); // false
  ```

O `WeakSet` não tem métodos como `keys()`, `values()`, `entries()`, `size`, ou `clear()`. Isso ocorre porque não é possível iterar diretamente sobre os valores de um `WeakSet`, uma vez que os valores são referências fracas.
