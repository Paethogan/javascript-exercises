const add = function(...num) {
  return num.reduce((sum, num) => sum + num);
};

const subtract = function(...num) {
  return num.reduce((total, num) => total - num);
};

const sum = function(arr = []) {
  return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr = []) {
  return arr.reduce((product, num) => product * num);
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(num) {
  if (num === 0) return 1;
  return num <= 1 ? 1 : num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
