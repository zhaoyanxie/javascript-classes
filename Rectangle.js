class Rectangle {
    constructor(breadth, length) {
        this.breadth = breadth;
        this.length = length;
    }

    area() {
        return this.length * this.breadth;
    }

    perimeter() {
        return (this.length + this.breadth) * 2;
    }
}

const rec1 = new Rectangle(2, 4);
console.log("rec1 breadth", rec1.breadth);
console.log("rec1 length", rec1.length);
console.log("rec1 area", rec1.area());
console.log("rec1 perimeter", rec1.perimeter());

const rec2 = new Rectangle(5, 10);
console.log("rec2 breadth", rec2.breadth);
console.log("rec2 length", rec2.length);
console.log("rec2 area", rec2.area());
console.log("rec2 perimeter", rec2.perimeter());