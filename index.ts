#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operations",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Modulus",
      "Exponentation",
    ],
  },
]);
// CONDITIONAL STATMENTS
if (answer.operator === "Addition") {
  console.log(Number(answer.firstNumber) + Number(answer.secondNumber));
} else if (answer.operator === "Subtraction") {
  console.log(Number(answer.firstNumber) - Number(answer.secondNumber));
} else if (answer.operator === "Multiplication") {
  console.log(Number(answer.firstNumber) * Number(answer.secondNumber));
} else if (answer.operator === "Division") {
  console.log(Number(answer.firstNumber) / Number(answer.secondNumber));
} else if (answer.operator === "Modulus") {
  console.log(Number(answer.firstNumber) % Number(answer.secondNumber));
} else if (answer.operator === "Exponentation") {
  console.log(Number(answer.firstNumber) ** Number(answer.secondNumber));
} else {
  console.log("please select valid operator")
}
