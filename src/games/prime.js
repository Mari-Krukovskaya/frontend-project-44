import startGame from '../index.js';
import getRandomNumbe from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainGames = () => {
  const prime = (n) => {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return n > 1;
  };
  const random = getRandomNumbe();
  const randomPrime = prime(random);
  const answer = randomPrime ? 'yes' : 'no';
  const question = `${random}`;
  return [question, answer];
};
const startPrime = () => {
  startGame(rule, brainGames);
};

export default startPrime;
