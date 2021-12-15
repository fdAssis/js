let number = [10, 30, 40, 15]

let res = 0;

function sum(a, b) {
  return a + b;
}

res = number.reduce(sum);
/**
 * [10, 30, 40, 15]
 * 1 => 10 + 30 = 40
 * 2 => 40 + 40 = 80
 * 3 => 80 + 15 = 95
 */

console.log(res)

res = number.filter(value => value > 15)
            .map(value => value * 0.5)
            .reduce((a, b) => a + b)

console.log(res);
