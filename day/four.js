var Book = /** @class */ (function () {
    function Book(bookId, bookTitle, author, publishYear) {
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.author = author;
        this.publishYear = publishYear;
    }
    Book.prototype.display = function () {
        console.log("Book Details: ");
        console.log("Book Id: " + this.bookId);
        console.log("Book Title: " + this.bookTitle);
        console.log("Book Author: " + this.author);
        console.log("Book Publish Year: " + this.publishYear);
    };
    return Book;
}());
var b1 = new Book(1, "400 Days", "Chethan Bhagat", 2013);
b1.display();
