console.log("Calculator v2.0 ready!");

// calculator.js

// Get numbers from the command line arguments
const num1 = Number(process.argv[2]);
const operator = process.argv[3];
const num2 = Number(process.argv[4]);

let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  console.log("Unknown operator! Use +, -, * or /");
  process.exit(1);
}

console.log(`${num1} ${operator} ${num2} = ${result}`);
