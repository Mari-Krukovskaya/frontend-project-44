import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getRound = () => {
  const num = getRandomNumber();
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  const question = num.toString();
  return [question, correctAnswer];
};

const startIsPrime = () => startGame(rule, getRound);

export default startIsPrime;
