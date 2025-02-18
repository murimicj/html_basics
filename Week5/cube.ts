// /**TypeScript is a strongly typed superset of JavaScript that adds static typing to the language.
//  *  Developed by Microsoft, it is designed to make it easier to
//  *  build large-scale applications by catching errors at compile time and improving developer productivity.
//  * 
//  * Key Features of TypeScript:
// Static Typing:

// TypeScript allows you to specify types (e.g., string, number, boolean, etc.) 
// for variables, function parameters, and return values.

//  *  */
// let age: number = 25; // Ensures 'age' can only hold numbers.

// /** Type Inference:

// If you don’t explicitly define a type, TypeScript infers it from the context.

// When creating a variable, there are two main ways TypeScript assigns a type:

// Explicit
// Implicit
// In both examples below firstName is of type string

// Explicit Type
// Explicit - writing out the type:

// let firstName: string = "Dylan";

// */

// let name = "John"; // TypeScript infers 'name' as a string.

// /**
//  * Interfaces and Types:

// Define the shape of objects and enforce structure
//  */

// interface User {
//     id: number;
//     name: string;
//   }
  
//   const user: User = { id: 1, name: "Alice" };

// /**Classes and Object-Oriented Features:

// TypeScript extends JavaScript’s class-based object-oriented programming with features like access modifiers (private, protected, public), interfaces, and inheritance. */

// class Animal {
//     constructor(public name: string) {}
  
//     move() {
//       console.log(`${this.name} is moving.`);
//     }
//   }
  
//   class Dog extends Animal {
//     bark() {
//       console.log("Woof!");
//     }
//   }

// /**Advanced Features:

// Generics:
// typescript
// Copy code
//  */

// function identity<T>(arg: T): T {
//     return arg;
//   }
 
// /**Enums */
// enum Color {
//     Red,
//     Green,
//     Blue,
//   }
//   let c: Color = Color.Green;
  
/**TypeScript Compiler (tsc):

Transpiles .ts files into JavaScript (.js) that runs in any JavaScript environment.
Example: Convert index.ts to index.js using:
bash
Copy code

tsc index.ts

Getting Started with TypeScript:
Install TypeScript:
bash
Copy code
npm install -g typescript

Create a TypeScript File:
Create a file named example.ts with the following content
 
Compile the file
tsc example.ts


TypeScript is a strongly typed superset of JavaScript that adds static typing to the language. Developed by Microsoft, it is designed to make it easier to build large-scale applications by catching errors at compile time and improving developer productivity.

Key Features of TypeScript:
Static Typing:

TypeScript allows you to specify types (e.g., string, number, boolean, etc.) for variables, function parameters, and return values.
Example:
typescript
Copy code
let age: number = 25; // Ensures 'age' can only hold numbers.
Type Inference:

If you don’t explicitly define a type, TypeScript infers it from the context.
typescript
Copy code
let name = "John"; // TypeScript infers 'name' as a string.
Interfaces and Types:

Define the shape of objects and enforce structure.
typescript
Copy code
interface User {
  id: number;
  name: string;
}

const user: User = { id: 1, name: "Alice" };
Classes and Object-Oriented Features:

TypeScript extends JavaScript’s class-based object-oriented programming with features like access modifiers (private, protected, public), interfaces, and inheritance.
typescript
Copy code
class Animal {
  constructor(public name: string) {}

  move() {
    console.log(`${this.name} is moving.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}
Advanced Features:

Generics:
typescript
Copy code
function identity<T>(arg: T): T {
  return arg;
}
Enums:
typescript
Copy code
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
Modules and Namespaces: TypeScript supports modular programming with ES6 imports and exports.
TypeScript Compiler (tsc):

Transpiles .ts files into JavaScript (.js) that runs in any JavaScript environment.
Example: Convert index.ts to index.js using:
bash
Copy code
tsc index.ts
Integration with IDEs:

Provides enhanced developer tools, including autocompletion, type-checking, and refactoring capabilities.
Getting Started with TypeScript:
Install TypeScript:
bash
Copy code
npm install -g typescript
Create a TypeScript File:
Create a file named example.ts with the following content:
typescript
Copy code
const greeting: string = "Hello, TypeScript!";
console.log(greeting);
Compile and Run:
Compile the file:
bash
Copy code
tsc example.ts
Run the compiled JavaScript:
bash
Copy code
node example.js
Why Use TypeScript?
Improved Readability: Helps maintain a clear structure in complex applications.
Error Prevention: Catches common errors during development.
Compatibility: Works with existing JavaScript libraries and frameworks.
Who Uses TypeScript?
TypeScript is widely adopted by companies like Microsoft, Google, and Slack and is a core language for frameworks like Angular.


There are three main primitives in JavaScript and TypeScript.

boolean - true or false values
number - whole numbers and floating point values
string - text values like "TypeScript Rocks"
There are also 2 less common primitives used in later versions of Javascript and TypeScript.

bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
symbol are used to create a globally unique identifier.
*/

