class Book{
    bookId:number;
    bookTitle:string;
    author:string;
    publishYear:number;
    constructor(bookId:number,bookTitle:string,author:string,publishYear:number){
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.author = author;
        this.publishYear = publishYear;
        }
        display():void{
        console.log("Book Details: ");
        console.log("Book Id: "+this.bookId);
        console.log("Book Title: "+this.bookTitle);
        console.log("Book Author: "+this.author);
        console.log("Book Publish Year: "+this.publishYear);
        }
        }
        const b1 = new Book(1,"400 Days","Chethan Bhagat",2013);
        b1.display();
