import getRandomNumber from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRound = () => {
  const random = getRandomNumber();
  const answer = random % 2 === 0 ? 'yes' : 'no';
  const question = `${random}`;
  return [question, answer];
};


export { rule, getRound };



