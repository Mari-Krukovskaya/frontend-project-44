import startGame from '../index.js';
import getRandomNumbe from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainGames = () => {
  const random = getRandomNumbe();
  const answer = random % 2 === 0 ? 'yes' : 'no';
  const question = `${random}`;
  return [question, answer];
};

const startEven = () => {
  startGame(rule, brainGames);
};

export default startEven;
