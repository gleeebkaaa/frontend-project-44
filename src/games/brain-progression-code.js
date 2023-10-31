import gameLogic from '../index.js';
import getRandomInt from './helper.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const start = getRandomInt(1, 100);
  const step = getRandomInt(1, 10);
  const progressionLength = 10;
  const hiddenElementIndex = getRandomInt(0, progressionLength - 1);

  const progression = generateProgression(start, step, progressionLength);

  const answer = String(progression[hiddenElementIndex]);
  progression[hiddenElementIndex] = '..'; 
  const question = progression.join(' ');

  return [question, answer];
};

export default () => gameLogic(getQuestionAndAnswer, description);
