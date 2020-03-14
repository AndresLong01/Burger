const connection = require("./connection.js");

const orm = {
    selectAll: function(table, cb) {
        let query = "SELECT * FROM ??;";
        connection.query(query, [table], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: function(table, col, val, cb) {
        let query = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(query, [table, col, val], (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: function(table, colVal, val, cb) {
        let query = "UPDATE ?? SET ?? = ? WHERE ?? = false"
        connection.query(query, [table, colVal, val, colVal], (err,data) =>{
            if (err) throw err;
            cb(data);
        })
    }
}