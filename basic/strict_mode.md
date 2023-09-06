# strict mode

Javascript é uma linguagem dinâmica e que não foi planejada pras dimensões em que é usada hoje em dia. Então ela tem alguns _probleminhas_. Por exemplo a declaração de variáveis, se você utilizar uma variável sem `var` antes, ela se tornará uma variável global, então pode estar sobrescrevendo um valor que pode estar sendo usado por alguma outra função em algum outro lugar. Esse tipo de coisa causa erros que são muito difíceis de encontrar.

Esse tipo de comportamento é "natural" da linguagem e quebraria um monte de bibliotecas existentes caso fosse tirado da linguagem agora.

O "**use strict**" serve pra tentar amenizar esses problemas, navegadores que reconhecem essa diretiva vão emitir erros quando encontram código que é javascript válido mas que é potencialmente problemático, como o caso de usar variáveis sem declarar com var. Navegadores antigos que não reconhecem simplesmente ignoram a diretiva.

E como o "use strict" pode ser usado em blocos de código, você pode utilizar dentro das suas novas funções sem precisar refatorar todas suas bibliotecas antigas.

Existem duas maneiras de se utilizar o `"use strict"`:

- No topo do arquivo, a diretiva aplica o modo estrito para o arquivo todo.
- Como a primeira linha de código de uma função, a diretiva aplica o modo estrito somente dentro da função (incluindo outras funções eventualmente declaradas dentro dela).

O grande benefício de se o usar _strict mode_ é reduzir a chance de existirem no código bugs difíceis de localizar (como um conflito de nome ao se criar uma global implícita, ou a existência de duas chaves iguais em objeto literal).

Restrições existentes no strict mode

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
