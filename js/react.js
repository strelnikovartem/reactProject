const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const descendant = document.querySelector('#descendant');

parent.addEventListener('click', () => {
  alert(
    'Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
  );
});

child.addEventListener('click', evt => {
  evt.stopPropagation();
  alert(
    'Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
  );
});

descendant.addEventListener('click', event => {
  // event.stopPropagation();
  alert('Descendant click handler');
});
