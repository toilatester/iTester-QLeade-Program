/**
 * 32.  **Library Management System**
   - Problem: Design a simple library management system with JavaScript objects where you can add books, remove books, and search for a book by title. Each book has a `title`, `author`, and `ISBN` number.
   - Example Input: `addBook('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748'), searchBook('JavaScript: The Good Parts')`
   - Example Output: `{ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', ISBN: '9780596517748' }`
   - Explanation: The `addBook` function adds a new book to the system, and `searchBook` returns the details of the book if found.
 */
var libManagementSys = [];
function addBook(title, author, ISBN){
  let book = {
    title: title,
    author: author,
    ISBN: ISBN
  }
  libManagementSys.push(book);
}
function removeBook(title){
  for(let i = 0; i < libManagementSys.length; i++){
    if(libManagementSys[i].title == title){
      libManagementSys.splice(i,1);
    }
  }
  console.log(libManagementSys);
}
function searchBook(title){
  for(let i = 0; i < libManagementSys.length; i++){
    if(libManagementSys[i].title == title){
      console.log(libManagementSys[i]);
    }
  }
}
addBook('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748');
addBook('JavaScript: The Good Parts1', 'Douglas Crockford1', '97805965177481');
addBook('JavaScript: The Good Parts2', 'Douglas Crockford2', '97805965177482');
addBook('JavaScript: The Good Parts3', 'Douglas Crockford3', '97805965177483');
console.log(libManagementSys);
removeBook('JavaScript: The Good Parts');
searchBook('JavaScript: The Good Parts1');