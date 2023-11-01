import gameLogic from '../index.js';
import getRandomInt from './helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const calculateEvenness = (num) => (isEven(num) ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const question = getRandomInt(1, 50);
  const answer = calculateEvenness(question);
  return [question.toString(), answer];
};

export default () => gameLogic(getQuestionAndAnswer, description);