let greeting: string = "Hello, TypeScript!";
console.log(greeting);


//Array

/**const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

//Readonly
const names: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?

*/













/**1. Array of Specific Type
You can define arrays where all elements must be of a specific type:

typescript
Copy code
// Using square brackets
let numbers: number[] = [1, 2, 3, 4, 5];

// Using the Array generic type
let strings: Array<string> = ["TypeScript", "JavaScript", "Python"];
2. Mixed Type Arrays
Arrays can contain multiple types if you define a union type:

typescript
Copy code
let mixed: (number | string)[] = [1, "hello", 2, "world"];
3. Readonly Arrays
A readonly array ensures that the array cannot be modified after creation:

typescript
Copy code
const readonlyArray: readonly number[] = [1, 2, 3];
// readonlyArray.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
4. Array of Objects
You can have arrays of objects with specific structures:

typescript
Copy code
interface User {
  id: number;
  name: string;
}

let users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
Common Array Operations
1. Adding Elements
typescript
Copy code
let fruits: string[] = ["Apple", "Banana"];
fruits.push("Orange"); // Adds to the end
fruits.unshift("Mango"); // Adds to the start
2. Removing Elements
typescript
Copy code
let fruits: string[] = ["Apple", "Banana", "Orange"];
fruits.pop(); // Removes "Orange" (from the end)
fruits.shift(); // Removes "Apple" (from the start)
3. Iterating Over Arrays
typescript
Copy code
let numbers: number[] = [1, 2, 3, 4];

// Using for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Using for..of
for (let num of numbers) {
  console.log(num);
}

// Using forEach
numbers.forEach((num) => console.log(num));
4. Mapping and Filtering
typescript
Copy code
let numbers: number[] = [1, 2, 3, 4, 5];

// Map: Apply a function to each element
let doubled = numbers.map((num) => num * 2); // [2, 4, 6, 8, 10]

// Filter: Create a new array based on a condition
let even = numbers.filter((num) => num % 2 === 0); // [2, 4]
5. Finding Elements
typescript
Copy code
let fruits: string[] = ["Apple", "Banana", "Orange"];

// Find the first element that matches the condition
let found = fruits.find((fruit) => fruit === "Banana"); // "Banana"

// Check if an element exists
let exists = fruits.includes("Apple"); // true
6. Sorting
typescript
Copy code
let numbers: number[] = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b); // [1, 2, 3, 4, 5]

let fruits: string[] = ["Banana", "Apple", "Orange"];
fruits.sort(); // ["Apple", "Banana", "Orange"]
Tuple Arrays
In TypeScript, tuples are arrays with fixed types and lengths:

typescript
Copy code
let person: [string, number] = ["Alice", 25];

// Tuple array
let people: [string, number][] = [
  ["Bob", 30],
  ["Carol", 35],
];
Multidimensional Arrays
You can define arrays with multiple dimensions:

typescript
Copy code
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][2]); // 6
Utility Methods
Here are some commonly used methods with arrays:

Method	Description	Example
concat	Joins two or more arrays.	[1, 2].concat([3, 4]) → [1, 2, 3, 4]
slice	Extracts a portion of the array.	[1, 2, 3].slice(0, 2) → [1, 2]
splice	Adds/removes elements at specific positions.	arr.splice(1, 1, "new")
indexOf	Returns the first index of an element.	arr.indexOf(2)
join	Combines elements into a string.	[1, 2, 3].join("-") → "1-2-3"
reduce	Reduces array to a single value (e.g., sum).	[1, 2, 3].reduce((a, b) => a + b, 0) → 6
Example Code
Here’s an example that combines many of the features:

typescript
Copy code
// Array of numbers
let scores: number[] = [85, 90, 78, 92];

// Add a new score
scores.push(88);

// Filter scores greater than 80
let highScores = scores.filter((score) => score > 80);

// Double the scores
let doubledScores = highScores.map((score) => score * 2);

console.log("Original Scores:", scores);
console.log("High Scores:", highScores);
console.log("Doubled Scores:", doubledScores); */