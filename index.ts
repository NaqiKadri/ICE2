/** 
 * Mohammad Naqi Kadri
 * ICE 2
 * Converting Javascript to Typescript the index.js and calculator.js to index.ts and calculator.ts respectively.
*/
import * as calculator from "./calculator";

const prompt = require("prompt-sync")();

const readInput = (): void => {
  console.log("Welcome to the calculator. Choose one of the following options");
  console.log("1. add");
  console.log("2. subtract");
  console.log("3. multiply");
  console.log("4. divide");
  console.log("5. exit");

  const option: string = prompt(">> ");

  if (option !== "5") {
    console.log("Enter the first number");
    let a: number = Number(prompt(">> "));

    console.log("Enter the second number");
    let b: number = Number(prompt(">> "));

    let c: number | undefined;
    switch (option) {
      case "1": {
        c = calculator.add(a, b);
        console.log(`a + b = ${c}`);
        break;
      }
      case "2": {
        c = calculator.subtract(a, b);
        console.log(`a - b = ${c}`);
        break;
      }
      case "3": {
        c = calculator.multiply(a, b);
        console.log(`a * b = ${c}`);
        break;
      }
      case "4": {
        c = calculator.divide(a, b);
        console.log(`a / b = ${c}`);
        break;
      }
    }

    readInput();
  }
};

readInput();

console.log("Thank you for using calculator. Good Bye");
