import readlineSync from 'readline-sync';

export default function gameLogic(getQuestionsAndAnswer, maxCorrectAnswer = 3) {
    console.log('Welcome to the Brain Games!');
    
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    let correctAnswerCount = 0;
    
    for (let i = 0; i < maxCorrectAnswer; i += 1) {
        const {question, correctAnswer} = getQuestionsAndAnswer();
        console.log(`Questions: ${question}`);
        const answer = Number(readlineSync.question('Your answer: '));
    
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