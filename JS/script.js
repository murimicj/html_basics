// // function secondButton(){
// //     alert('This is for external JS file.');
// // }
                    
// // let myCollection = [20,'web',1.234,1.5,'student']

// // console.log(myCollection[4])

// // let person = {
// //     name: 'John',
// //     age: 30,
// //     career:  'student',
// //     height: 6.5,
// //     language: 'French',
// //     gender: 'Male',
// //     email:  'john@gmail.com'
// // }
// // }

// // console.log(person)

// // //dot notation- objectName.name
// // console.log(person.name)

// // //bracket notation- objectName["age"]
// // console.log(person["age"])

// // //Operators
// // //Arithmetic operators-for mathematical calculations
// // //Assignment operators-for assigning values to variables

// // let a=2;
// // let b=3;

// // console.log(a+b);
// // console.log(a-b);
// // console.log(a*b);
// // console.log(a%b); //returns remainder after divisions

// //comparison operators- used to compare two values
// // console.log(a==b) //equal to (value comparison)

// // console.log(a===b) //strict equal to(Value&datatype)

// // console.log(a!=b) //not equal to(value)
// // console.log(a!==b)//strict not equal to (value&datatype)
// // console.log(a>b)//greater than
// // console.log(a<b)//less than

// //logical operators
// //AND(&&),OR(||),NOT(!)
// // console.log(a>b && a!=b) //AND operator
// // let isAdmin = true;
// // let hasAccess = true;

// // //AND && (both expressions must evaluate to true)
// // console.log(isAdmin && hasAccess) //true

// // //OR - ||(either of the expressions must  evaluate to true)
// // console.log(isAdmin || hasAccess) //true

// // //NOT - !(negates anexpression)
// // console.log(!isAdmin); //false

// //naming conventions

// // camelCase - firstName, studentFirstName

// //snake_case- last_name,  student_first_name

// //lower case- name, email, lastname

// //uppercase- PI, MAXIMUM_AGE

// //PascalCase - 

// //Functions-block of reusable code

// /*function  functionName {inpu1, input2,.....}{
//         ///Statement to be executed
//         ///return
// }

// Write a function that will return the square of a number
// */
// // 1.Using function keyword
// // function square(number) {
// //     return  number*number;
// // }
// // console.log(square(10))

// /*  2.Using function expression-the function is assigned as a value to a variable

// */

// // let greet= function(name){
// //     console.log('Hello,' +name);
// // }; 
// // greet('John')

// /*
// 3.Arrow functions
// */



// // let helloworld = (name)=>{
// //     console.log('Hello world.This is '+name+',I have written my first arrow function.')
// // }
// // helloworld('John');

// // // Data Types
// // // // Number: Rep numeric values 
// // // // string: Rep text values


// // //functionkeyword

// // //Function that will calculate total amount (Inclusive tax )of an item-10%

// // let calculateTotal = (price) => {
// //     let tax = price * 0.1;
// //     let total = price + tax;
// //     return total;
// //     }


// //     //Function Keyword
// // function getTotal(a){
// //     const tax = 0.1

// //     return (a+(a*tax))
// // }

// // console.log(getTotal(1000))

// // //   varible      = value
// // let getTaxAmount = function(a){let tax = 0.1; return tax*a;}

// // console.log(getTaxAmount(1000))

// // let greet = (person)=>{
// //     return"Great job,"+person+"!"
// // }

// // console.log(greet("Moses"))


// //Document Object Model(DOM)-rep of the HTML structure as a tree of objects
// //getElementById
// //getElementsByClassName
// //getElementsByTagName
// //querySelector/querySelectorAll: selects elements using CSS selectors
// //events are actions one the browser

// /**1.Document
//  * 2.Select element - getElementById()
//  * 3.Add an event listener- addEventlistener()
//  * 4.Define function for execution
//  */
// // 
// // document.getElementById('p-one').addEventListener('click',function(){
// //     alert('You clicked on a paragraph!');
// // })


// // //Declared a variable that is holding my paragraph element
// // let paragraph = document.getElementById('p-one');

