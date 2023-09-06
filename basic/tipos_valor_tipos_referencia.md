# Tipos valor e Tipos referência

Quando você armazena um valor em uma variável, esse valor tem um tipo. **O tipo de um dado valor nunca muda, mas o valor guardado numa variável pode ser trocado**. Qualquer variável pode conter um valor de qualquer tipo, a qualquer momento, e por isso não faz sentido declarar o tipo da variável. O tipo é uma característica dos valores, e as variáveis são agnósticas quanto a eles. **Em outras palavras, as variáveis não são amarradas a nenhum tipo, mas sempre contêm valores que pertencem a algum dos tipos disponíveis.**

### Os Tipos

Cinco dos seis tipos em JavaScript têm valores primitivos: `Undefined`, `Null`, `Boolean`, `String` e `Number`. Valores primitivos como _undefined_, _null_, _true_, _"texto"_ e _10_ são imutáveis. `Undefined` e `Null` são tipos especiais que possuem um só valor cada, respectivamente _undefined_ e _null._

O sexto tipo é `Object`, que inclui `arrays`, `funções` e outros. Objetos são conjuntos de propriedades, que podem guardar valores de qualquer um dos tipos já citados. Propriedades podem ser acrescentadas a um objeto ou removidas dele a qualquer momento, e valores de propriedades também podem ser alterados. Portanto, objetos são mutáveis.

### Valor vs referência

Pode-se considerar que os tipos primitivos do JavaScript funcionam como os _value types_, enquanto que os objetos funcionam como os _reference types_.

Exemplo:

```js
var meuObjeto = {};
```

O que é guardado nessa variável é um valor do tipo `Object`. O objeto em si (com suas propriedades, métodos, etc.) fica guardado em algum lugar da memória, gerenciado pelo interpretador da linguagem. E o valor do tipo Object é uma referência a esse objeto.

Dizer que objetos são referências quer dizer apenas que com a referência em mãos você pode acessar o objeto, **e não que a referência seja um ponteiro para o local onde o objeto está armazenado na memória**. Essa distinção é muito importante. Pense na referência como um valor como qualquer outro.

```js
var a, b;
a = {};
b = a;

b.umaPropriedade = 10;
b == a; // true

a.umaPropriedade; // 10
b = { outroObjeto: true };
b == a; // false
```

Aqui, `b` **não** é "uma referência a `a`"; `b` contém uma referência a um determinado objeto, e `a` contém outra referência ao mesmo objeto. Assim, pode-se alterar uma propriedade desse mesmo objeto por meio de `a` ou `b`. **Mas não se pode sobrescrever o objeto que está em `a` por atribuição de um novo valor a `b`.** O que `b = { outroObjeto: true }` faz é somente armazenar em `b` uma nova referência, a um outro objeto. O primeiro objeto continua existindo, e a referência contida em `a` ainda aponta para ele.

Esse mesmo conceito também serve para entender como os objetos são passados para funções:

```js
function teste(obj) {
  obj.novaProp = "foo"; // O objeto fora da função é afetado
  obj = { outraProp: "bar" }; // O objeto fora da função não é afetado
}

var o = {};
teste(o);
o.novaProp; // "foo"
o.outraProp; // undefined
```

Isso quer dizer que em JavaScript **não existe passagem "por referência"**. O objeto é passado por valor, só que o valor passado em `teste(o)` é uma referência.

---

Ao programar em JavaScript, tenha em mente que o acesso à memória fica a cargo do interpretador da linguagem. Não se manipula a memória diretamente em JavaScript. A especificação da linguagem sequer menciona como a memória deve ser tratada, isso fica integralmente a cargo da implementação. Por isso não é possível dizer onde cada dado fica armazenado sem conhecer bem como cada interpretador funciona.
