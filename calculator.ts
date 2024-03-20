/** 
 * Mohammad Naqi Kadri
 * ICE 2
 * Converting Javascript to Typescript the index.js and calculator.js to index.ts and calculator.ts respectively.
*/
const add = (a: number, b: number): number => {
    return a + b;
  }
  
  const subtract = (a: number, b: number): number => {
    return a - b;
  }
  
  const multiply = (a: number, b: number): number => {
    return a * b;
  }
  
  const divide = (a: number, b: number): number => {
    return a / b;
  }
  
  export {
    add,
    subtract,
    multiply,
    divide
  };
  