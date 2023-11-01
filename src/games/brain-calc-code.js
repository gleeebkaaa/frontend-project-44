import gameLogic from '../index.js';

const operators = ['+', '-', '*'];
const introMessage = 'What is the result of the expression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculateOperations = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const getRandomOperationSymbol = () => {
  const randomIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(0, 50);
  const num2 = getRandomNumber(0, 50);
  const operator = getRandomOperationSymbol();

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculateOperations(operator, num1, num2).toString();

  return [question, correctAnswer];
};

const calcGame = () => {
  gameLogic(getQuestionAndAnswer, introMessage);
};

export default calcGame;
