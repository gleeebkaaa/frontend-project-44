#!/usr/bin/env node
import gameLogic from '../../src/index.js';

const generateNumbers = () => {
    const num1 = Math.floor(Math.random() * 50);
    const num2 = Math.floor(Math.random() * 50);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const question = `${num1} ${operator} ${num2}`;
    
    const correctAnswer = eval(question).toString();

    return {question, correctAnswer};
};

const introMessage = 'What is the result of the expression?'
gameLogic(generateNumbers, introMessage);

    