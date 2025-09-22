console.log("Calculator v3.0 ready!");

const args = process.argv.slice(2);

const printUsage = () => {
  console.log("Usage:");
  console.log("  node Calculator/calculator.js <number> <operator> <number>");
  console.log("  node Calculator/calculator.js sqrt <number>");
  console.log("Supported operators: +, -, *, /, ^, sqrt");
};

const exitWithError = (message) => {
  console.log(`Error: ${message}`);
  printUsage();
  process.exit(1);
};

if (args.length === 0) {
  exitWithError("No operation provided.");
}

let result;

if (args[0] === "sqrt") {
  if (args.length !== 2) {
    exitWithError("Square root requires exactly one value.");
  }

  const value = Number(args[1]);

  if (Number.isNaN(value)) {
    exitWithError("Please provide a valid number for the square root.");
  }

  if (value < 0) {
    exitWithError("Cannot calculate the square root of a negative number.");
  }

  result = Math.sqrt(value);
  console.log(`√${value} = ${result}`);
  process.exit(0);
}

if (args.length !== 3) {
  exitWithError("Please provide two numbers and an operator.");
}

const num1 = Number(args[0]);
const operator = args[1];
const num2 = Number(args[2]);

if (Number.isNaN(num1) || Number.isNaN(num2)) {
  exitWithError("Both operands must be valid numbers.");
}

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      exitWithError("Division by zero is not allowed.");
    }
    result = num1 / num2;
    break;
  case "^":
    result = Math.pow(num1, num2);
    break;
  default:
    exitWithError(`Unknown operator '${operator}'.`);
}

console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
