const {Circle, Triangle, Square} = require('./shapes.js');

describe('Triangle test', function() {
    test('Should create a triangle with a blue color', function() { 
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<triangle points="50,0 0,100 100,100" fill="blue" />');
    });    
})

describe('Circle test', function() {
    test('Should create a circle svg with a color of red', function() {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    })
})

describe('Square test', function() {
    test('Should create a square svg with a color of yellow', function() {
        const shape = new Square();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<square x="50" y="0" width="100" height="100" fill="yellow" />');
    })
})