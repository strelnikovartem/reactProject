const settings = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem('settings', JSON.stringify(settings));

const savedTheme = localStorage.getItem('ui-theme');
console.log(savedTheme); // "light"

const savedSet = localStorage.getItem('settings');
console.log(JSON.parse(savedSet));
