import startTheGames from './index.js';

const randomNumber = () => Math.ceil(Math.random() * 100);
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainGames = () => {
  const random = randomNumber();
  const ancwer = random % 2 === 0 ? 'yes' : 'no';
  const question = `${random}`;
  return [question, ancwer];
};

export default () => {
  startTheGames(rules, brainGames);
};
