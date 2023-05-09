import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connection from "../database.js"

const secret = "task";


export const Register = async (req,res)=>{
    const { email, password } = req.body;
    console.log(email,password);
    bcrypt.hash(password, 12, (err, hash) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
        return;
      }
      
      connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hash], (err, results) => {
        if (err) {
          console.error(err);
          res.status(500).send('Internal server error');
          return;
        }else{
          // req.session.UserId = user.id;
          const registeredUser = { id: results.insertId,email,password };
        res.json(registeredUser);
        }
      });
    });
}
export const Login = async (req,res)=>{
    const { email, Password } = req.body;
    connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
        return;
      }
      if (results.length === 0) {
        res.status(401).send('Invalid email or password');
        return;
      }
      const user = results[0];
      // console.log(password);
      console.log(user);
      bcrypt.compare(Password, user.password, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Internal server error');
          return;
        }
        if (!result) {
          res.status(401).send('Invalid email or password');
          return;
        }
        req.session.UserId = user.id;
        res.json({result:user});
      });
    });
}
export const Logout = async (req,res)=>{
    req.session.destroy();  
    res.send('Logout successful');
}
export const get = async (req,res)=>{
    const sqlGet = "SELECT * FROM contact_db";
    connection.query(sqlGet,(error,result)=>{
        res.send(result);
    })
}
export const post = async (req,res)=>{
    const {name,email,contact} = req.body;
    connection.query(
    "INSERT INTO contact_db (name, email , contact ) VALUES  (?,?,?)",[name, email,contact],(err, result) => {
    if(err){console.log(err)}
    else{res.send("added successfully")}
    })
}

export const deletedata = async (req,res)=>{
    const {email} = req.params;
    connection.query("DELETE FROM contact_db  WHERE  email =? ",email, (err, result) => {
     if(err){console.log(err)};
    res.send(result)
    })
}

export const getdata = async (req,res)=>{
    const {email} = req.params;
    connection.query("SELECT * FROM contact_db   WHERE  email =? ",email, (err, result) => {
    if(err){console.log(err)}
    else if (result.affectedRows === 0) {
      res.status(404).send("Record not found");
    }
    res.send("data deleted");  
    })
}
export const updatedata = async (req,res)=>{
    const { email } = req.params;
    console.log(email)
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
}