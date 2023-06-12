// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:
// */

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
for(let keys in person3){
    console.log(person3[keys])
}


//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class\

class Person {
    constructor(names, age){
        this.names = names
        this.age = age

    }
    // Use an arrow to create the printInfo method
printinfo = (names, age) =>{
    return `${this.names} is ${this.age} years old`
}
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age        
ageUp = (age) =>{
    this.age+=3;
    return `${this.names} is ${this.age} years old`
}

}


const person =new Person('Sam', 17)
const person2 =new Person('Alex', 22)
console.log(person.printinfo())
console.log(person2.ageUp())






// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
    */
   fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
   .then((response)  =>{
    return response.json()
   })
   .then((data)  =>{
   return console.log(data)
   })
   
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.d
// Happy Coding!


function squareDigits(num){
    let num_switch = String(num)
    let new_num = ''
    for(let i = 0; i < num_switch.length; i++){
        new_num += num_switch[i]**2
    }
    return Number(new_num)
  }


//   Write a function that takes an array of numbers and returns the sum of the numbers. 
//   The numbers can be negative or non-integer. 
//    the array does not contain any numbers then you should return 0.


function sum (numbers) {
    "use strict";
    if(numbers.length ===0){
        return 0
    };
    return numbers.reduce((pv, cv) => pv + cv)

    
    
};