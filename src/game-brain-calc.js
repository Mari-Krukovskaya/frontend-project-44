import readlineSync from 'readline-sync';
import userName from './cli.js';

const randomNumber = () => Math.round(Math.random() * 10);

const randomOperator = () => {
  const operator = ['+', '-', '*'];
  const operatorCalc = Math.floor(Math.random() * operator.length);
  const result = operator[operatorCalc];
  return result;
};
const calc = (num1, num2, operator) => {
  switch (operator) {
      case '+':
   return num2 + num1;
      case '-':
   return num2 - num1;
      case '*':
   return num2 * num1;
      default:
    break;
  } 
  return operator;
};
export default function brainCalc() {
  const name = userName();
  console.log(readlineSync.question('What is the result of the expression?'));
  for (let i = 0; i < 3; i += 1) {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const operator = randomOperator()
  const questionCalc = readlineSync.question((`${'Question: '}${num2} ${operator} ${num1} ${'\nYour answer: '}`));
  const funcCalc = calc(num1, num2, operator);
  if (funcCalc === Number(questionCalc)) {
  console.log('Correct!');
} else {
  console.log(`'${questionCalc}' is wrong answer ;( Correct answer was '${funcCalc}'. \nLet's try again, ${name}`);
   return;
  }
 }
 console.log(`Congratulations, ${name}`);
}