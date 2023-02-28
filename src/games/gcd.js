import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (y === 0) {
    return x;
  }

  return getGcd(y, x % y);
};
const getRound = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();
  return [question, correctAnswer];
};

const startGcd = () => startGame(rule, getRound);

export default startGcd;
