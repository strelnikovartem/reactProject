const colorPalette = document.querySelector('.color-palette');

colorPalette.addEventListener('click', selectColor);

function selectColor(event) {
  console.log(event.target);
  const selectedColor = event.target.dataset.color;
}
