import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const rule = 'What number is missing in the progression?';

const arithmeticProgression = () => {
  const progressionLength = getRandomNumber(10, 20);
  const progressionNumber = getRandomNumber(1, 20);
  const count = getRandomNumber(2, 5);
  const num = [progressionNumber];
  for (let i = 0; num.length <= progressionLength; i += 1) {
    num.push(num[i] + count);
  }
  return num;
};

const getRound = () => {
  const funcProgression = arithmeticProgression();
  const numberRandom = getRandomNumber(1, 10);
  const result = getRandomNumber(0, numberRandom);
  const correctAnswer = funcProgression[result].toString();
  funcProgression[result] = '..';
  const progArifmetica = funcProgression.join(' ');
  const question = `${progArifmetica}`;
  return [question, correctAnswer];
};

const startProgression = () => startGame(rule, getRound);

export default startProgression;
