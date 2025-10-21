// console.log("This is my new js project");
const express = require("express");

const app = express();
const port = 3000;

//This will handle all the HTTP request methods for user because of order
// app.use("/user", (req, res)=>{
//     res.send("HAHAHAHAHAHAHA!!!");
// });

//This will only handle GET call to user
app.get("/user", (req, res)=>{
    res.send({firstname: "Satyam", lastname: "Jha"});
});

//This will only handle POST call to user
app.post("/user", (req, res)=>{
    //saving data to DB
    res.send("Data successfully saved to DB!");
});

//This will only handle DELETE call to user
app.delete("/user", (req, res)=>{
    //deleting data from DB
    res.send("Data successfully deleted from DB!");
});

app.patch("/user", (req, res)=>{
    //updating data in DB
    res.send("Data successfully updated in DB!");
});
//this will match all the HTTP request methods
app.use("/test", (req, res)=>{
    res.send("This is my test page");
});

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});