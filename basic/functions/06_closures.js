/**
 * Se uma variável não pôde ser encontrada no escopo imediato, 
 *  a engine irá procurar por ela no escopo externo mais próximo. 
 *  Essa busca irá continuar até que o escopo global seja alcançado. 
 *  Se a variável não estiver no escopo global, um erro será emitido.
 */

let value = 0;

function simple_sum(){
  return value += 1;
}

function other(){
  let value = 0;
  simple_sum();
  return value += 1;
}

console.log(`No closures 1: ${other()}`);
console.log(`No closures 2: ${other()}`);
console.log(`No closures 3: ${other()}`);

console.log("\n***********************\n")
/**
 * Closures -> Escopo que é criado quando uma função é declarada
 *  dado que esse escopo permite a função acessar e manipular dados 
 *  declarados externos a função. 
 * 
 * Closure é a forma de fazer com que as variáveis dentro de uma função 
 *  sejam privadas e persistentes.
 */

 let variable = 0
function myExternalFunction(){
  let variable = 0;

  function internal(){
    return variable += 1;
  }

  return internal;
}

let exe = myExternalFunction();
console.log(`With closures 1: ${exe()}`);
console.log(`With closures 2: ${exe()}`);
console.log(`With closures 3: ${exe()}`);
