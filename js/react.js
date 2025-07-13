('use strict');

const library = {
  books: 1923,
  logBookCount() {
    console.log(this.books);
  },
};

function showBooks(callback) {
  callback();
}

showBooks(library.logBookCount.bind(library));
