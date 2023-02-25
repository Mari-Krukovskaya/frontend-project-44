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
  const progLength = getRandomNumber(10, 6);
  const firstNum = getRandomNumber();
  const progStep = getRandomNumber(10, 3);
  const progression = generateSequence(progLength, firstNum, progStep);
  const index = getRandomNumber(0, progLength - 1);
  const correctAnswer = progression[index];
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startProgression = () => startGame(rule, getRound);

export default startProgression;
