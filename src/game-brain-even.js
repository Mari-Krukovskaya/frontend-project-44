import readlineSync from "readline-sync";
import userName from "./cli.js";

const randomNumber = () => Math.ceil(Math.random() * 100);

export default function brainEven() {
  const name = userName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const random = randomNumber();
    const answer = random % 2 === 0 ? "yes" : "no";
    console.log(`Question: ${random}`);

    const qustionAnswer = readlineSync.question("Your answer: ");
    if (answer === qustionAnswer) {
      console.log("Correct!");
    } else if (answer !== qustionAnswer) {
      console.log(
        `'${qustionAnswer}' is wrong answer ;( Correct answer was "${qustionAnswer}". \nLet's try again, ${name}`
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
