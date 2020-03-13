const mysql=require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "javascriptrox",
    database: "burgerDB"
});

connection.connect((err)=>{
    if (err) throw err;
    console.log("Connection Success");
});

module.exports = connection;