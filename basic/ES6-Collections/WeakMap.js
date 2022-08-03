const weMap = new WeakMap();

const obj1 = {};
const fun1 = function () {};
const weMapKey = new WeakMap();

weMap.set(obj1, "Objeto 1");
weMap.set(fun1, 1033);
weMap.set(weMapKey, weMap);

console.log(weMap.get(fun1));
console.log(weMap.get(weMapKey).get(obj1));

console.log(weMap.has(fun1));
weMap.delete(fun1);
console.log(weMap.has(fun1));
