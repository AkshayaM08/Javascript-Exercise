// Using variables to represent a book



var bookTitle;
var bookAuthor;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);


var bookTitle1 = "The Hobbit";
var bookAuthor1 = "J. R. R. Tolkien";

console.log(bookTitle1 + " by " + bookAuthor1);

var bookTitle2 = "1984";
var bookAuthor2 = "George Orwell";

console.log(bookTitle2 + " by " + bookAuthor2);

var bookTitle3 = "To Kill a Mockingbird";
var bookAuthor3 = "Harper Lee";

console.log(bookTitle3 + " by " + bookAuthor3);



var books = [
    { title: "The Hobbit", author: "J. R. R. Tolkien" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby-Dick", author: "Herman Melville" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "The Lord of the Rings", author: "J. R. R. Tolkien" },
    { title: "Brave New World", author: "Aldous Huxley" }
];

var displayBookInfo = function (book) {
    console.log(book.title + " by " + book.author);
};

for (var i = 0; i < books.length; i++) {
    displayBookInfo(books[i]);
}



class Book {
    constructor(title, author, yearPublished, genre) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.genre = genre;
    }

    displayInfo() {
        console.log(`${this.title} by ${this.author}, published in ${this.yearPublished}. Genre: ${this.genre}`);
    }
}

var books = [
    new Book("The Hobbit", "J. R. R. Tolkien", 1937, "Fantasy"),
    new Book("1984", "George Orwell", 1949, "Dystopian"),
    new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction"),
    new Book("Pride and Prejudice", "Jane Austen", 1813, "Romance"),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Classic"),
    new Book("Moby-Dick", "Herman Melville", 1851, "Adventure"),
    new Book("War and Peace", "Leo Tolstoy", 1869, "Historical Fiction"),
    new Book("The Catcher in the Rye", "J.D. Salinger", 1951, "Realistic Fiction"),
    new Book("The Lord of the Rings", "J. R. R. Tolkien", 1954, "Fantasy"),
    new Book("Brave New World", "Aldous Huxley", 1932, "Science Fiction")
];

books.forEach(book => book.displayInfo());


class Book {
    constructor(title, author, yearPublished, genre) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.genre = genre;
    }

    displayInfo() {
        console.log(`${this.title} by ${this.author}, published in ${this.yearPublished}. Genre: ${this.genre}`);
    }
}

class BookManager {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    displayAllBooks() {
        this.books.forEach(book => book.displayInfo());
    }

    findBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }
}

var manager = new BookManager();

manager.addBook(new Book("The Hobbit", "J. R. R. Tolkien", 1937, "Fantasy"));
manager.addBook(new Book("1984", "George Orwell", 1949, "Dystopian"));
manager.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction"));
manager.addBook(new Book("Pride and Prejudice", "Jane Austen", 1813, "Romance"));
manager.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Classic"));
manager.addBook(new Book("Moby-Dick", "Herman Melville", 1851, "Adventure"));
manager.addBook(new Book("War and Peace", "Leo Tolstoy", 1869, "Historical Fiction"));
manager.addBook(new Book("The Catcher in the Rye", "J.D. Salinger", 1951, "Realistic Fiction"));
manager.addBook(new Book("The Lord of the Rings", "J. R. R. Tolkien", 1954, "Fantasy"));
manager.addBook(new Book("Brave New World", "Aldous Huxley", 1932, "Science Fiction"));

manager.displayAllBooks();

console.log("\nBooks by J. R. R. Tolkien:");
manager.findBooksByAuthor("J. R. R. Tolkien").forEach(book => book.displayInfo());




/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */