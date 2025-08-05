const colorPalette = document.querySelector('.color-palette');

colorPalette.addEventListener('click', selectColor);

function selectColor(event) {
  console.log(event.target);
  const selectedColor = event.target.dataset.color;
}

function selectColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return; // користувач клікнув між кнопками
  }

  const selectedColor = event.target.dataset.color; // користувач клікнув на кнопку і ми маємо доступ до її атрибутів
}
