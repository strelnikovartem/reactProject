const json = '{"name":"Mango","age":3,"isGoodBoy":true}';

console.log(json);

const dog = JSON.parse(json);
console.log(dog); // {name: "Mango", age: 3, isGoodBoy: true}
console.log(dog.name); // "Mango"
