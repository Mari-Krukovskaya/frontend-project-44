import startGame from '../index.js';
import randomNumber from '../utils.js';

const rules = 'What is the result of the expression?';

const brainGames = () => {
  const randomOperator = () => {
    const operator = ['+', '-', '*'];
    const operatorCalc = operator[randomNumber(0, operator.length)];
    return operatorCalc;
  };
  const calc = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num2 + num1;
      case '-':
        return num2 - num1;
      case '*':
        return num2 * num1;
      default:
        break;
    }
    return operator;
  };
  const num1 = randomNumber();
  const num2 = randomNumber();
  const operator = randomOperator();
  const question = `${num2} ${operator} ${num1}`;
  const ancwer = calc(num1, num2, operator);
  return [question, ancwer.toString()];
};
const startCalc = () => {
  startGame(rules, brainGames);
};

export default startCalc;
