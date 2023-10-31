#!/usr/bin/env node
import gameLogic from '../index.js';
import getRandomInt from './helper.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
};

const getQuestionAndAnswer = () => {
  const randomNumber = getRandomInt(1, 1000);
  const question = String(randomNumber);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

export default () => gameLogic(getQuestionAndAnswer, description);
