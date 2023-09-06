# Coerção de tipos e objects lifecycle

## Coerção de tipos (type coercion)

É o processo de conversão de um valor de um tipo, para outro ( como a conversão de uma string para um número, um objeto para um booleano e etc.) Qualquer tipo, seja primitivo ou um objeto, é um sujeito válido para coerção de tipo.

![Como o operador de `==` se comporta para diferentes tipos.](https://i.stack.imgur.com/35MpY.png)

Como o operador de `==` se comporta para diferentes tipos.

## Coerção Implícita vs Explícita

Quando se deseja converter um tipo escrevendo algo como, `Number(valor)`, é chamado de **coerção de tipos explícita ( explicit type coercion ou type casting).**
Javascript é uma linguagem fracamente tipada (weakly-typed-language), valores também podem ser convertidos entre diferentes tipos automaticamente, e isso é chamado de **coerção de tipos implícita (implicit type coercion).** Isso acontece quando se atribui operados para valores de diferentes tipos, como `1 == null`, `2/'5'`, `null + new Date()`, ou isso pode decorrer de contexto, como usar `if (value) {...}` onde `value` é forçado a retornar um booleano.
Operadores lógicos como `||` e `&&`  fazem conversões booleanas internamente, mas [na verdade retornam o valor dos operandos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical_operators) originais, mesmo que eles não sejam booleanos.

- O operador de comparação `||` (ou) sempre retorna o primeiro argumento se os dois forem `true`.
- O operado `&&` retorna o ultimo argumento se os dois forem `true`.

```jsx
const r = "hello" || 1; // hello
const s = "hello" && 1; // 1
```

Um operador que não desencadeia a coerção de tipos implícita é `===`, que é chamado de operador restrito de igualdade (**strict equality operator**). O operador de igualdade `==` (**loose equality operator**) por outro lado, faz a comparação e ativa a coerção de tipos, se necessário.

- **Tipos de conversão**
  **Existem apenas 3 tipos de conversão no Javascript:**

- para string;
- para boolean;
- para number;
  A segunda, é que a **lógica para conversão de tipos primitivos e objetos funcionam de forma diferente**, mas ambos só podem ser convertido nessas 3 maneiras.

### Conversão de String

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

### Conversão de Boolean

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

### Conversão Numérica

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

</details>

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

### Coerção de tipos para objetos

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
