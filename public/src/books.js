function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let arr = [[], []];
  for (let i in books) {
    books[i].borrows[0].returned ? arr[1].push(books[i]) : arr[0].push(books[i]);
  }
  return arr;
}

function getBorrowersForBook(book, accounts) {
  let arr = [];
  let getBorrower = book.borrows;
  getBorrower.forEach((borrows) =>{
    let account = accounts.find((acc) => acc.id === borrows.id);
    let obj  = account;
    obj['returned'] =  borrows.returned;
    arr.push(obj);
   
  })
  return arr.slice(0,10);
}






module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};



