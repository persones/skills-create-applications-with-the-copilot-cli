// Calculator functions with error handling

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error: Division by zero is not allowed.";
  return a / b;
}

function modulo(a, b) {
  if (b === 0) return "Error: Modulo by zero is not allowed.";
  return a % b;
}

function exponentiate(base, exponent) {
  return Math.pow(base, exponent);
}

function sqrt(a) {
  if (a < 0) return "Error: Square root of a negative number is not allowed.";
  return Math.sqrt(a);
}

module.exports = { add, subtract, multiply, divide, modulo, exponentiate, sqrt };

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error(
      "Usage: node calculator.js <operation> <num1> [num2]\n" +
        "Operations: add, subtract, multiply, divide, modulo, exponentiate, sqrt"
    );
    process.exit(1);
  }

  const operation = args[0];
  const num1 = parseFloat(args[1]);
  const num2 = args[2] !== undefined ? parseFloat(args[2]) : undefined;

  let result;
  switch (operation) {
    case "add":
      result = add(num1, num2);
      break;
    case "subtract":
      result = subtract(num1, num2);
      break;
    case "multiply":
      result = multiply(num1, num2);
      break;
    case "divide":
      result = divide(num1, num2);
      break;
    case "modulo":
      result = modulo(num1, num2);
      break;
    case "exponentiate":
      result = exponentiate(num1, num2);
      break;
    case "sqrt":
      result = sqrt(num1);
      break;
    default:
      console.error(
        "Unknown operation: " +
          operation +
          "\nSupported: add, subtract, multiply, divide, modulo, exponentiate, sqrt"
      );
      process.exit(1);
  }

  console.log(result);
}
