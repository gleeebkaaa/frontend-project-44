import readlineSync from 'readline-sync';

const maxCorrectAnswerCount = 3;

const gameLogic = (getQuestionsAndAnswer, description) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < maxCorrectAnswerCount; i += 1) {
    const [question, correctAnswer] = getQuestionsAndAnswer();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      if (i === maxCorrectAnswerCount - 1) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer!; Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
};

export default gameLogic;
