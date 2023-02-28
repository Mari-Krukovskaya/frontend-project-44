import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const lengthOfProgression = 10;
const rule = 'What number is missing in the progression?';

const createProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const getRound = () => {
  const start = getRandomNumber(10, 20);
  const step = getRandomNumber(5, 10);
  const progression = createProgression(lengthOfProgression, start, step);
  const index = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[index].toString();
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startProgression = () => startGame(rule, getRound);

export default startProgression;
