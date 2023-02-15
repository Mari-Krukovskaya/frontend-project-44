import readlineSync from 'readline-sync';

const startGame = (rule, brainGames) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log(rule);
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = brainGames();
    console.log(`Question: ${question}`);
    const correctAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${correctAnswer}' is wrong answer ;( Correct answer was '${answer}'. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default startGame;
