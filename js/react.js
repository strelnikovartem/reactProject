class Car {
  constructor(obj) {
    this.brend = obj.brend;
    this.model = obj.model;
    this.price = obj.price;
  }
  getModel() {
    return this.brend;
  }
}

const bmw = new Car({ brend: 'bmw', model: 'x5', price: '50' });
const audi = new Car({ brend: 'audi', model: 'q7', price: '100' });
const lada = new Car({ brend: 'lada', model: 'pri', price: '10' });

console.log(bmw);
console.log(audi);
console.log(lada);
