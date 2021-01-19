// #### Write your implementation of testing framework and assertion. Only after completing this go forward.

// #### Write two tests for the following functions using test framework assertion

// #### Add two number

// 1. Write a function that takes two input `numA` and `numB` and returns the sum of both numbers.
// 2. After writing the function write 5 tests for above function with different values
// 3. Throw an error when the arguments passed in not a number.
// 4. Make second test fail and see if the

// #### Multiply two numbers

// 1. Write a function that takes two input `numA` and `numB` and returns the multiplication of both numbers.
// 2. After writing the function write 5 tests for above function with different values
// 3. Throw an error when the arguments passed in not a number.
// 4. Make second test fail and see if the

function test(message, callback) {
    try {
      callback();
      console.log("✔️", message);
    } catch (error) {
      console.log("❌", message, error);
    }
  }
  
  function expect(actual) {
    return {
      isEqual: function (expected) {
        if (actual !== expected) {
          throw new Error(`${actual} is not equal to ${expected}`);
        }
      },
      isTypeOf: function (expected) {
        if (actual !== expected) {
          throw new Error(`${actual} is not type of ${expected}`);
        }
      },
    };
  }
  
  function addTwoNumbers(a, b) {
    return a + b;
  }
  
  function multiplyTwoNumbers(a, b) {
    return a * b;
  }
  
  function testAdd() {
    result = addTwoNumbers(1, 3);
    expected = 4;
    expect(result).isEqual(expected);
    expect(typeof result).isTypeOf("number");
  }
  
  function testmultiply() {
    result = multiplyTwoNumbers(2, 3);
    expected = 7;
    expect(result).isEqual(expected);
  }
  
  test("Add two Numbers", testAdd);
  test("Multiply two Numbers", testmultiply);