// Using a variable as a property value

var book;
var bookName;


bookName = "The Adventures of Tom Sawyer";
book = {
    title: bookName
};


console.log(book);


bookName = "Huckleberry Finn";


book = {
    title: bookName
};


console.log(book); 




/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) At the console prompt, type 'book'
 *    and press enter.
 *
 * The book object should be displayed on the console.
 * Its title property should have the same
 * value as the bookName variable.
 *
 * 3) Change the value of the bookName variable
 *    and try steps 1 and 2 again.
 *
 */