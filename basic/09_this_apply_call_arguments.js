const article = {
  title: "call, apply, bind",
  language: "JavaScript",
  year: 2020,
};

function print() {
  console.log(`${this.title} em ${this.language}. - ${this.year}`);
}

print(); // undefined em undefined.
print.call(article);

// #################################################################

function sumNumbers(firstNumber, secondNumber) {
  const sum = this + firstNumber + secondNumber;

  console.log(sum);
}

// sumNumbers.apply(article.year, [2, 7]); // 14
sumNumbers.apply(5, [2, 7]); // 14

("use strict");

const {
  watch,
  promises: { readFile },
} = require("fs");

class File {
  watch(event, filename) {
    //console.log("arguments", arguments);
    console.log("arguments []", Array.prototype.slice.call(arguments));
    this.showContent(filename);
  }

  async showContent(filename) {
    console.log((await readFile(filename)).toString());
  }
}

const file = new File();
/**
 * Dessa forma, ele ignora o 'this' da classe File e
 * herda o this do watch!
 */
// watch(__filename, file.watch);

// Alternativa para não herdar o this da funcao
// watch(__filename, (event, filename) => file.watch(event, filename));

// Podemos deixar explicito qual é o contexto que a função deve seguir
// bind retorna uma função com o 'this' que se mantém de file, ignorando o wath
// watch(__filename, file.watch.bind(file));

// A diferença entre 'call' e 'apply' é que call passa os argumentos como array e apply uma lista de argumentos
file.watch.call({ showContent: () => console.log("call") }, null, __filename);
file.watch.apply({ showContent: () => console.log("apply") }, [
  null,
  __filename,
]);
