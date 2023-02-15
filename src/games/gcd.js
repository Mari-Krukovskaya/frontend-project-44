import getRandomNumber from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getRound = () => {
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
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = nod(num1, num2);
  return [question, correctAnswer.toString()];
};

export { rule, getRound};
