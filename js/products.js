const products = [
  {
    id: 1,
    img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
    name: 'Monitor',
    price: 3000,
    description: '23-inch monitor with Full HD resolution.',
  },
  {
    id: 2,
    img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
    name: 'Smartphone',
    price: 8000,
    description: 'Equipped with a triple camera and a multi-core processor.',
  },
  {
    id: 3,
    img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
    name: 'Tablet',
    price: 12000,
    description: '10-inch tablet with high performance and a Retina display.',
  },
];

const container = document.querySelector('.products');

container.insertAdjacentHTML('beforeend', createMarkup(products));
container.addEventListener('click', hendleClick);

function createMarkup(arr) {
  return arr
    .map(
      item => `
  <li class="item produkt-item" data-id="${item.id}">
    <img src="${item.img}" alt="${item.name}" width="300"/>
    <h2 >${item.name}</h2>
    <p>${item.price}</p>
  </li>`
    )
    .join('');
}

function hendleClick(evt) {
  if (evt.currentTarget === evt.target) {
    return;
  }
  const currentProduct = evt.target.closest('.produkt-item');
  const id = currentProduct.dataset.id;
  const product = products.find(item => item.id === Number(id));

  const instance = basicLightbox.create(`
	<div class="modal">
    <img src="${product.img}" alt="${product.name}"/>
    <h2>${product.name}</h2>
    <h3>${product.price}</h3>
    <p>${product.description}</p>
    </div>
`);

  instance.className;
  instance.show();
}

const user = {
  name: 'Jacob',
  age: 32,
  status: false,
};

const { name, age, status } = user;
console.log(name); // Jacob
console.log(age); // 32
console.log(status); // 32
