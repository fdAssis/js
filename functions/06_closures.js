/**
 * Closures -> Escopo que é criado quando uma função é declarada
 * dado que esse escopo permite a função acessar e manipular dados 
 * declarados externos a função. 
 */

let value = 'global';

function myPrint(){
  console.log(value);
}

function other(){
  let value = 'local';
  myPrint();
  console.log(value);
}

other();

/** ******************* */

let variable = 'global'

function myExternalFunction(){
  let variable = 'local';

  function internal(){
    return variable;
  }

  return internal;
}

let exe = myExternalFunction();
console.log(exe());
