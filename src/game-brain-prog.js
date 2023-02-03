
import readlineSync from 'readline-sync';
import userName from './cli.js';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
 
 const progression = () => {
 const progressionLength = randomNumber(10, 20);
 const progressionNumber = randomNumber(1, 20);
 const count = randomNumber(1, 5);
 const num = [progressionNumber];
for (let i = 0; num.length <= progressionLength; i += 1) {
 num.push(num[i] + count);
 }
  return num;
};
export default function brainProg() {
 const name = userName();
 console.log(readlineSync.question('What number is missing in the progression?'));
 for (let i = 0; i < 3; i += 1) {
 const stack = progression();
 const numberRandom = randomNumber(0, 20);
 const result = randomNumber(numberRandom, 1);
 const prog = String(stack[result]);
 stack[result] = '..';
 const progArifmetica = stack.join(' '); 
 const questionProgression = readlineSync.question((`${'Question: '}${progArifmetica}${'\nYour answer: '}`));
 if (prog === questionProgression) {
console.log('Correct!');
} else {
console.log(`'${questionProgression}' is wrong answer ;( Correct answer was '${prog}'. \nLet's try again, ${name}`);
 return;
 }
 
}
console.log(`Congratulations, ${name}`);
}