// console.log("This is my new js project");
const express = require("express");

const app = express();
const port = 3000;

// app.use("/route", rH1, [rH2, rH3], rH4, rH5);
app.get(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user 1!!");
    // res.send("1st Response!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 2!!");
    // res.send("2nd Response!!");
    next();
  },
  [
    (req, res, next) => {
      console.log("Handling the route user 3!!");
      // res.send("3rd Response!!");
      next();
    },
    (req, res, next) => {
      console.log("Handling the route user 4!!");
      // res.send("4th Response!!");
      next();
    },
  ],
  (req, res, next) => {
    console.log("Handling the route user 5!!");
    res.send("5th Response!!"); //when all response comment then it is hanged
    // next(); //when this is uncommented then it gives error because no more middleware to handle
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
