const form = document.querySelector('.feedback-form');
const localStorageKey = 'goit-example-message';

form.addEventListener('input', evt => {
  console.log(evt.target);
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  form.reset();
});
