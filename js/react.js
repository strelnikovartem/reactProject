const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = 'Mango';

console.log(dog); // { name: "Mango", [[Prototype]]: animal }
