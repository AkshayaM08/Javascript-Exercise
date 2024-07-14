
var sayHello;

sayHello = function () {
    console.log("Hello, everyone!\nWelcome to the JavaScript tutorial.");
};


sayHello();
sayHello();
sayHello();


var sayHelloTwoLines;

sayHelloTwoLines = function () {
    console.log("Hello\nWorld!");
};


sayHelloTwoLines();


var printLetters;

printLetters = function () {
    var message = "Hello World!";
    for (var i = 0; i < message.length; i++) {
        console.log(message[i]);
    }
};


printLetters();


var printMessage;

printMessage = function (message, times) {
    for (var i = 0; i < times; i++) {
        console.log(message);
    }
};

printMessage("This message will repeat.", 3);


var printReverse;

printReverse = function (str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
};

printReverse("Hello World!");


var printPyramid;

printPyramid = function (height) {
    for (var i = 1; i <= height; i++) {
        var stars = '*'.repeat(i);
        console.log(stars);
    }
};

printPyramid(5);




/* Further Adventures
 *
 * 1) Change the message from the sayHello function.
 *
 * To add a line-break to a string, insert '\n'
 * e.g. "Line One\nLine Two"
 *
 * 2) Break the Hello World! message across two lines.
 *
 * 3) Create a function that prints the letters
 *    of "Hello World!" one by one down the page
 *
 */