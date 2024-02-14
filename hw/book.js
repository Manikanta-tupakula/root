class Book{
    constructor(bookId, bookTitle, author,publishedYear){
        this.bookId=bookId;
        this.bookTitle=bookTitle;
        this.author=author;
        this.publishedYear=publishedYear;
    }
    showDetails(){
        console.log(`Book Details :: Id = ${this.bookId} Title = ${this.bookTitle} Author = ${this.author} Published year = ${this.publishedYear}`);
    }
}
let book1= new Book(101,"400 Days","Chethan Bhagat","2019");
let book2= new Book(102,"Atomic Habits","James Clear","2017");
let book3= new Book(103,"The Spanish-Love Deception","Elena Arvas","2022");
let book4= new Book(104,"The Midnight Library","Matt Haig","2019");
book1.showDetails();
book2.showDetails();
book3.showDetails();
book4.showDetails();
