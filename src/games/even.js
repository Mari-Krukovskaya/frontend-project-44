import startGame from '../index.js';
import getRandomNumbe from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainGames = () => {
  const random = getRandomNumbe();
  const ancwer = random % 2 === 0 ? 'yes' : 'no';
  const question = `${random}`;
  return [question, ancwer];
};

const startEven = () => {
  startGame(rules, brainGames);
};

export default startEven;
