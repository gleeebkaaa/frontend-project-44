import gameLogic from '../../src/index.js';

const progressionGame = () => {
  const generateNumbers = () => {
    const start = Math.floor(Math.random() * 100) + 1;
    const step = Math.floor(Math.random() * 10) + 1;

    const progress = [];

    for (let i = 0; i < 8; i += 1) {
      progress.push(start + step * i);
    }
    const randomIndex = Math.floor(Math.random() * 8);

    const correctAnswer = String(progress[randomIndex]);

    progress[randomIndex] = '..';

    const question = progress.join(' ');
    return [question, correctAnswer];
  };

  const introMessage = 'What number is missing in the progression?';
  gameLogic(generateNumbers, introMessage);
};

export default progressionGame;
