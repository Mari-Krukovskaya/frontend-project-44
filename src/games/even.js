import startGame from '../index.js';
import randomNumber from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainGames = () => {
  const random = randomNumber();
  const ancwer = random % 2 === 0 ? 'yes' : 'no';
  const question = `${random}`;
  return [question, ancwer];
};

export default () => {
  startGame(rules, brainGames);
};
