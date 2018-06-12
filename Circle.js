class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return (Math.PI * this.radius**2).toFixed(1);
    }
    perimeter() {
        return (Math.PI * this.radius * 2).toFixed(1);
    }
}

const circle1 = new Circle(1);
console.log("circle1 radius", circle1.radius);
console.log("circle1 area", circle1.area());
console.log("circle1 perimeter", circle1.perimeter());

const circle2 = new Circle(2);
console.log("circle2 radius", circle2.radius);
console.log("circle2 area", circle2.area());
console.log("circle2 perimeter", circle2.perimeter());

const circle3 = new Circle(3);
console.log("circle3 radius", circle3.radius);
console.log("circle3 area", circle3.area());
console.log("circle3 perimeter", circle3.perimeter());
