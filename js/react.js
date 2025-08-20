const LS_KEY = 'array of names';
const names = ['Ruslan', 'Lena', 'Artem'];

localStorage.setItem(LS_KEY, JSON.stringify(names));

const value = localStorage.getItem(LS_KEY);

console.log(JSON.parse(value));
