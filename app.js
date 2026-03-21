import express from "express";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config() ;

const app = express() ;
const port = process.env.PORT || 3000 ;

app.use(express.static("public")) ;
app.set("view engine", "ejs");

app.get("/" , async (req , res) => {
  res.render("Home") ;
});

app.get("/dashboard" , async (req ,res) => {
  res.render("dashboard") ;
})

app.listen(port , () => {
  console.log(`Listening on port http://localhost:${port}`) ;
});

