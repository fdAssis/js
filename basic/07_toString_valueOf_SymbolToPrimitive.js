const user = {
  name: "Francisco de Assis",
  id: 1,

  // string: 1ª se não for primitivo, chama valueOf
  toString() {
    return `Name: ${this.name}, Id: ${this.id}`;
  },

  // number: 1 se não for primitivo, chama o toString
  valueOf() {
    return { hey: "dude" };
    // return 0;
  },

  // tem maior prioridade
  [Symbol.toPrimitive](coercionType) {
    console.log("trying to convert to", coercionType);
    const type = {
      string: JSON.stringify(this),
      number: "01",
    };

    return type[coercionType] || type.string;
  },
};

//console.log("toString: ", String(user));

// Vai retornar NaN pois o toString retornou a String
//console.log("valueOf: ", Number(user));

// depois de adicionar o toPrimitive
console.log("String: ", String(user));
console.log("Number: ", Number(user));

// chama a conversão default!
console.log("Date: ", new Date(user));
