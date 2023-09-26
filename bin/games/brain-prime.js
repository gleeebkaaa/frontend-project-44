#!/usr/bin/env node
import gameLogic from '../../src/index.js';

function myPrime(num) {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
}

function generateNumbers() {
  const randNum = Math.floor(Math.random() * 1000) + 1;
  const question = `${randNum}`;
  const correctAnswer = myPrime(randNum) ? 'yes' : 'no';
  return { question, correctAnswer };
}

const introMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
gameLogic(generateNumbers, introMessage);
