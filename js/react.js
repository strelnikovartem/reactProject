const LS_KEY = 'array of names';
const names = ['Ruslan', 'Lena', 'Artem'];

localStorage.setItem(LS_KEY, names);

const value = localStorage.getItem(LS_KEY);

console.log(value);
