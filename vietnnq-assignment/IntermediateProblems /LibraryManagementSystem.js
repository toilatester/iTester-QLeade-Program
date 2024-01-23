const library = {
    books: [],

    addBook(title, author, ISBN) {
        const newBook = {
            title,
            author,
            ISBN,
        };
        this.books.push(newBook);
        console.log(`Book added: ${title} by ${author}`);
    },

    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);

        if (index !== -1) {
            const removedBook = this.books.splice(index, 1)[0];
            console.log(`Book removed: ${removedBook.title} by ${removedBook.author}`);
        } else {
            console.log(`Book not found: ${title}`);
        }
    },

    searchBook(title) {
        const foundBook = this.books.find(book => book.title === title);

        if (foundBook) {
            console.log('Book found:', foundBook);
            return foundBook;
        } else {
            console.log(`Book not found: ${title}`);
            return null;
        }
    },
};

library.addBook('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748');
library.searchBook('JavaScript: The Good Parts');
library.removeBook('JavaScript: The Good Parts');