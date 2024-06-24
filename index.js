const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js');

// get user input
function getUserInput() {
    inquirer.createPromptModule([
        {
            name: 'text',
            type: 'input',
            message: 'Enter the text for your logo (up to three characters)'
        },

        {
            name: 'textColor',
            type: 'input',
            messgae: 'Enter a color keyword (OR hexidecimal number) for your text'
        },

        {
            name: 'shape',
            type: 'list',
            message: 'Choose a shape for your logo (Circle, Triangle, Square)',
            list: ['Circle', 'Triangle', 'Square']
        },

        {
            name: 'shapeColor',
            type: 'input',
            message: 'Enter a color keyword (OR hexidecimal number) for your shape'
        }
    ])
    // reprompt if they put anything over 3 characters long
    .then(function(answers) {
        if (answers.text.length > 3) {
            console.log('The maximum number of characters is three.');
            getUserInput();
        } else {
            writeToFile('logo.svg', answers);
        }
    });
}
