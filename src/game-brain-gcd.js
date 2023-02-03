import readlineSync from 'readline-sync';
import userName from './cli.js';

const randomNumber = () => Math.floor(Math.random() * 50);

const nod = (a, b) => {
  while (a !== b ) {
 if (a > b) {
  a -= b;
} else {
  b -= a;
  }
}
  return a;
}

export default function brainGcd() {
 const name = userName();
console.log('Find the greatest common divisor of given numbers.');
 for(let i = 0; i < 3; i += 1) {
 const num1 = randomNumber();
 const num2 = randomNumber(); 
 const questionNODA = readlineSync.question((`${'Question: '}${num1} ${num2} ${'\nYour answer: '}`));
 const noda = nod(num1, num2);
 if(noda === Number(questionNODA)) {
    console.log('Correct!');
 } else {
    console.log(`'${questionNODA}' is wrong answer ;( Correct answer was '${noda}'. \nLet's try again, ${name}`);
    return;
  }
 }
 console.log(`Congratulations, ${name}`);
 
}