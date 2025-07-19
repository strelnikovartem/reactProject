class Car {
  static maxPrice = 50000;
  #price;

  constructor(params) {
    this.#price = params.price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= this.maxPrice) {
      return (this.#price = newPrice);
    }
  }
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

class User {
  static roles = {
    admin: 'admin',
    editor: 'editor',
    basic: 'basic',
  };

  #email;
  #role;

  constructor(params) {
    this.#email = params.email;
    this.#role = params.role || User.roles.basic;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User({
  email: 'mango@mail.com',
  role: User.roles.admin,
});

console.log(mango.role); // "admin"
mango.role = User.roles.editor;
console.log(mango.role); // "editor"
