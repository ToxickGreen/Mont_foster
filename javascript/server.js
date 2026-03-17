const db = require("./db")

db.query("SHOW TABLES", (err, result) => {
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }
})