// //define a function changeParagraph(){ to change contents and structure
// // function changeParagraph(){
// //     paragraph.style.color = 'white';
// //     paragraph.style.fontSize = '40px';
// //     paragraph.style.backgroundColor = 'black';
// //     paragraph.innerHTML = 'I have changed this text using javascript';

// // }

// // paragraph.addEventListener('mouseover',changeParagraph);


// //Control structures- determine the flow of a program's execution based on condition or repetitive tasks.
// //Conditionaal statements
// //1.if statement
// // if(condition){
// //     //statements
// // }
// let age=25;

// if(age>=18){
//     console.log('You are an adult')
// }







// //if...else

// let gender = 'Male'
// if (gender=='Male'){
//     //true outcome
//     console.log('You are a male')
// } else{
//     //false outcome
//     console.log('You are a female')
// }

// //3.Ternary operator - short hand for the if....else
//                         //true:false
// // var variablename = (condition)?"": ""

// var message = (age<18)?"You are a minor.":"You are an adult."
// console.log(message)

// // //4.if else if
// // if(condition1){

// // }else if(condition 2){

// // }else if(condition 3){
// //     //true outcome based on the condition
// // }else if(condition 4){
// //     //true outcome based on the condition
// // }else{
// //     //false outcome
// // }


// //switch statement
// //Conditions evaluated using cases

// // switch(variable){
// //     case condition/expression :
// //     //statement to be executed
// //     break //stops the execution

// // default ://if all the conditions have not been met
// // }

// let car = 'Toyota'

// switch(car){
//     case "Nissan":
//         console.log('Good car, poor record')
//         break
//     case "Toyota":
//         console.log('Good car, Goodresale value')
//         break
//     case "Mercedes":
//         console.log('Excellent car')
//         break
//     default:
//         console.log('Car not found')

// }

// //Loops- repeatedly execute a block of code until a condition is met.
// // //1.for loop
// //init- starting value
// //condition- condition to be met
// //counter/iteration increasing or decreasing counter(Incrementaloperator ++, decremental--)
// // for(initialization; condition ; counter/iteration){

// // }

// for(let number= 15;number >=1; number--){
// console.log(number)
// }

// // //while loop
// // while(conditions){

// // }
let a =0;
while(a<10){
    console.log(a); 
    if(a==5) break
    a++;
} 

// //3. do ....while

// let b = 5;

// do{
//     console.log('Loop number: ',b);
// }while(b<5)

// //for..in and for...of

// //array holding countries
// let cutlery = ['spoon','fork']
// console.log(cutlery)
//     //push()-for adding item to the end  of the array
//     //unshift()-add an item to the beginning
// cutlery.push('knife')
// cutlery.unshift('spatula')
// console.log(cutlery)

// //pop-emoves item from end
// //shift()-removes item from the beginning
// // cutlery.pop()
// // cutlery.shift()
// // cutlery.shift()
// // console.log(cutlery)

// //for each()
// cutlery.forEach(function(item){
//     console.log(item)
// })

// //array holding countries
// let countries=["Kenya","Nigeria","SouthAfrica","Tanzania"]


// //variable holding the dropdown
// let dropdown = document.getElementById('countries'); 
// //iterate through the countries using the forEach() method
// countries.forEach(country=>{
//     const option=document.createElement('option');
//     option.value = country;
//     option.text = country;
//     dropdown.appendChild(option);
// })

//class = (ES6 feature) provides a more structured and cleaner way to 
//               work with objects compared to traditional constructor functions
//               ex. static keyword, encapsulation, inheritance

// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.50);
// const product3 = new Product("Underwear", 100.00);

// product1.displayProduct();

// const total = product1.calculateTotal(salesTax);
// console.log(`Total price (with tax): $${total.toFixed(2)}`);

//UserInput
//Way 1
// let username;

// username= window.prompt("What is your username?");
// console.log(username);

// //Way 2
// let username;

// document.getElementById("mySubmit").onclick= function(){
//     username = document.getElementById("name").value;
//     console.log(username);
// }
