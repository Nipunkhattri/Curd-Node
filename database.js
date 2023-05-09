import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const conn = mysql.createConnection({
    host:"mysql-125500-0.cloudclusters.net",
    port:"19159",
    user:"admin",
    password:"W580q9VS",
    database:"curd",
})

console.log(conn);

conn.connect(function(err){
    if(err) throw err;
    console.log('connection successfull');
})

export default conn;