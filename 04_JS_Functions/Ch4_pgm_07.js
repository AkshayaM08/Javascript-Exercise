// Using the findTotal function to display a calculation


var number1 = 500;
var number2 = 250;
var number3 = 30;


var findTotal;

findTotal = function (num1, num2, num3, operation) {
    if (operation === '+') {
        return num1 + num2 + num3;
    } else if (operation === '-') {
        return num1 - num2 - num3;
    } else if (operation === '*') {
        return num1 * num2 * num3;
    } else {
        return "Invalid operation";
    }
};

console.log(`${number1} + ${number2} + ${number3} = ${findTotal(number1, number2, number3, '+')}`);  
console.log(`${number1} - ${number2} - ${number3} = ${findTotal(number1, number2, number3, '-')}`);  
console.log(`${number1} * ${number2} * ${number3} = ${findTotal(number1, number2, number3, '*')}`);  
console.log(findTotal(number1, number2, number3, '/'));  


var findTotalAdvanced;

findTotalAdvanced = function (num1, num2, num3) {
    return {
        sum: num1 + num2 + num3,
        difference: num1 - num2 - num3,
        product: num1 * num2 * num3
    };
};

var results = findTotalAdvanced(number1, number2, number3);
console.log(`Sum: ${results.sum}`);
console.log(`Difference: ${results.difference}`);
console.log(`Product: ${results.product}`);


var findTotalWithCallback;

findTotalWithCallback = function (num1, num2, num3, callback) {
    var result = num1 + num2 + num3;
    callback(result);
};

findTotalWithCallback(number1, number2, number3, function (result) {
    console.log(`The total is: ${result}`);
});


findTotalWithCallback(number1, number2, number3, (result) => {
    console.log(`The total using arrow function is: ${result}`);
});




/* Further Adventures
 *
 * 1) Change number1 and number2 and run the program
 *
 * 2) Add a third variable, number3, and assign it a value
 *
 * 3) Update the findTotal function to add the three numbers
 *
 * 4) Update the console.log line to show the new calculation
 *
 */