import getRandomNumber from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRound = () => {
  const prime = (n) => {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return n > 1;
  };
  const random = getRandomNumber();
  const randomPrime = prime(random);
  const correctAnswer = randomPrime ? 'yes' : 'no';
  const question = `${random}`;
  return [question, correctAnswer];
};

export { rule, getRound };
