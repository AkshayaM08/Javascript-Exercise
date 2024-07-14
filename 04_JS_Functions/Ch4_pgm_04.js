// A simple function definition and assignment

// Basic function definition and call
var sayHello;

sayHello = function (name = "World") {
    console.log("Hello, " + name + "!");
};

// Call the function to execute it
sayHello();         
sayHello("Alice");  

// Function that returns a value
var addNumbers;

addNumbers = function (a, b) {
    return a + b;
};

console.log(addNumbers(5, 3)); 


var isEven;

isEven = function (num) {
    return num % 2 === 0;
};

console.log(isEven(4)); 
console.log(isEven(7)); 


var greetUser;

greetUser = function (name, hour) {
    if (hour < 12) {
        return "Good morning, " + name + "!";
    } else if (hour < 18) {
        return "Good afternoon, " + name + "!";
    } else {
        return "Good evening, " + name + "!";
    }
};

console.log(greetUser("Diana", 9)); 
console.log(greetUser("Diana", 14)); 
console.log(greetUser("Diana", 19)); 




/* Further Adventures
 *
 * 1) Run the program.
 *
 * Nothing will appear on the console.
 * You have defined a function.
 * You have assigned the function to a variable.
 * You have not yet made the function run.
 *
 * You can make the function run by
 * typing the name of the variable it has been
 * assigned to, followed by parentheses.
 *
 * sayHello();
 *
 * 3) At the end of the program, add code to
 *    make the function run.
 *
 * 4) Run the program.
 *
 */