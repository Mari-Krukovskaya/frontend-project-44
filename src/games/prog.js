import startGame from '../index.js';
import randomNumber from '../utils.js';

const rules = 'What number is missing in the progression?';

const brainGames = () => {
  const progression = () => {
    const progressionLength = randomNumber(10, 20);
    const progressionNumber = randomNumber(1, 20);
    const count = randomNumber(2, 5);
    const num = [progressionNumber];
    for (let i = 0; num.length <= progressionLength; i += 1) {
      num.push(num[i] + count);
    }
    return num;
  };
  const funcProgression = progression();
  const numberRandom = randomNumber(1, 10);
  const result = randomNumber(0, numberRandom);
  const ancwer = funcProgression[result];
  funcProgression[result] = '..';
  const progArifmetica = funcProgression.join(' ');
  const question = `${progArifmetica}`;
  return [question, ancwer.toString()];
};
const startProgression = () => {
  startGame(rules, brainGames);
};

export default startProgression;
