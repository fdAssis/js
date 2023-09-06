//Funcoes podem ser usadas como qualquer tipo de dado

/** 
function sum(num1, num2) {
  return num1 + num2;
}

//console.log(sum(10, 29));


// #1
const exe = sum;
//console.log(exe(6, 8));

//#2
function test(num1, num2, func) {
  return func(num1, num2);
}

//console.log(test(10, 30, sum))

// #3
function test_2(func) {
  return func;
}

const res_test = test_2(sum);
//console.log(res_test(13, 30));
*/

// Atribuindo função a uma variável
const sayHello = function(){
  console.log('Hello!!')
}
// Chamar a função usando a variável
sayHello()

const sayHelloTwo = () => {
  console.log('Hello too!')
}
sayHelloTwo()

const sayHelloThree = () => console.log('Hello all!!')
sayHelloThree()

// Passar uma função como argumento
function sayHelloFour() {
  return 'Hello, '
}

function gettingName(func, name){
  console.log(func() + name)
}

gettingName(sayHelloFour, 'I\'m a function');

// Retornar uma função
function sumMult(a,b){
  c = a + b
  return function(c){
    console.log('here!')
  }
}

sumMult(2, 4)