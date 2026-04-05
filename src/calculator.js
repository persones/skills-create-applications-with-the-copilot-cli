/**
 * Node.js CLI Calculator
 *
 * Supports the following basic arithmetic operations:
 *   - addition       (add)
 *   - subtraction    (subtract)
 *   - multiplication (multiply)
 *   - division       (divide)
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node calculator.js add 5 3        => 8
 *   node calculator.js subtract 10 4  => 6
 *   node calculator.js multiply 6 7   => 42
 *   node calculator.js divide 20 4    => 5
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Returns an error message if b is zero to avoid division by zero
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

// Only run CLI logic when executed directly (not when imported by tests)
if (require.main === module) {
// Parse CLI arguments: node calculator.js <operation> <num1> <num2>
const [, , operation, arg1, arg2] = process.argv;

const a = parseFloat(arg1);
const b = parseFloat(arg2);

if (!operation || isNaN(a) || isNaN(b)) {
  console.log("Usage: node calculator.js <operation> <num1> <num2>");
  console.log("Operations: add, subtract, multiply, divide");
  process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
  case "add":
    result = add(a, b);
    break;
  case "subtract":
    result = subtract(a, b);
    break;
  case "multiply":
    result = multiply(a, b);
    break;
  case "divide":
    result = divide(a, b);
    break;
  default:
    console.log(`Unknown operation: "${operation}"`);
    console.log("Supported operations: add, subtract, multiply, divide");
    process.exit(1);
}

console.log(`${a} ${operation} ${b} = ${result}`);
}
