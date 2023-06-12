const { router } = require("../app");

let listBooks = [
  {
    title: 'El horror de Dunwich',
    genre: 'Horror',
    author: 'H.P. Lovecraft',
    price: 12.99,
    imageUrl: 'https://www.readandcobooks.co.uk/wp-content/uploads/dunwich-horror-lovecraft-9781447468554-cover-288x445.jpg',
    id_book: 3,
    id_user: 1
  },
  {
    title: 'Los mitos de Cthulhu',
    genre: 'Horror',
    author: 'H.P. Lovecraft',
    price: 16.99,
    imageUrl: 'https://www.readandcobooks.co.uk/wp-content/uploads/tales-in-cthulhu-mythos-lovecraft-9781447468912-cover-288x445.jpg',
    id_book: 5,
    id_user: 2
  },
  {
    title: 'El llamado de Cthulhu',
    genre: 'Horror',
    author: 'H.P. Lovecraft',
    price: 15.99,
    imageUrl: 'https://www.readandcobooks.co.uk/wp-content/uploads/call-of-cthulhu-lovecraft-9781447418320-cover-288x445.jpg',
    id_book: 6,
    id_user: 2
  },
  {
    title: 'El caso de Charles Dexter Ward',
    genre: 'Horror',
    author: 'H.P. Lovecraft',
    price: 11.99,
    imageUrl: 'https://www.readandcobooks.co.uk/wp-content/uploads/outsider-lovecraft-9781528717175-cover-288x445.jpg',
    id_book: 7,
    id_user: 5
  }
];

function getBooks(request, response) {
  let respuesta = { codigo: 200, book: listBooks };
  response.send(respuesta);
}

function getBookByID(request, response) {
  console.log(listBooks);
  let bookFinded = listBooks.find((findBook) => findBook.id_book == request.params.id);

  console.log(request.params.id);
  console.log(bookFinded);

  let respuesta = {};

  bookFinded === undefined
    ? (respuesta = { codigo: 404, message: 'Book no encontrado', idFinded: request.params.id })
    : (respuesta = { codigo: 200, book: bookFinded });

  response.send(respuesta);
}

function postBook(request, response) {
  console.log(request)
  let newBook = request.body;
  listBooks.push(newBook);

  let respuesta = { ok: true, idNewBook: request.body.id_book };
  response.send(respuesta);
}

function putBook(request, response) {
  console.log(request.body)
  const editBook = request.body;
  const findedBook = listBooks.find((book) => book.id_book === editBook.id_book);
  console.log(findedBook)
  let respuesta = {};
  //Encuentra libro para editar
  if (findedBook) {
    console.log(findedBook)
    const indexToReplace = listBooks.findIndex((book) => book.id_book === editBook.id_book);
    listBooks.splice(indexToReplace, 1);
    listBooks.push(editBook)
    
    console.log(editBook)
    respuesta = { ok: true, idUpdateBook: editBook.id_book };
  }
  else {
    respuesta = { ok: false, idUpdateBook: "No encontrado", mensaje: "Error, libro para editar no encontrado" }
  }

  response.send(respuesta);
}

function deleteBook(request, response) {

  let deleteBook = request.params.id;
  console.log(deleteBook);
  let findedBook = listBooks.filter((book) => (book.id_book = deleteBook))
  console.log(findedBook);
  let respuesta = {};

  //Encuentra libro para editar
  if (findedBook != undefined) {
    let indexToReplace = listBooks.findIndex(book => book.title === findedBook.title);
    console.log(indexToReplace);
    listBooks.splice(indexToReplace, 1);

    respuesta = { ok: true, idBorrado: deleteBook }
  }
  else {
    respuesta = { ok: false, idModificado: "No encontrado", mensaje: "Error, libro para borrar no encontrado" }
  }

  response.send(respuesta);
}

module.exports = {
  getBooks: getBooks,
  getBookByID: getBookByID,
  postBook: postBook,
  putBook: putBook,
  deleteBook: deleteBook
};