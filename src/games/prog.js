import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What number is missing in the progression?';

const getRound = () => {
  const progression = () => {
    const progressionLength = getRandomNumber(10, 20);
    const progressionNumber = getRandomNumber(1, 20);
    const count = getRandomNumber(2, 5);
    const num = [progressionNumber];
    for (let i = 0; num.length <= progressionLength; i += 1) {
      num.push(num[i] + count);
    }
    return num;
  };
  const funcProgression = progression();
  const numberRandom = getRandomNumber(1, 10);
  const result = getRandomNumber(0, numberRandom);
  const answer = funcProgression[result];
  funcProgression[result] = '..';
  const progArifmetica = funcProgression.join(' ');
  const question = `${progArifmetica}`;
  return [question, answer.toString()];
};
const startProgression = () => {
  startGame(rule, getRound);
};

export default startProgression;
