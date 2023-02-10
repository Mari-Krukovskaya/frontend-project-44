import startGame from '../index.js';

const randomNumber = () => Math.round(Math.random() * 10);
const rules = 'What is the result of the expression?';

const brainGames = () => {
  const randomOperator = () => {
    const operator = ['+', '-', '*'];
    const operatorCalc = Math.floor(Math.random() * operator.length);
    const result = operator[operatorCalc];
    return result;
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
  return [question, ancwer];
};
export default () => {
  startGame(rules, brainGames);
};
