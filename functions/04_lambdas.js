let numbers = [1, 4, 2, 7, 8, 10, 43, 2];

let result = numbers.map(function(value){
  return value * 2;
})

let result_2 = numbers.map(value => value * 2);

console.log(result);
console.log(result_2);
