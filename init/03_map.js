let number = [2, 4, 6, 8, 10];

var mult_2 = number.map(function(value) {
  return value * 2;
})
console.log(mult_2)

var mutl_3 = number.map(value => {
  return value * 3;
})

console.log(mutl_3)

var mutl_4 = number.map(value => (value * 4))
console.log(mutl_4)

function func_1(value){
  return value + 5;
}

function func_2(value){
  return value * 5;
}

function func_3(value){
  return value / 5;
}

var result = number.map(func_1).map(func_2).map(func_3);
console.log(result);