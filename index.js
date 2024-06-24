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

function writeToFile(fileName, answers) {
    let shape;
    if(answers.shape === 'Circle' || answers.shape === 'circle') {
        shape = new Circle;

    } else if (answers.shape === 'Triangle' || answers.shape === 'triangle') {
        shape = new Triangle;
    } else if (answers.shape === 'Square' || answers.shape === 'square') {
        shape = new Square;
    }

    shape.setColor(answers.shapeColor);

        const svg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
    `;

    fs.writeFile(fileName, svg, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log('Logo generated successfully.');
        }
    });
}

getUserInput();