const container = document.querySelector('.container');

[...container.children].forEach(box => {
  box.addEventListener('click', henleClick);
});

function henleClick(evt) {
  const color = evt.target.dataset.color;
  console.log(color);
}
