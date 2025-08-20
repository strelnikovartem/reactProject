const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

textarea.addEventListener('input', handleInput);

populateTextArea();

function handleInput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextArea() {
  const message = localStorage.getItem(STORAGE_KEY);
  if (message) {
    textarea.value = message;
  }
  console.log(message);
}
