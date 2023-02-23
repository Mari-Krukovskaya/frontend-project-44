import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const operators = ['+', '-', '*'];
const rule = 'What is the result of the expression?';

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return y + x;
    case '-':
      return y - x;
    case '*':
      return y * x;
    default:
      throw new Error(`Unknown operator '${operator}'!`);
  }
};

const getRound = () => {
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const num1 = getRandomNumber(0, 50);
  const num2 = getRandomNumber(0, 50);
  const question = `${num2} ${operator} ${num1}`;
  const correctAnswer = calculate(num1, num2, operator).toString();
  return [question, correctAnswer];
};

const startCalculator = () => startGame(rule, getRound);

export default startCalculator;
