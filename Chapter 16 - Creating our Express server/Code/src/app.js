// console.log("This is my new js project");
const express = require("express");

const app = express();
const port = 7777;

app.use("/", (req, res)=>{
    res.send("This is my home page");
});

app.use("/hello", (req, res)=>{
    res.send("Hello World!");
});

app.use("/test", (req, res)=>{
    res.send("This is my test page");
});

app.get("/about", (req, res)=>{
    res.send("This is my about page");
});

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});