const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const div = (num1, num2) => ((num1 === 0 || num2 === 0) ? new Error('Division by Zero Error!') : num1 / num2);

export {
  sum, sub, multiply, div,
};
