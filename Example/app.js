// Function to add two numbers
function add(num1, num2) {
  return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
  return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero";
  } else {
    return num1 / num2;
  }
}

// Example usage:
let result = add(5, 3);
console.log("Addition:", result);

result = subtract(10, 4);
console.log("Subtraction:", result);

result = multiply(6, 7);
console.log("Multiply:", result);

result = divide(20, 5);
console.log("Division:", result);

result = divide(10, 0);
console.log("Division by zero:", result);
