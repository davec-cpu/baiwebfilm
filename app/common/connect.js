var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'baiwebchinnguoi'

})

connection.connect((err, con) => {
    if(err) console.log("Ket noi csdl khong thanh cong")
})

module.exports = connection