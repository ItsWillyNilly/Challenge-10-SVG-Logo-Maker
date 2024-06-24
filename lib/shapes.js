// this is the base shape
class Shape {
    constructor () {
        this.color = '';
    }
    setColor(color) {
        this.color = color; 
    }
}

// these are the shapes that inherit properties from the class shape
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<triangle points="50,0 0,100 100,100" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<square x="50" y="0" width="100" height="100" fill="${this.color}" />`
    }
}

// exports the shapes so it can be used in other files
module.exports = {Circle, Triangle, Square};