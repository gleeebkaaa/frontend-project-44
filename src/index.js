import readlineSync from 'readline-sync';

const gameLogic = (getQuestionsAndAnswer, introMessage, maxCorrectAnswer = 3) => {
    console.log('Welcome to the Brain Games!');
    
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(introMessage);
    let correctAnswerCount = 0;
    
    for (let i = 0; i < maxCorrectAnswer; i += 1) {
        const {question, correctAnswer} = getQuestionsAndAnswer();
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
    
        if (answer === correctAnswer) {
            console.log(`Correct!`);
            correctAnswerCount += 1;
            if (correctAnswerCount === maxCorrectAnswer) {
                console.log(`Congratulations, ${name}!`);
                return;
            }
        } else {
            console.log(`'${answer}' is wrong answer!; Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        
        }

    }
};

export default gameLogic;