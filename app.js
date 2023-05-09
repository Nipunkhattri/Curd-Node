import express  from "express";
import cors from "cors";
import morgan from "morgan";
import mysql from "mysql";
import bodyParser from 'body-parser';
import connection from "./database.js"
import bcrypt from "bcrypt"
import userRouter from "./routers/auth.js";
import session from "express-session";

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 5000;

app.use(session({
  secret: 'task',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use("/api", userRouter); 

app.listen(port,function(){
    console.log("Serving Listing on port no 5000");
});