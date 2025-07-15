class User {
  constructor(name, email) {
    console.log(name, email);
  }
}

const mango = new User('Mango', 'mango@mail.com'); // "Mango mango@mail.com"
// console.log(mango); // {}

const poly = new User('poly', 'fojkk');
console.log(poly);
