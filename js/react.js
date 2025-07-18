class User {
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
}
