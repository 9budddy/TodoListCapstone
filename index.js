//Jarett Brown

import express from "express";
import date from 'date-and-time';
import bodyParser from "body-parser";

const app = express();
const port = 3001;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

let items = [];
let workItems = [];
let schoolItems = [];
let index = 0;
let workIndex = 0;
let schoolIndex = 0;


app.get("/", (req, res) => {
  res.render("index.ejs", {
    date: date.format(new Date(), 'ddd, MMMM DD, YYYY'),
    items: items
  });
})

app.get("/work", (req, res) => {
  res.render("work.ejs", {
    date: date.format(new Date(), 'ddd, MMMM DD, YYYY'),
    items: workItems
  });
})

app.get("/school", (req, res) => {
  res.render("school.ejs", {
    date: date.format(new Date(), 'ddd, MMMM DD, YYYY'),
    items: schoolItems
  });
})


app.post("/submit", (req, res) => {
  if (req.body["list"] === "Today") {
    const item = req.body["newItem"];
    items[index] = item;
    index++;

    res.redirect("/");
  } 
  else if (req.body["list"] === "Work") {
    const item = req.body["newItem"];
    workItems[workIndex] = item;
    workIndex++;

    res.redirect("/work");
  }
  else if (req.body["list"] === "School") {
    const item = req.body["newItem"];
    schoolItems[schoolIndex] = item;
    schoolIndex++;

    res.redirect("/school");
  }
})


  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
  