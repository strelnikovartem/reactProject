class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
});

console.log(mango.getEmail()); // "mango@mail.com"

mango.changeEmail('new@mail.com');

console.log(mango.getEmail()); // "new@mail.com"

const poly = new User({
  name: 'Mao',
  email: 'mano@mail.com',
});

poly.changeEmail('ggg');

console.log(poly);
console.log(poly.getEmail());
