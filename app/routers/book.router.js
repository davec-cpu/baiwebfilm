 

module.exports = (router) =>{
 


var bookController = require('../controllers/book.controller')


router.get('/book/list', bookController.getList)

router.get('/book/detail/:id', bookController.detail)

router.post('/book/add', bookController.addBook)

router.delete('/book/delete/:id', bookController.removeBook)

router.put('/book/update', bookController.updateBook)

 
}