//Form inputs

let username;

document.getElementById("mySubmit").onclick= function(){
    username = document.getElementById("fname").value;
    document.getElementById("heading1").textContent = `Hello ${username}`
}

//Type conversions
//Changes input to different datatypes
let age =window.prompt("How old are you?");
age = Number(age);
age+=1;

console.log(age,typeof age);

let a = "two hundred point five five five";
let b = 250.55;
let c = "Boy";

a= String(a);
b= Number(b);
c= Boolean(c);




console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

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


//Static- Keyword that defines properties or methods that belong to a class.

// class circle{
//     static PI= 3.14;
//     static getCircumfrence(radius){
//         return 2*this.PI*radius;
//     }

// }
// console.log(circle.getCircumfrence(10));

// class User{
//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }
// }
// const user1 = new  User("John");

// console.log(user1.username)


// //Inheritance- allows a child to inherit properties and methods from an existing class.

// class Animal{
//     alive= true;
//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`ThiS ${this.name} is sleeping`);
//     }
      
// }

// class Rabbit extends Animal{
//     name= "rabbit";

// }

// class Fish extends Animal{
//     name="fish";
// }
// class Hawk extends Rabbit{
// name="hawk";
// }

// const rabbit = new Rabbit();
// const fish= new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// fish.eat();


//Super - keyword is usedinclasses to call the constructor or access the properties and methods of a parent.

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    move(speed){
        console.log(`The ${this.name} is moving at ${speed} km/h`);
    }
}

class Rabbit extends Animal{
    constructor(name,age,hopSpeed){
        super(name,age);
        this.hopSpeed = hopSpeed 
    }
    hop(){
        super.move(this.hopSpeed);
    }
}

class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }


}

class Hawk extends Rabbit{
    constructor(name,age,flyspeed){
        super(name,age);
        this.flyspeed= flyspeed;

    }


}

const rabbit = new Rabbit("Rabbit", 2, 10);
const fish = new Fish("Fish", 1, 5);
const hawk = new Hawk("Hawk", 3, 20);


rabbit.hop();


//set()  and get()

class Person{
    constructor(firstname,lastname,age){
        this.firstName = this.firstName;
        this.lastName = this.lastName;
        this.age = this.age;  
    }

    set firstName( newFirstName){
        if(typeof newFirstName === "string"&& newFirstName.length>0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
}
    set age(newAge){
        if(typeof newAge === "number" && newAge>=0){
            this._age = newAge;
    }
    else{
        this.console.error("Age must be  a non-negative number");
    }
}

get firstName(){
    return this._firstName;

}

}
const person = new Person("Charles","Murimi",22);
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)










//class parentname{}

//class classname extends parentname{}