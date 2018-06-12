class SimpleCalculator {
    constructor(value) {
        this.value = value === undefined ? 0 : value;
    }
    add(n) {
        this.value += n;
        return this;
    }
    subtract(n) {
        this.value -= n;
        return this;
    }
    multiply(n) {
        this.value *= n;
        return this;
    }
    divide(n) {
        this.value /= n;
        return this;
    }
}

const cal1 = new SimpleCalculator();
cal1.add(12).multiply(2).divide(2);
console.log(cal1.value);
