#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswerCount = 0;

for (let i = 0; i < 3; i += 1) {
    const questions = Math.floor(Math.random() * 50);
    console.log(`Question: ${questions}`); 
    
    const correctAnswer = questions % 2 === 0 ? 'yes' : 'no';

    const answer = readlineSync.question('Your answer:');
    if (answer === correctAnswer) {
        console.log('Correct!')
        correctAnswerCount += 1;
        if (correctAnswerCount === 3) {
            console.log(`Congratulations, ${name}!`);
            break;
        }

    } else {
        console.log(`'${answer}' your answer is not correct!; Correct answer is '${correctAnswer}'`);
        console.log(`Let's try again, ${name}!`);
        break;
    }
};