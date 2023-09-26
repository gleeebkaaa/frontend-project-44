#!/usr/bin/env node
import gameLogic from '../../src/index.js';


function commonDivisor(a, b) {
    if (b === 0) {
        return a;
    }
    return commonDivisor(b, a % b);
}

function generateNumbers() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const question = `${num1} ${num2}`;
    const correctAnswer = String(commonDivisor(num1, num2));
    return {question, correctAnswer};
}

const introMessage = 'Find the greatest common divisor of given numbers.'
gameLogic(generateNumbers, introMessage);