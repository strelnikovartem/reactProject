class Car {
  constructor(brend) {
    this.brend = brend;
  }
  getModel() {
    return this.brend;
  }
}

const bmw = new Car('bmw');
const audi = new Car('audi');
const lada = new Car('lada');

console.log(bmw);
console.log(audi);
console.log(lada);
