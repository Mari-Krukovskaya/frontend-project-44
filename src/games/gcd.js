import startGame from '../index.js';
import getRandomNumbe from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const brainGames = () => {
  const nod = (a, b) => {
    let nod1 = a;
    let nod2 = b;
    while (nod1 !== nod2) {
      if (nod1 > nod2) {
        nod1 -= nod2;
      } else {
        nod2 -= nod1;
      }
    }
    return nod1;
  };
  const num1 = getRandomNumbe();
  const num2 = getRandomNumbe();
  const question = `${num1} ${num2}`;
  const ancwer = nod(num1, num2);
  return [question, ancwer.toString()];
};
const startGCD = () => {
  startGame(rules, brainGames);
};

export default startGCD;
