// Criando uma funcao construtora

function Person(n, g, race = 'human') {
  // atributos privados acesso permitido somente dentro da funcao
  let height = 0;
  let weight = 0;
  let age = 0;
  let name = n;
  let gender = g;

  //atributo publico acesso permitido fora da funcao
  this.race = race;

  // metodo privado uso permitido somente dentro da funcao
  let print = () => {
    console.log(
      `Nome: ${name}, 
       Idade: ${age}, 
       Peso: ${weight}, 
       Sexo: ${gender}, 
       Altura: ${height}, 
       Raca: ${race}`
    );
  };

  this.birday = () => {
    age += 1;
    print();
  };

  this.getAge = () => {
    return age;
  };
}

const agelina = new Person('Agelina', 'Femenino');
agelina.birday();

console.log(typeof Person);
console.log(typeof agelina);
