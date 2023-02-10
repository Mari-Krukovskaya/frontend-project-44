import startGame from '../index.js';
import randomNumber from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainGames = () => {
  const prime = (n) => {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return n > 1;
  };
  const random = randomNumber();
  const randomPrime = prime(random);
  const ancwer = randomPrime ? 'yes' : 'no';
  const question = `${random}`;
  return [question, ancwer];
};
export default () => {
  startGame(rules, brainGames);
};
