const db = require('../common/connect')

const Book = function(book){
    this.id = book.id
    this.name = book.name
}

Book.get_all = (res) => {
    db.query("SELECT * FROM `dien_vien` WHERE 1", function(err, dvien){
        res (dvien)
    })
     
}

Book.getById = (id, result) => {
    console.log(id)
    db.query(`SELECT * FROM dien_vien WHERE idDienVien = ${id}`, id, function(err, dvien){
        result(dvien)
    })
         
     
}

Book.createBook = (data, result) => {
    db.query("INSERT INTO test SET ?", data, function(err, test){
        if(err){
            result(null)
        }
        result({id: data.name, ...data})
    })
}

Book.remove = (id, result) => {
    result("Xoa thanh cong "+ id)
}

Book.update =  (data, result) => {
    console.log(data)
    db.query("insert INTO test SET id = ?, name=?", [data.id, data.name], (err, test)=>{
        if(err){
            console.log(err)
            result(null)
        }
        else{
            result({...data})
        }
    })
}

module.exports = Book