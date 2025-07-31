const cars = [
  {
    id: 1,
    car: 'Audi',
    type: 'A6',
    price: 30000,
    img: 'https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg',
  },
  {
    id: 2,
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://www.honda.cz/content/dam/central/cars/civic-hybrid/overview-v3/Honda-civic-hybrid-16-16x9.png/_jcr_content/renditions/c3.png',
  },
  {
    id: 3,
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    id: 4,
    car: 'BMW',
    type: '5 siries',
    price: 9000,
    img: 'https://www.cartecgroup.com/app/uploads/2024/03/16790522869233810-2-.png',
  },
  {
    id: 5,
    car: 'Honda',
    type: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    id: 6,
    car: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://www.autokomplex-olomouc.cz/assets/market/img/hero/volvo_xc60_hybrid_2025_hero_processed_2048.jpg?w=1600'
];

const form = document.querySelector('.js-form');
const container = document.querySelector('.js-list');

function createMarcup(arr) {
  return arr.map(car => `
  <li class="car-card"></li>
  `)
}