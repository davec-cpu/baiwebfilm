var Book = require('../models/book.model')

exports.getList = (req, res) => {
    
    Book.get_all( (data) => {

        res.send({res:data})

    })

    
}

exports.detail = (req, res) => {
    console.log('id la: ', req.params.id)
    console.log('Thay doi')
    var data = Book.getById(req.params.id, (response) =>{
        res.send({result: response})
    })

    
}

exports.addBook = (req, res) => {
    var data = req.body
    var data2 ={"id": 15, "name": "abcxyz"}
    Book.createBook(data, (response)=> {
        res.send({result: response})
    })
}

exports.removeBook = (req, res)=> {
    var id = req.params.id
    Book.remove(id, (response) => {
        res.send({result: response})
    })
}

exports.updateBook =  (req, res)=> {
    var data = req.body
    Book.update(data, (response) => {
        res.send({result: response})
    })
}
