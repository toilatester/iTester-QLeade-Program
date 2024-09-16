const library = {
    books: [],
    addBook(name, author, ISBN) {
        this.books.push({title:name,author: author, ISBN: ISBN});
        console.log("Book added");
    },
    removeBook(name) {
        this.books=this.books.filter(book=>book.title!=name)
    },

    searchBook(name) {
        const foundBook = this.books.find(book => book.title === name);

        if (foundBook) {
            return foundBook;
        } else {
            console.log(`Book not found.`);
            return null;
        }
    }
};

library.addBook('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748');
library.addBook('JavaScript: The Good Parts p2', 'Douglas Crockford', '9780596517748');



console.log(library.searchBook('JavaScript: The Good Parts'))


library.removeBook("JavaScript: The Good Parts")

const searchedBook2 = library.searchBook('JavaScript: The Good Parts');


