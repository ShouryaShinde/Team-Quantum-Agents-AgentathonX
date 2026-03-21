import express from "express";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config() ;

const app = express() ;
const port = process.env.PORT || 3000 ;

app.use(express.static("public")) ;

app.get("/" , async (req , res) => {
  res.render("Home.ejs") ;
});

app.get("/dashboard" , async (req ,res) => {
  res.render("dashboard.ejs") ;
})

app.listen(port , () => {
  console.log(`Listening on port https://localhost:${port}`) ;
});

