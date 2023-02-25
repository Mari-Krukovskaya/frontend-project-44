import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const rule = 'What number is missing in the progression?';

const generateSequence = (start, step, length) => {
  const progression = [];
  let progressionNumber = start;
  for (let i = 0; i <= length; i += 1) {
    progression.push(progressionNumber);
    progressionNumber += step;
  }
  return progression;
};

const getRound = () => {
  const length = 10;
  const start = getRandomNumber(10, 20);
  const progStep = getRandomNumber(5, 10);
  const progression = generateSequence(length, start, progStep);
  const index = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[index].toString();
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startProgression = () => startGame(rule, getRound);

export default startProgression;
