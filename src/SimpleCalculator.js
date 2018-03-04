class SimpleCalculator {
  constructor(value) {
    this.value = value || 0;
  }

  add(n) {
    this.value = this.value + n;
    return this;
  }
}

module.exports = SimpleCalculator;
