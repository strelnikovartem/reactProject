const instruments = [
  {
    id: 1,
    img: 'https://static.dnipro-m.ua/cache/products/7056/catalog_origin_218728.jpg',
    name: 'Шуруповерт',
    price: 150,
    description:
      'Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями.',
  },
  {
    id: 4,
    img: 'https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg',
    name: 'Пила',
    price: 11049,
    description:
      'Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі.',
  },
  {
    id: 5,
    img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_323420.jpg',
    name: 'Рівень',
    price: 897,
    description:
      'Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації.',
  },
  {
    id: 8,
    img: 'https://static.dnipro-m.ua/cache/products/4980/catalog_origin_183761.jpg',
    name: 'Генератор',
    price: 10890,
    description:
      'Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос.',
  },
];

const LS_KEY = 'basket';

const container = document.querySelector('.js-list');

container.insertAdjacentHTML('beforeend', createMarkup(instruments));

container.addEventListener('click', hendleClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ id, img, name, price, description }) => `
    <li class="product-card js-product" data-id='${id}'>
    <img src="${img}" alt="${name} class="product-img"/>
    <h2 class="product-title">${name}</h2>
    <p class="product-description">${description}</p>
    <p class="product-price">${price}</p>
    <button class="product-add-btn js-btn">Add to basket</button>
    </li>
  `
    )
    .join('');
}

function hendleClick(event) {
  if (!event.target.classList.contains('js-btn')) {
    return;
  }

  const parent = event.target.closest('.js-product');

  console.log(parent);
}
