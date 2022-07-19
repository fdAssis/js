# Javascript

# Conceitos fundamentais

## strict mode

Javascript é uma linguagem dinâmica e que não foi planejada pras dimensões em que é usada hoje em dia. Então ela tem alguns _probleminhas_. Por exemplo a declaração de variáveis, se você utilizar uma variável sem `var` antes, ela se tornará uma variável global, então pode estar sobrescrevendo um valor que pode estar sendo usado por alguma outra função em algum outro lugar. Esse tipo de coisa causa erros que são muito difíceis de encontrar.

Esse tipo de comportamento é "natural" da linguagem e quebraria um monte de bibliotecas existentes caso fosse tirado da linguagem agora.

O **\*"use strict**"\* serve pra tentar amenizar esses problemas, navegadores que reconhecem essa diretiva vão emitir erros quando encontram código que é javascript válido mas que é potencialmente problemático, como o caso de usar variáveis sem declarar com var. Navegadores antigos que não reconhecem simplesmente ignoram a diretiva.

E como o "use strict" pode ser usado em blocos de código, você pode utilizar dentro das suas novas funções sem precisar refatorar todas suas bibliotecas antigas.

Existem duas maneiras de se utilizar o `"use strict"`:

- No topo do arquivo, a diretiva aplica o modo estrito para o arquivo todo.
- Como a primeira linha de código de uma função, a diretiva aplica o modo estrito somente dentro da função (incluindo outras funções eventualmente declaradas dentro dela).

O grande benefício de se o usar _strict mode_ é reduzir a chance de existirem no código bugs difíceis de localizar (como um conflito de nome ao se criar uma global implícita, ou a existência de duas chaves iguais em objeto literal).

### Restrições existentes no strict mode

- Os identificadores `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, e `yield` são palavras reservadas quando utilizados no strict mode.
- Literais numéricos nunca são considerados octais, nem mesmo quando começam com zero. O mesmo vale para octais escapados em strings, como `'\012'` (que os browsers modernos nem suportam mais, mesmo fora do strict mode)
- Tentar atribuir um valor a uma variável que não existe no escopo atual não cria mais uma propriedade no objeto global (ou seja, não cria mais uma variável global). Em vez disso, lança uma exceção do tipo `ReferenceError`. Além disso, não é possível atribuir para propriedades que tenham o atributo `{[[Writable]]:false}`, nem para um accessor sem setter definido `({[[Set]]:undefined})`, nem para propriedades de objetos cuja propriedade interna `[[Extensible]]` seja false. Em todos esses casos será lançado um `TypeError`.
- Não é possível redefinir `eval`, nem utilizá-lo com `++` ou `--`.
- Se você tentar acessar `arguments.caller` ou `arguments.callee` em uma função, será lançado um TypeError.
- Argumentos nomeados de funções não compartilham valores dinamicamente com as propriedades equivalentes indexadas numericamente. Por exemplo, em `function foo(bar) { arguments[0] = 10; }`, `bar` mantém o valor passado na chamada e não assume o valor `10`.
- O mesmo é válido no caso inverso: em `function foo(bar) { bar = 10; }`, `arguments[0]` mantém o valor passado na chamada e não assume o valor `10`.
- Se houver mais de uma propriedade com o mesmo nome em um objeto literal, um SyntaxError é lançado.
- Os identificadores "eval" e "arguments" não podem ser utilizados como nomes de parâmetros de funções que definam *getters* ou *setters* em objetos literais (mesmo que o código externo não esteja em strict mode, mas o corpo do getter/setter esteja).
- O `eval` em strict mode não pode instanciar variáveis ou funções no escopo de quem chama `eval`. O código passado ao `eval` irá criar um novo escopo, onde essas variáveis serão instanciadas.
- Em strict mode, não há coerção de `this` para objeto. Em casos onde `this` for `null` ou `undefined`, ele não será convertido para o objeto global. Por exemplo: em `function f(){ console.log(this) }; f();`, `this` é `undefined` em strict mode, e não o objeto global (em browsers, `window`). Além disso, se um valor primitivo for passado como `this`, ele não será convertido ao *wrapper* equivalente.
- O operador `delete` lança um SyntaxError quando utilizado em itens não deletáveis como variáveis, funções e argumentos. Por exemplo: `delete variavel`, `delete funcao` e `function(foo) { delete foo; }`.
- O operador `delete` lança um TypeError se a propriedade a ser deletada tiver o atributo `{ [[Configurable]]:false }`.
- Se você tentar declarar uma variável com o nome de "eval" ou "arguments", será lançado um SyntaxError.
- O uso de `with` lança um SyntaxError.
- Numa cláusula `catch` não é possível utilizar "eval" ou "arguments" como nome da exceção; isso é um SyntaxError.
- Os identificadores "eval" e "arguments" não podem ser utilizados como nomes de parâmetros de funções; isso é um SyntaxError.
- Funções não podem ter múltiplos parâmetros com o mesmo nome; isso é um SyntaxError.
- É proibido às implementações estenderem o significado das propriedades "caller" e "arguments" de instâncias de funções para além do que consta da especificação.
- É um SyntaxError tentar utilizar "eval" ou "arguments" como nome de função ou parâmetro, assim como tentar forçar isso por meio do construtor `Function`.

## call stack e memory heap

Em background o JS tem que guardar e escrever informações novas e manter o histórico do que acontecerá em cada linha de código e é exatamente para isso que o JS possui essas duas ferramentas: Call Stack e Memory Heap.

[Memory Stack and Heap](https://www.notion.so/Memory-Stack-and-Heap-1d7d8fd0a9fa4ddea3030a40a2d66618)

### Memória do Javascript

```jsx
let num1 = 2;
let num2 = num1;

