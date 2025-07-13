'use strict';

function showThis() {
  console.log('this in showThis: ', this);
}

// Викликаємо у глобальному контексті
showThis(); // "this in showThis: undefined"
