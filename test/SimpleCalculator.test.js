var SimpleCalculator = require("../src/SimpleCalculator");

describe("SimpleCalculator", () => {
  it("calculator should have initial value of 0 if no value is provided during instantiation", () => {
    var calculator = new SimpleCalculator();

    expect(calculator.value).toEqual(0);
  });

  it("new SimpleCalculator(10).add(1) should return 11", () => {
    var calculator = new SimpleCalculator(10);
    calculator.add(1);

    expect(calculator.value).toEqual(11);
  });

  it("add() should be chainable", () => {
    var calculator = new SimpleCalculator();
    calculator
      .add(1)
      .add(1)
      .add(1);

    expect(calculator.value).toEqual(3);
  });
});
