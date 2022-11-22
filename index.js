const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let itemArray = ["eat", "drink", "sleep", "code"];

// use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// setup EJS as viewer
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date();

  let options = {
    weekday: "long",
    day: "2-digit",
    month: "short",
  };

  let displayDate = today.toLocaleDateString("en-US", options);

  res.render("list", { dateKey: displayDate, newListKey: itemArray });
});

// POST method
app.post("/", (req, res) => {
  item = req.body.newListItem;

  itemArray.push(item);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
