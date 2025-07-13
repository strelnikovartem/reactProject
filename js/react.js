'use strict';

const customer = {
  firstName: 'Jacob',
  lastName: 'Mercer',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() — це виклик методу getFullName в глобальному контексті
  const username = callback();
  console.log(`Processing an application from ${username}`);
}

makeMessage(customer.getFullName); // TypeError: Cannot read properties of undefined (reading 'firstName')
