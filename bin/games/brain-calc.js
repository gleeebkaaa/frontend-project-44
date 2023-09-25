#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');

let correctAnswerCount = 0;

for (let i = 0; i < 3; i += 1) {
    const num1 = Math.floor(Math.random() * 50);
    const num2 = Math.floor(Math.random() * 50);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const expression = `${num1} ${operator} ${num2}`;
    console.log(`Questions: ${expression}`);
    
    const correctAnswer = eval(expression);

    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === correctAnswer) {
        console.log('Correct!')
        correctAnswerCount += 1;
        if (correctAnswerCount === 3) {
            console.log(`Congratulations, ${name}!`);
            break;
        }

    } else {
        console.log(`'${answer}' is wrong answer!; Correct answer was '${correctAnswer}'`);
        console.log(`Let's try again, ${name}!`);
        break;
    }
};