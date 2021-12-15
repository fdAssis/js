let array_numbers = [10, 30, 40, 15]

let res = 0;

function sum(a, b) {
  return a + b;
}

res = array_numbers.reduce(sum);
/**
 * [10, 30, 40, 15]
 * 1 => 10 + 30 = 40
 * 2 => 40 + 40 = 80
 * 3 => 80 + 15 = 95
 */

// console.log(res)

res = array_numbers.filter(value => value > 15)
            .map(value => value * 0.5)
            .reduce((a, b) => a + b)

// console.log(res);

const transactions = [
  {"id":"01", "type":"deposit", "amount": 100},
  {"id":"02", "type":"withdraw", "amount": 200},
  {"id":"03", "type":"withdraw", "amount": 50},
  {"id":"04", "type":"deposit", "amount": 200}
]

const summary = transactions.reduce((acc, transaction) => {
  if(transaction.type === 'deposit'){
    acc.deposit += transaction.amount
    acc.total += transaction.amount
  } else {
    acc.withdraw += transaction.amount
    acc.total -= transaction.amount
  }
  return acc;
}, {
  deposit: 0,
  withdraw: 0,
  total: 0
})

console.log(summary)