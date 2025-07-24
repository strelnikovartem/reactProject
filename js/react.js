const link = document.querySelector('.link');
console.log(link.classList);
// ["link", "is-active", length: 2, value: "link is-active"]

// const hasActiveClass = link.classList.contains('is-active'); // true
const hasActiveClass = link.classList.contains('title'); // false

console.log(hasActiveClass);
