class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author, bookId) {
        const newBook = { title, author, bookId };
        this.books.push(newBook);
        console.log(`Book added: ${title} by ${author}`);
    }

    searchBook(title) {
        const foundBook = this.books.find(book => book.title === title);
        if (foundBook) {
            console.log('Book found:', foundBook);
            return foundBook;
        } else {
            console.log('Book not found.');
            return null;
        }
    }

    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log('Book removed:', title);
        } else {
            console.log('Book not found.');
        }
    }
}

const library = new Library();
library.addBook('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748');
library.searchBook('JavaScript: The Good Parts');
library.searchBook('Doraemon and Pikachu');
