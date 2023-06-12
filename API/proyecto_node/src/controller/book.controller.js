const { router } = require("../app");

let book = 
  {
    title: 'El horror de Dunwich',
    genre: 'Horror',
    author: 'H.P. Lovecraft',
    price: 12.99,
    imageUrl: 'https://www.readandcobooks.co.uk/wp-content/uploads/dunwich-horror-lovecraft-9781447468554-cover-288x445.jpg',
    id_book: 3,
    id_user: 1
  };

let listBooks = []

function getBook(request, response) {
    let respuesta = { codigo: 200, book: book };
    response.send(respuesta);
}

function postBook(request, response) {
    let newBook = request.query
    listBooks.push(newBook)

    let respuesta = { ok: true, listBooks };
    response.send(respuesta);
}

function putBook(request, response) {
    let editBook = request.query
    let findedBook = listBooks.filter((book) => (book.id = editBook.id_book ))

    let respuesta = { };
    //Encuentra libro para editar
    if(findedBook != undefined){
      let indexToReplace = listBooks.findIndex(book => book.id_book === editBook.id_book);
      listBooks.splice(indexToReplace,1);
      listBooks.push(editBook);

      respuesta = { ok: true, idModificado: editBook.id_book, listBooks }
    }
    else{
      respuesta = { ok: false, idModificado: "No encontrado", mensaje:"Error, libro para editar no encontrado" }
    }

    
    response.send(respuesta);
}

function deleteBook(request, response) {
  let deleteBook = request.query.id
  let findedBook = listBooks.filter((book) => (book.id = deleteBook ))

  let respuesta = { };
  //Encuentra libro para editar
  if(findedBook != undefined){
    let indexToReplace = listBooks.findIndex(book => book.title === deleteBook);
    listBooks.splice(indexToReplace,1);

    respuesta = { ok: true, idBorrado: deleteBook }
  }
  else{
    respuesta = { ok: false, idModificado: "No encontrado", mensaje:"Error, libro para borrar no encontrado" }
  }
  
  response.send(respuesta);
}

module.exports = {
  getBook: getBook,
  postBook: postBook,
  putBook: putBook,
  deleteBook: deleteBook
};