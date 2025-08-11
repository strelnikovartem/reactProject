const form = document.querySelector('.feedback-form');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  form.reset();
});
