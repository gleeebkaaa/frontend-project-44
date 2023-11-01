import gameLogic from '../index.js';
import getRandomInt from './helper.js';

const description = 'Find the greatest common divisor of given numbers.';

const commonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return commonDivisor(b, a % b);
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(commonDivisor(num1, num2));
  return [question, answer];
};

export default () => gameLogic(getQuestionAndAnswer, description);
