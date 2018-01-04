# Javascript Classes

Let's put our knowledge of classes to practice! In this assignment, you will create javascript objects that model real life objects using classes as a blueprint

### Getting Started
- Fork this repo
- `git clone <repo-url>` 
- `cd` into directory
- Follow the instructions listed below. if you wish, you can use the `helper` object's `.test()` method to assert your object's behaviour
```
var helper = require('./test-helper')
helper.test(myObject.someMethod(), expectedValue)
```

### Instructions:

#### 1. Model a Rectangle
- create a file named `Rectangle.js`
- in it, create a class named `Rectangle`, with the following properties in the constructor:
    - `breadth`
    - `length`
- define a method named `calculateArea()` to return the area of the rectangle
- instantiate 2 rectangle objects with the following properties:
    - breadth: 10, length 20
    - breadth: 25, length 100
- invoke each rectangle's `calculateArea()` method and verify that the following areas are returned:
    - area: 200
    - area: 2500
- define a method named `calculatePerimeter()` and verify that the following perimeters are returned:
    - perimeter: 60
    - perimeter: 250

#### 2. Model a Circle
- create a file named `Circle.js`
- in it, create a class named `Circle`, with the following property in the constructor:
    - `radius`
- define a method named `calculateArea()` to return the area of the circle
    - the formula for calculating the area of a circle is: (`Math.PI * r^2`)
    - hint: look up [the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) for the Javascript global Math object to find out how to square a number
- instantiate 2 circles with the following properties:
    - radius: 5
    - radius: 30
- invoke each rectangle's `calculateArea()` method and verify that the following areas are returned:
    - area: 78.5398178100586
    - area: 2827.4333882308138
- define a method named `calculatePerimeter()` and verify that the following perimeters are returned:
    - the formula for calculating the area of a circle is: (`2 * Math.PI * r`)
    - perimeter: 31.41592653589793
    - perimeter: 188.49555921538757

