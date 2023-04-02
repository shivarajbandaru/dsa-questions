// Q1. Program to find all pairs of an integer array whose sum is equal to a given number:
function findPairs(arr, num) {
  let pairs = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === num) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6];
const num = 7;
console.log(findPairs(arr, num));


// Q3. Program to check if two strings are a rotation of each other:
function reverseArray(arr) {
    for(let i = 0; i < arr.length / 2; i++) {
      const temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
  }
  
  // Example usage
  const arrr = [1, 2, 3, 4, 5];
  reverseArray(arrr);
  console.log(arrr);

function firstNonRepeatedChar(str) {
  const charCount = {};
  for(let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }
  for(let i = 0; i < str.length; i++) {
    const char = str[i];
    if(charCount[char] === 1) {
      return char;
    }
  }
  return null;
}

// Example usage
const strings = "aabbcceeff";
console.log(firstNonRepeatedChar(strings)); 



// Q4. Program to print the first non-repeated character from a string:
function firstNonRepeatedChar(str) {
    const charCount = {};
    for(let i = 0; i < str.length; i++) {
      const char = str[i];
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    for(let i = 0; i < str.length; i++) {
      const char = str[i];
      if(charCount[char] === 1) {
        return char;
      }
    }
    return null;
  }
  
  // Example usage
  const str = "aabbcceeff";
  console.log(firstNonRepeatedChar(str)); 


//   Q5. Program to implement the Tower of Hanoi algorithm:
  function towerOfHanoi(n, from, to, aux) {
    if(n === 1) {
      console.log(`Move disk 1 from rod ${from} to rod ${to}`);
      return;
    }
    towerOfHanoi(n - 1, from, aux, to);
    console.log(`Move disk ${n} from rod ${from} to rod ${to}`);
    towerOfHanoi(n - 1, aux, to, from);
  }
  
  // Example usage
  towerOfHanoi(3, 'A', 'C', 'B');

//   Q6. Program to convert postfix to prefix expression:
  function postfixToPrefix(postfixExp) {
    const stack = [];
    const operators = ['+', '-', '*', '/', '%', '^'];
    for(let i = 0; i < postfixExp.length; i++) {
      const char = postfixExp[i];
      if(operators.includes(char)) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const prefixExp = char + operand1 + operand2;
        stack.push(prefixExp);
      } else {
        stack.push(char);
      }
    }
    return stack.pop();
  }
  
  // Example usage
  const postfixExp = "23+4*";
  console.log(postfixToPrefix(postfixExp)); 


// Q7. Program to convert prefix expression to infix expression:
  function prefixToInfix(prefixExp) {
    const stack = [];
    const operators = ['+', '-', '*', '/', '%', '^'];
    for(let i = prefixExp.length - 1; i >= 0; i--) {
      const char = prefixExp[i];
      if(operators.includes(char)) {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const infixExp = `(${operand1}${char}${operand2})`;
        stack.push(infixExp);
      } else {
        stack.push(char);
      }
    }
    return stack.pop();
  }
  
  // Example usage
  const prefixExp = "*+234";
  console.log(prefixToInfix(prefixExp));

//   Q8. Program to check if all the brackets are closed in a given code snippet:
  function checkBrackets(code) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
    for(let i = 0; i < code.length; i++) {
      const char = code[i];
      if(openingBrackets.includes(char)) {
        stack.push(char);
      } else if(closingBrackets.includes(char)) {
        const index = closingBrackets.indexOf(char);
        const topChar = stack.pop();
        if(topChar !== openingBrackets[index]) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  
  // Example usage
  const codeSnippet = "function add(a, b) { return a + b; }";
  console.log(checkBrackets(codeSnippet));

//   Q9. Program to reverse a stack:
  function reverseStack(stack) {
    if(stack.length === 0) {
      return stack;
    }
    const temp = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, temp);
    return stack;
  }
  
  function insertAtBottom(stack, item) {
    if(stack.length === 0) {
      stack.push(item);
    } else {
      const temp = stack.pop();
      insertAtBottom(stack, item);
      stack.push(temp);
    }
  }
  
  // Example usage
  const stacks = [1, 2, 3, 4, 5];
  reverseStack(stacks);
  console.log(stacks); 

//   Q10. Program to find the smallest number using a stack:
  class Stack {
    constructor() {
      this.items = [];
      this.minStack = [];
    }
    
    push(item) {
      this.items.push(item);
      if(this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(item);
      }
    }
    
    pop() {
      const item = this.items.pop();
      if(item === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
      return item;
    }
    
    getMin() {
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(5);
  stack.push(10);
  stack.push(3);
  stack.push(8);
  console.log(stack.getMin()); // Output: 3
  stack.pop();
  console.log(stack.getMin()); // Output: 3
  stack.pop();
  console.log(stack.getMin());
  
  
  
  
  