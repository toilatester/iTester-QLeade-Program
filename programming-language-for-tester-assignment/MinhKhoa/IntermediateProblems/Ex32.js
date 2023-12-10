let library = [];

function addBook(title, author, ISBN){
    const book = {
        title: title,
        author: author,
        ISBN: ISBN
    };

    library.push(book);
}

function removeBook(title){
    let index = library.findIndex(book => book.title === title);
  if (index !== -1) {
    const removedBook = library.splice(index, 1)[0];
    console.log(`${removedBook.title} by ${removedBook.author} removed from the library.`);
  } else {
    console.log(`${title} is not found in the library.`);
  }
}
// 
// function removeBook(title) {
  // const removedBook = library.find(book => book.title === title);
  // if (removedBook) {
    // this.book = library.filter(book => book.title !== title);
    // console.log(`Removed "${removedBook.title}" by ${removedBook.author} from the library.`);
  // } else {
    // console.log(`Book with title ${title} not found in the library.`);
  // }
// }
// 
function searchBook(title){
    const book = library.find(book => book.title === title);
    if(book){
        console.log(`Book Found: ${title} by ${book.author}`);
    return book;
  } else {
        console.log(`${title} is not found in the library.`);
    return null;
  }
}

addBook('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748');
addBook('Eloquent JavaScript', 'Marijn Haverbeke', '9781593279509');
addBook('You Don\'t Know JS', 'Kyle Simpson', '9781491914915');

searchBook('JavaScript: The Good Parts');
removeBook('Eloquent JavaScript');
searchBook('Eloquent JavaScript');