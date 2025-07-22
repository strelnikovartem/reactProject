class Car {
  #price;
  constructor(obj) {
    this.brend = obj.brend;
    this.model = obj.model;
    this.#price = obj.price;
  }
  getModel() {
    return this.brend;
  }
  changeModel(newBrend) {
    this.brend = newBrend;
  }

  get price() {
    return this.#price;
  }

  set price(poop) {
    if (poop !== 'number') {
      console.log('ggg');
      return;
    }
    this.#price = poop;
  }
}

const bmw = new Car({ brend: 'bmw', model: 'x5', price: '500' });
const audi = new Car({ brend: 'audi', model: 'q7', price: '100' });
const lada = new Car({ brend: 'lada', model: 'pri', price: '10' });

bmw.price = 900;

bmw.changeModel('BmW');

// console.log(bmw.getModel());
// console.log(audi.getModel());
// console.log(lada);
console.log(bmw.price);
