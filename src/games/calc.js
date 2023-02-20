import getRandomNumber from '../utils.js';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num2 + num1;
    case '-':
      return num2 - num1;
    case '*':
      return num2 * num1;
    default:
      throw new Error(`Unknown operator '${operator}'!`);
  }
};

const rule = 'What is the result of the expression?';

const getRound = () => {
  const operators = ['+', '-', '*'];
  const randomOperators = getRandomNumber(operators.length - 1);
  const number1 = getRandomNumber(0, 20);
  const number2 = getRandomNumber(0, 20);
  const question = `${number2} ${operators[randomOperators]} ${number1}`;
  const correctAnswer = calculate(number1, number2, operators[randomOperators]).toString();
  return [question, correctAnswer];
};

export { rule, getRound };
