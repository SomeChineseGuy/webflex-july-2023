/*
  isBalance
*/

const isBalanced = (str) => { 
  // outliers
  // check length if odd, return false
  // Storing the input values in a variable
  // let num = 0
  // convert str into array because arrays have more helpers 
  // loop trough array
 
  // { === + 1
  // } === - 1
  // in the loop everytime we check the num, if it is ever -1 we return false
  // at the end of the loop if num === 0, return true
  // else return false

}

console.log(isBalanced("{{{}}}")); // true
console.log(isBalanced("}}}{{{")); // false
console.log(isBalanced("{{{}}")); // false
console.log(isBalanced("{{}}}")); // false

console.log(isBalanced("{}{}{{}}")); // true

console.log(isBalanced("{}}{{{}}")); // true