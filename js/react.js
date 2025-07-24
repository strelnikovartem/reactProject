const heading = document.createElement('h1');
heading.classList.add('title');
heading.textContent = 'This is a heading';
console.log(heading); // <h1 class="title">This is a heading</h1>

const image = document.createElement('img');
image.src = 'https://picsum.photos/id/11/320/240';
image.alt = 'Nature';
console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />
