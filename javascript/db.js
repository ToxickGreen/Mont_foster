//DataBase Conection

const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Mont_Foster"
})

db.connect((err) => {
    if(err){
        console.log("Erro ao conectar:", err)
    }else{
        console.log("Conectado ao MySQL!")
    }
})

module.exports = db