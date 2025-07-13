const hotel = {
  username: 'Resort hotel',
  showThis() {
    const foo = () => {
      console.log('this in foo: ', this);
    };

    foo();
    console.log('this in showThis: ', this);
  },
};

hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}
