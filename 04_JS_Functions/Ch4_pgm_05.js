// Two more function definitions and assignments

// Declare variables
var number1;
var number2;
var result;

// Assign values to the variables
number1 = 5;
number2 = 10;

// Define the findTotal function with parameters
var findTotal;

findTotal = function (num1, num2) {
    return num1 + num2;
};

// Calculate the total
result = findTotal(number1, number2);

// Display the result on the console
console.log("The total is:", result);  // Outputs: The total is: 15

// Define the displayMenu function with options
var displayMenu;

displayMenu = function (options) {
    console.log("Please choose an option:");
    for (var i = 0; i < options.length; i++) {
        console.log("(" + options[i].value + ") " + options[i].text);
    }
};

// Define menu options
var menuOptions = [
    { value: 1, text: "Print log" },
    { value: 2, text: "Upload file" },
    { value: 9, text: "Quit" }
];

// Call the displayMenu function
displayMenu(menuOptions);

// Define a function to handle user choices
var handleUserChoice;

handleUserChoice = function (choice) {
    switch (choice) {
        case 1:
            console.log("Log has been printed.");
            break;
        case 2:
            console.log("File has been uploaded.");
            break;
        case 9:
            console.log("Goodbye!");
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
};

// Call the function to handle a user choice
handleUserChoice(1);  // Outputs: Log has been printed.
handleUserChoice(9);  // Outputs: Goodbye!
handleUserChoice(5);  // Outputs: Invalid choice. Please try again.




/* Further Adventures
 *
 *
 * 1) Declare number1, number2 and result variables.
 *
 * 2) Assign values to the variables.
 *
 * 3) Run the findTotal function by writing its name
 *    followed by parentheses: findTotal();
 *
 * 4) Display the result on the console.
 *
 * 5) Run the displayMenu function.
 *
 */