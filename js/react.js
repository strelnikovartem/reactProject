const btn = document.querySelector('.js-button');
const box = document.querySelector('.js-box');

btn.addEventListener('click', hendelClick);

let step = 0;

function hendelClick() {
  step += 50;
  console.log(step);
  // box.style.marginTop = '100px';
}
