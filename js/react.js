const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

textarea.addEventListener('input', handleInput);

function handleInput(event) {
  const message = event.target;
  console.log(message);
}
