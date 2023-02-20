import getRandomNumber from '../utils.js';

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

const rule = 'Find the greatest common divisor of given numbers.';

const getRound = () => {
  const number1 = getRandomNumber(0, 20);
  const number2 = getRandomNumber(0, 20);
  const question = `${number1} ${number2}`;
  const correctAnswer = nod(number1, number2).toString();
  return [question, correctAnswer];
};

export { rule, getRound };
