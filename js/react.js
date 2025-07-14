const animal = { legs: 4 };
const dog = Object.create(animal);
dog.name = 'Mango';

console.log(Object.keys(dog)); // ["name"]
console.log(Object.values(dog)); // ["Mango"]

for (const key of Object.keys(dog)) {
  console.log(key); // "name"
}