num1 = num1 + 1;

console.log(num2);
```

1. Quando *`num1`* foi inicializada, o próprio JS criou um id único e alocou um endereço na memória para ela fazendo com que o valor também fosse guardado nesse endereço.
2. Depois, o código diz que a variável *`num2`* seria igualada à *`num1`*, o que significa que *`num2`* será igualada àquele endereço na memória e não ao valor de *`num1`.*
3. Ao mudar o valor de *num1,* o JS alocou um novo endereço na memória e guardou o valor da soma que é 3 neste mesmo endereço. Isso sempre ocorrerá pois no *JavaScript* os tipos de dados primitivos (_`boolean`_, *`bigint`*, *`number`*, *`string`*, *`symbol`* e *`undefined`*) são imutáveis!

- **Call Stack And Memory Heap**
  É basicamente juntar todas as chamadas em uma só (ou funções). É exatamente aqui que os dados primitivos são salvos em memória!
  O call stack junta todas as chamadas das funções usando um conceito de: **FILO (first in last out)**. Sendo assim, ele adiciona a chamada da função no topo da pilha, executa e depois remove quando todo o código rodar.
  O **Call Stack** é o lugar que todos os dados primitivos são salvos. Logo, o **Memory Heap** é onde todos os dados não primitivos são salvos!
  A grande diferença entre eles é que a ferramenta de memory heap consegue guardar dados desordenadamente e que podem crescer dinamicamente, como arrays e objetos.

## tipos valor e tipos referência

Quando você armazena um valor em uma variável, esse valor tem um tipo. **O tipo de um dado valor nunca muda, mas o valor guardado numa variável pode ser trocado**. Qualquer variável pode conter um valor de qualquer tipo, a qualquer momento, e por isso não faz sentido declarar o tipo da variável. O tipo é uma característica dos valores, e as variáveis são agnósticas quanto a eles. **Em outras palavras, as variáveis não são amarradas a nenhum tipo, mas sempre contêm valores que pertencem a algum dos tipos disponíveis.**

### **Os Tipos**

Cinco dos seis tipos em JavaScript têm valores primitivos: `Undefined`, `Null`, `Boolean`, `String` e `Number`. Valores primitivos como _undefined_, _null_, _true_, _"texto"_ e _10_ são imutáveis. `Undefined` e `Null` são tipos especiais que possuem um só valor cada, respectivamente _undefined_ e _null._

O sexto tipo é `Object`, que inclui `arrays`, `funções` e outros. Objetos são conjuntos de propriedades, que podem guardar valores de qualquer um dos tipos já citados. Propriedades podem ser acrescentadas a um objeto ou removidas dele a qualquer momento, e valores de propriedades também podem ser alterados. Portanto, objetos são mutáveis.

### **Valor *versus* referência**

Pode-se considerar que os tipos primitivos do JavaScript funcionam como os _value types_, enquanto que os objetos funcionam como os _reference types_.

Exemplo:

```jsx
var meuObjeto = {};
```

O que é guardado nessa variável é um valor do tipo `Object`. O objeto em si (com suas propriedades, métodos, etc.) fica guardado em algum lugar da memória, gerenciado pelo interpretador da linguagem. E o valor do tipo Object é uma referência a esse objeto.

Dizer que objetos são referências quer dizer apenas que com a referência em mãos você pode acessar o objeto, **e não que a referência seja um ponteiro para o local onde o objeto está armazenado na memória**. Essa distinção é muito importante. Pense na referência como um valor como qualquer outro.

```jsx
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

```jsx
function teste(obj){
	obj.novaProp = "foo";'    // O objeto fora da função é afetado
	obj = {outraProp: "bar"}; // O objeto fora da função não é afetado
}

var o = {};
teste(o);
o.novaProp;  // "foo"
o.outraProp; // undefined
```

Isso quer dizer que em JavaScript **não existe passagem "por referência"**. O objeto é passado por valor, só que o valor passado em `teste(o)` é uma referência.

