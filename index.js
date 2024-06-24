const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js');

// get user input
function getUserInput() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text for your logo (up to three characters)'
        },

        {
            type: 'input',
            name: 'textColor',
            messgae: 'Enter a color keyword (OR hexidecimal number) for your text'
        },

        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for your logo (Circle, Triangle, Square)',
            choices: ['Circle', 'Triangle', 'Square']
        },

        {
            type: 'input',
            name: 'shapeColor',
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

// creates an svg with the user input utilizing the shapes.js class file and creates a file with the user input
function writeToFile(fileName, answers) {
    
    // creates the shape based on user input
    let shape;
    if(answers.shape === 'Circle' || answers.shape === 'circle') {
        shape = new Circle;
    } else if (answers.shape === 'Triangle' || answers.shape === 'triangle') {
        shape = new Triangle;
    } else if (answers.shape === 'Square' || answers.shape === 'square') {
        shape = new Square;
    }

    // sets the user color for the shape
    shape.setColor(answers.shapeColor);

        // creates the svg and passes in the users text and color choices
        const svg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        </svg>
    `;

    // writes the file and lets the user know the status if it was successful or not
    fs.writeFile(fileName, svg, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log('Generated Logo.svg');
        }
    });
}

getUserInput();