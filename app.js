import express  from "express";
import cors from "cors";
import morgan from "morgan";
import mysql from "mysql";
import bodyParser from 'body-parser';
import connection from "./database.js"

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 5000;

app.get("/",(req,res)=>{
    res.json({message:"Hello"})
})

app.get("/api/get",(req,res)=>{
    const sqlGet = "SELECT * FROM contact_db";
    connection.query(sqlGet,(error,result)=>{
        res.send(result);
    })
})

app.post("/api/post" , (req, res)=>{
    const {name,email,contact} = req.body;
    connection.query(
    "INSERT INTO contact_db (name, email , contact ) VALUES  (?,?,?)",[name, email,contact],(err, result) => {
    if(err){console.log(err)}
    else{res.send("added successfully")}
})})

app.delete("/api/remove/:email" , (req, res)=>{
    const {email} = req.params;
    connection.query("DELETE FROM contact_db  WHERE  email =? ",email, (err, result) => {
     if(err){console.log(err)};
    res.send(result)
})})

app.get("/api/get/:email" , (req, res)=>{
    const {email} = req.params;
    connection.query("SELECT * FROM contact_db   WHERE  email =? ",email, (err, result) => {
    if(err){console.log(err)}
    res.send(result);  
  }
)})

app.put("/api/update/:email", (req, res) => {
    const { email } = req.params;
    const { name, contact } = req.body;
  
    connection.query(
      "UPDATE contact_db SET name = ?, contact = ? WHERE email = ?",
      [name, contact, email],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error updating data in database");
        } else if (result.affectedRows === 0) {
          res.status(404).send("Record not found");
        } else {
          res.send("Data updated successfully");
        }
      }
    );
  });


app.listen(port,function(){
    console.log("Serving Listing on port no 5000");
});