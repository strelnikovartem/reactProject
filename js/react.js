const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (base, overtime, rate) => {
  return base + overtime * rate;
};

console.log(getWage(baseSalary, overtime, rate));
