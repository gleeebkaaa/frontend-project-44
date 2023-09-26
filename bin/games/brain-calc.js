#!/usr/bin/env node
import gameLogic from '../../src/index.js';

const generateNumbers = () => {
  const num1 = Math.floor(Math.random() * 50);
  const num2 = Math.floor(Math.random() * 50);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${num1} ${operator} ${num2}`;

const getCorrectAnswer = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return  (num1 + num2).toString();
    case '-':
      return  (num1 - num2).toString();
    case '*':
      return  (num1 * num2).toString();
    default:
    return null;
  }
};


  const correctAnswer = getCorrectAnswer(operator, num1, num2);
  return { question, correctAnswer };
};

const introMessage = 'What is the result of the expression?';
gameLogic(generateNumbers, introMessage);
