import readlineSync from 'readline-sync';

const startTheGames = (rules, brainGames) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [question, ancwer] = brainGames();
    console.log(`Question: ${question}`);
    const correctAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === ancwer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${correctAnswer}' is wrong answer ;( Correct answer was '${ancwer}'. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default startTheGames;
