let number = [1, 3, 4, 6, 23, 34, 40, 11, 32, 35, 17]

function filter_even(n) {
  return n % 2 === 0;
}

function filter_odd(n){
  return n % 2 !== 0;
}

let response = number.filter(filter_even);
console.log(response)

response = number.filter(filter_odd);
console.log(response); 
