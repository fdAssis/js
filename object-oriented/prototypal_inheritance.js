function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const p1 = new Person("Sutherland");
console.group("Person");
console.log(p1);
console.groupEnd("Person");
