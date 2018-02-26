# Javascript Classes

Let's put our knowledge of classes to practice! In this assignment, you will create javascript objects that model real life objects using classes as a blueprint

### Getting Started
- Fork this repo
- `git clone <repo-url>` 
- `cd` into directory
- Follow the instructions listed below. if you wish, you can use the `assertEquals` function to write tests.
```javascript
const assertEquals = require("./test-helper");
assertEquals(actualValue, expectedValue)
assertEquals(myObject.myMethod(), expectedValue)
```

### Instructions:

#### 1. Model a Rectangle
- create a file named `Rectangle.js`
- in it, create a class named `Rectangle`, with the following properties in the constructor:
    - `breadth`
    - `length`
- define a method named `area()` to return the area of the circle
    - formula: area = `length * breadth`
    
- instantiate the following rectangles one by one and verify that `area()` returns the expected values as stated below

| breadth | length | area() | perimeter() |
|-|-|-|-|
|2|4|8|12|
|5|10|50|30|

Repeat these steps for `perimeter()`
- formula: perimeter = `2 * length + 2 * breadth`

#### 2. Model a Circle
- create a file named `Circle.js`
- in it, create a class named `Circle`, with the following property in the constructor:
    - `radius`
- define a method named `area()` to return the area of the circle
    - formula: area = `Math.PI * r ** 2`
    - hint: look up [the javascript Math object docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) to find out how to round a number to 1 decimal place (MDN calls this a 'single precision float')
- instantiate the following circles one by one and verify that `area()` returns the expected values as stated below

| radius | area() | perimeter() |
|-|-|-|
|1|3.14|6.3|
|2|12.6|12.6|
|3|28.3|18.9|

Repeat these steps for `perimeter()`
- formula: perimeter = `2 * Math.PI * r`

#### 3. Bonus: Model a SimpleCalculator
- For this bonus exercise, don't use `assertEquals`. Instead, `console.log` to see the output of your methods and manually check whether it matches your expected values
- create a file named `SimpleCalculator`
- in it, create a class named `SimpleCalculator`, with the following property in the constructor:
    - `value` (this will be the starting value). If no argument is supplied during instantiation, value should default to 0
- Implement (i.e. write code for) the following methods.
    - `calculator.add(n)`
    - `calculator.subtract(n)`
    - `calculator.multiply(n)`
    - `calculator.divide(n)`
- Implementation logic for each method: 
    - take in **one** argument (`n`)
    - use `n` to update the value of `this.value`
    - return `this` so that we can chain methods (example: `calculator.add(12).multiply(2).divide(2)`)

---
Copyright (c) 2018 ThoughtWorks. For personal use and training purposes only; not to be copied or distributed without further approval.
