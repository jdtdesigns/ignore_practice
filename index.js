// const dayjs = require('dayjs');
const inquirer = require('inquirer');

inquirer.prompt([
  {
    name: 'num1',
    message: 'Please enter your first number.',
    type: 'number'
  },
  {
    name: 'num2',
    message: 'Please enter your second number.',
    type: 'number'
  },
  {
    name: 'operator',
    message: 'Please choose the operation',
    type: 'list',
    choices: ['Add', 'Subtract', 'Multiply', 'Divide']
  }
]).then((answerObj) => {
  switch (answerObj.operator) {
    case 'Add':
      console.log(answerObj.num1 + answerObj.num2);
      break;
    case 'Subtract':
      console.log(answerObj.num1 - answerObj.num2);
      break;
    case 'Divide':
      console.log(answerObj.num1 / answerObj.num2);
      break;
    case 'Multiply':
      console.log(answerObj.num1 * answerObj.num2);
      break;
  }


});