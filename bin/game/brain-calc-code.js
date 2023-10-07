#!/usr/bin/env node
import gameLogic from '../../src/index.js';

const operators = ['+', '-', '*'];
const introMessage = 'What is the result of the expression?';

const calcGame = () => {
const generateNumbers = () => {
  const num1 = Math.floor(Math.random() * 50);
  const num2 = Math.floor(Math.random() * 50);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${num1} ${operator} ${num2}`;

  const getCorrectAnswer = () => {
    switch (operator) {
      case '+':
        return (num1 + num2).toString();
      case '-':
        return (num1 - num2).toString();
      case '*':
        return (num1 * num2).toString();
      default:
        return null;
    }
  };

  const correctAnswer = getCorrectAnswer();
  return { question, correctAnswer };
};

gameLogic(generateNumbers, introMessage);

};

export default calcGame;