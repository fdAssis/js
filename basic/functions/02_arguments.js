function add() {
  let sum = 0;
  for (let i in arguments){
    sum += arguments[i];
  } 
  return sum;
}

/*
console.log(add());
console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4));
console.log(add(1, 2, 3, 4, 5));
*/

//Valores padrao
function add_2(num1 = 2, num2 = 3) {
  return num1 + num2;
}

//console.log(add_2(1, 2));
//console.log(add_2(9));
//console.log(add_2());
//console.log(add_2("a", "c"))
//console.log(add_2(true, false))

function add_3(num1 = 3, num2 = 3) {
  if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2)){
    return num1 + num2;
  } else{
    return "Nao foi possivel efetuar a soma."
  }
}

console.log(add_3(1, 2));
console.log(add_3(9));
console.log(add_3());
console.log(add_3("a", "c"))
console.log(add_3(true, false))
