import startGame from '../index.js';
import getRandomNumbe from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

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
  const answer = nod(num1, num2);
  return [question, answer.toString()];
};
const startGCD = () => {
  startGame(rule, brainGames);
};

export default startGCD;
