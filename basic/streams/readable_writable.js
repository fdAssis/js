import { Readable, Writable } from "stream";

// Fonte de dados
const readable = Readable({
  read() {
    this.push("Hello");
    this.push("Word");
    this.push("!");

    // Informa que os dados acabaram
    this.push(null);
  },
});

// Saida de dados
const writable = Writable({
  write(chuck, encoding, callback) {
    console.log(chuck.toString());
    callback();
  },
});

readable
  // writable é sempre a saída -> imprimir, salvar, ignora
  .pipe(writable);
