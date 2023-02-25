import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRound = () => {
  const num = getRandomNumber();
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  const question = num.toString();
  return [question, correctAnswer];
};

const startIsEven = () => startGame(rule, getRound);

export default startIsEven;
