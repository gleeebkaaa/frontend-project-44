#!/usr/bin/env node
import gameLogic from '../../src/index.js';
import getRandomInt from './helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomInt(1, 50);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question.toString(), answer];
};

const evenGame = () => gameLogic(getQuestionAndAnswer, description);

export default evenGame;
