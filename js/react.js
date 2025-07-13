'use strict';

function showThis() {
  console.log('this in showThis: ', this);
}

const user = {
  username: 'Poly',
};

user.showContext = showThis;

// Викликаємо в контексті об'єкта
user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// Викликаємо в глобальному контексті
showThis(); // "this in showThis: undefined"

console.log(user);
