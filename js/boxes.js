const container = document.querySelector('.container');

container.addEventListener('click', henleClick);

function henleClick(evt) {
  if (!evt.target.classList.contains('box')) {
    return;
  }
}
