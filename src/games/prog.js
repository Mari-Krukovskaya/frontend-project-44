import startGame from '../index.js';
import getRandomNumbe from '../utils.js';

const rule = 'What number is missing in the progression?';

const brainGames = () => {
  const progression = () => {
    const progressionLength = getRandomNumbe(10, 20);
    const progressionNumber = getRandomNumbe(1, 20);
    const count = getRandomNumbe(2, 5);
    const num = [progressionNumber];
    for (let i = 0; num.length <= progressionLength; i += 1) {
      num.push(num[i] + count);
    }
    return num;
  };
  const funcProgression = progression();
  const numberRandom = getRandomNumbe(1, 10);
  const result = getRandomNumbe(0, numberRandom);
  const answer = funcProgression[result];
  funcProgression[result] = '..';
  const progArifmetica = funcProgression.join(' ');
  const question = `${progArifmetica}`;
  return [question, answer.toString()];
};
const startProgression = () => {
  startGame(rule, brainGames);
};

export default startProgression;
