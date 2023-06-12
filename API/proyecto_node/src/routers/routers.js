const {Router} = require ("express")
const router = Router();
const bookCtrl = require("../controller/book.controller.js")
const booksCtrl = require("../controller/books.controller.js")

router.use((req, res, next) => {
    console.log('Petición recibida del cliente : URL: "'+ req.url +'" -METHOD:"'+ req.method +'" -USER:"'+req.headers['user-agent']+'"');
    next();
});  

router.get("/book", bookCtrl.getBook );
router.post("/book", bookCtrl.postBook );
router.put("/book", bookCtrl.putBook );
router.delete("/book", bookCtrl.deleteBook );
router.get("/books", booksCtrl.getBooks );
router.get("/books/:id", booksCtrl.getBookByID );
router.post("/books", booksCtrl.postBook );
router.put("/books", booksCtrl.putBook );
router.delete("/books/:id", booksCtrl.deleteBook );

module.exports = router; 