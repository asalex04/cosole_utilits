import gameEngine from '../index.js';
import randomNumber from '../utilits.js';

const TASK = 'Загадано число в диапазоне от 0 до 100'

const getEvenTask = () => {
    const question = randomNumber(1, 100);
    return question.toString()
};

export default () => gameEngine(TASK, getEvenTask);