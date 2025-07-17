class User {
  name;
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  // Публічний метод для отримання електронної пошти
  getEmail() {
    return this.#email;
  }

  // Публічний метод для зміни електронної пошти
  changeEmail(newEmail) {
    if (this.#validateEmail(newEmail)) {
      this.#email = newEmail;
    } else {
      console.log('Invalid email format');
    }
  }

  // Приватний метод для валідації електронної пошти
  #validateEmail(email) {
    return email.includes('@');
  }
}

const mango = new User({
  name: 'Mango',
  email: 'mango@mail.com',
});

// Спробуємо змінити електронну пошту
mango.changeEmail('newmail.com'); // "Invalid email format"
mango.changeEmail('new@mail.com');
console.log(mango.getEmail()); // "new@mail.com"

// Прямий виклик приватного методу ззовні призведе до помилки
// mango.#validateEmail('test'); // Помилка
