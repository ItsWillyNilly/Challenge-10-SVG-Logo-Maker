# Challenge-10-SVG-Logo-Maker
This is my SVG Logo Maker created using Javascript, Node.js, inquire, fs, and Jest for unit testing.

## Description
I was tasked with building out the code with proper file structure. This program allows the user to create an SVG Logo by answering a few questions in the terminal. After answering all the required questions correctly the program generates a SVG file with 3 colored letters in a colored shape chosen by the user.

## User Story

```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Technologies Used
**Node.js**
**Jest**
**Inquirer**
**fs**

## Installation Instructions
**Clone the repository**
```bash
git clone git@github.com:ItsWillyNilly/Challenge-10-SVG-Logo-Maker.git
```

**Navigate to the project directory**
<br>EXAMPLE:
```
cd /Users/williamlee/bootcamp/challenge-10/Challenge-10-SVG-Logo-Maker/
```
**Install the Node package**
```bash
npm init -y
```

**Install dependencies**
```bash
npm i inquirer
```
```bash
npm i jest
```

## Program Demonstration
<img src="assets/videos/Untitled Video September 15, 2024 5_40 PM.gif">
<br>Video Link:<br>
https://drive.google.com/file/d/1fix2wQWcvirP4fm-vNmOh_VsfRcd5iyJ/view?usp=sharing

## Sample Logo
<img src="examples/logo.svg">

## GitHub Repo Link
https://github.com/ItsWillyNilly/Challenge-10-SVG-Logo-Maker