---

Ao programar em JavaScript, tenha em mente que o acesso à memória fica a cargo do interpretador da linguagem. Não se manipula a memória diretamente em JavaScript. A especificação da linguagem sequer menciona como a memória deve ser tratada, isso fica integralmente a cargo da implementação. Por isso não é possível dizer onde cada dado fica armazenado sem conhecer bem como cada interpretador funciona.

**Uso de memória pelo JavaScript:**

- Existe um [garbage collector](https://www.notion.so/garbage-collector-376c62e3e7634dd1859610264cd179e9)  nos *engines* de JavaScript
- Esse *garbage collector* é executado em momentos arbitrários (geralmente quando o interpretador não está ocupado com o seu código)
- O *garbage collector* só liberar a memória ocupada por um objeto se não houver nenhuma referência "viva" a esse objeto.
- Cuidado com objetos capturados em *closures*, eles podem acabar ocupando memória eternamente!

## coerção de tipos e objects lifecycle

### wtf Javascript

[wtfjs - a little code blog about that language we love despite giving us so much to hate](https://wtfjs.com/)

```jsx
9999999999999999; // 10000000000000000

true + 2; // 3

"21" + true; // '21true'

"21" - true; // 20

"21" - -1; // 22

0.1 + 0.2 === 0.3; // false

3 > 2 > 1; // false

3 > 2 >= 1; // true

"B" + "a" + +"a" + "a"; // BaNaNa
```

### coerção de tipos (type coercion)

É o processo de conversão de um valor de um tipo, para outro ( como a conversão de uma string para um número, um objeto para um booleano e etc.) Qualquer tipo, seja primitivo ou um objeto, é um sujeito válido para coerção de tipo.

![Como o operador de `==` se comporta para diferentes tipos.](https://i.stack.imgur.com/35MpY.png)

Como o operador de `==` se comporta para diferentes tipos.

---

- **Coerção Implícita vs Explícita**
  Quando se deseja converter um tipo escrevendo algo como, `Number(valor)`, é chamado de **coerção de tipos explícita ( explicit type coercion ou type casting).**
  Javascript é uma linguagem fracamente tipada (weakly-typed-language), valores também podem ser convertidos entre diferentes tipos automaticamente, e isso é chamado de **coerção de tipos implícita (implicit type coercion).** Isso acontece quando se atribui operados para valores de diferentes tipos, como `1 == null`, `2/'5'`, `null + new Date()`, ou isso pode decorrer de contexto, como usar `if (value) {...}` onde `value` é forçado a retornar um booleano.
  Operadores lógicos como `||` e `&&`  fazem conversões booleanas internamente, mas [na verdade retornam o valor dos operandos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical_operators) originais, mesmo que eles não sejam booleanos.
  - O operador de comparação `||` (ou) sempre retorna o primeiro argumento se os dois forem `true`.
  - O operado `&&` retorna o ultimo argumento se os dois forem `true`.
  ```jsx
  const r = "hello" || 1; // hello
  const s = "hello" && 1; // 1
  ```
  Um operador que não desencadeia a coerção de tipos implícita é `===`, que é chamado de operador restrito de igualdade (**strict equality operator**). O operador de igualdade `==` (**lose equality operator**) por outro lado, faz a comparação e ativa a coerção de tipos, se necessário.
- **Tipos de conversão**
  **Existem apenas 3 tipos de conversão no Javascript:**
  - para string;
  - para boolean;
  - para number;
  A segunda, é que a **lógica para conversão de tipos primitivos e objetos funcionam de forma diferente**, mas ambos só podem ser convertido nessas 3 maneiras.
  ***
  - **Conversão de String**
    Para indicar a conversão explícita de valores para string use a função `String()`. A coerção implícita é ativada pelo operador binário `+`, quando qualquer operando é uma string:
    ```jsx
    String(123); // explícito
    123 + ""; // implícito
    ```
    Todos os valores primitivos são convertidos em string naturalmente:
    ```jsx
    String(123); // '123'
    String(-12.3); // '-12.3'
    String(null); // 'null'
    String(undefined); // 'undefined'
    String(true); // 'true'
    String(false); // 'false'
    ```
    A conversão de `Symbol` é um pouco complicada, porque só pode ser convertida explicitamente, mas não implicitamente.
    ```jsx
    String(Symbol("my symbol")); // 'Symbol(my symbol)'
    "" + Symbol("my symbol"); // TypeError é lançado
    ```
  - **Conversão de Boolean**
    Para indicar a conversão explícita de valores para boolean use a função `Boolean()`. A conversão implícita ocorre no contexto lógico ou é ativada por operadores lógicos (`||` ,`&&` ,`!`) .
    ```jsx
    Boolean(2)          // explícito
    if (2) { ... }      // implícito devido ao contexto lógico
    !!2                 // implícito devido ao operador lógico
    2 || 'hello'        // implícito devido ao operador lógico
    ```
    Assim que houver apenas dois resultados possíveis da conversão booleana: `true`ou `false`, é mais fácil lembrar a lista de valores falsos (false values).
    ```jsx
    Boolean(""); // false
    Boolean(0); // false
    Boolean(-0); // false
    Boolean(NaN); // false
    Boolean(null); // false
    Boolean(undefined); // false
    Boolean(false); // false
    ```
    Qualquer valor não inserido nessa lista ao ser convertido será `true`, incluindo objetos, funções, `Array`, `Date`, tipos definidos pelo usuário e assim por diante. Symbols são considerados como valores verdadeiros (truthy values). Objetos vazios e arrays também:
    ```jsx
    Boolean({}); // true
    Boolean([]); // true
    Boolean(Symbol()); // true
    !!Symbol(); // true
    Boolean(function () {}); // true
    ```
  - **Conversão Numérica**
    Para uma conversão explícita aplique a função `Number()`, assim como feito com `Boolean()` e `String()`.
    A conversão implícita é complicada, pois é acionada em mais casos:
    - operadores de comparação (comparison operators)(`>`, `<`, `<=`,`>=`)
    - operadores bitwise ( `|` `&` `^` `~`)
    - operadores aritméticos (`-` `+` `*` `/` `%` ). Saiba que usar `+` não irá ativar a conversão numérica quando qualquer operando for uma string.
    - operador unário`+`
    - operador de igualdade `==` (incl. `!=`).Perceba que `==` não ativa a conversão numérica quando ambos operandos são strings.
    ```jsx
    Number("123") + // explícito
      "123"; // implícito
    123 != "456"; // implícito
    4 > "5"; // implícito
    5 / null; // implícito
    true | 0; // implícito
    ```
    Como valores primitivos são convertido para números:
    ```jsx
    Number(null); // 0
    Number(undefined); // NaN
    Number(true); // 1
    Number(false); // 0
    Number(" 12 "); // 12
    Number("-12.34"); // -12.34
    Number("\n"); // 0
    Number(" 12s "); // NaN
    Number(123); // 123
    ```
    Ao converter uma string em número, a engine primeiro remove os espaços em branco com os caracteres `\n` e `\t`, retornando `NaN` se a string tratada não representar um número válido. Se a string estiver vazia, retornará `0`.
    `null` e `undefined` são tratados de forma diferentes: `null` vira 0, enquanto `undefined` se torna `NaN`.
    Symbols não podem ser convertidos em números nem explicitamente nem implicitamente. Além disso, `TypeError` é lançado ao invés de silenciosamente converter para `NaN`, como acontece para `undefined`.
    ```jsx
    Number(Symbol("my symbol")) + // TypeError é lançado
      Symbol("123"); // TypeError é lançado
    ```
  ***
  **Existem duas regras especiais pra relembrar:**
  1. Quando aplicamos `==` para `null` ou `undefined`, a conversão numérico não ocorre. `null` é apenas igual a `null` ou `undefined`, e não é igual a mais nada.

     ```jsx
     null == 0; // false, null is not converted to 0
     null == null; // true
     undefined == undefined; // true
     null == undefined; // true
     ```

  2. `NaN`não é igual a nada, nem a ele mesmo:

     ```jsx
     if (value !== value) {
       console.log("we're dealing with NaN here");
     }
     ```
  ***
- **Coerção de tipos para objetos**
  Quando isso ocorre com objetos, e a engine encontra expressões como `[1] + [2,3]`, primeiramente será preciso converter o objeto para um valor primitivo, que é então convertido pro tipo final. E ainda assim existem apenas três tipos de conversão: `numérico`, `string` e `booleano`.
  O caso mais simples é a conversão para booleano: qualquer valor não primitivo sempre será convertido para `true`, não importa se um objeto ou array está vazio ou não.
  Objetos são convertidos para primitivos através da função `[[ToPrimitive]]`, que é responsável pela conversão numérica e string.
  Pseudo implementação do método `[[ToPrimitive]]`:
  ```jsx
  function ToPrimitive(input, preferredType) {
    switch (preferredType) {
      case Number:
        return toNumber(input);
        break;
      case String:
        return toString(input);
        break;
      default:
        return toNumber(input);
    }

    function isPrimitive(value) {
      return value !== Object(value);
    }

    function toString() {
      if (isPrimitive(input.toString())) return input.toString();
      if (isPrimitive(input.valueOf())) return input.valueOf();
      throw new TypeError();
    }

    function toNumber() {
      if (isPrimitive(input.valueOf())) return input.valueOf();
      if (isPrimitive(input.toString())) return input.toString();
      throw new TypeError();
    }
  }
  ```
