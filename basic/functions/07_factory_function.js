/**  Fabrica de objetos */

function personFactory(name, age = null) {
  return {
    name: name,
    type: 'person',
    birthday: age != null ? age + 1 : age
  }
}

const tulio = personFactory('Tulio', 10)
const joao = personFactory('João')

console.log(tulio)
console.log(joao)