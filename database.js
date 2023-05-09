import mysql from "mysql";

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'curd'
})

conn.connect(function(err){
    if(err) throw err;
    console.log('connection successfull');
})

export default conn;