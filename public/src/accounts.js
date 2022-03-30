function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA,accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total,book) => { 
    for( let i in book.borrows) {
    if( account.id === book.borrows[i].id) total ++;
  }
 return total;
}, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  let array = [];
  books.filter((book) => {
    for (let i in book.borrows) {
      if (account.id === book.borrows[i].id && book.borrows[i].returned === false) {
        array.push(book);
      }
    }
  })
  for (let j in array) {
    for (let a in authors) {
      if (array[j].authorId === authors[a].id) {
        array[j] = {
          id: array[j].id,
          title: array[j].title,
          genre: array[j].genre,
          authorId: array[j].authorId,
          author: authors[a],
          borrows: array[j].borrows,
        }
      }
    }
  }
  return array;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

