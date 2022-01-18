require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Show static content
app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.send("Hi world");
  res.render("home", {
    name: "Luigi Gutierrez",
    title: "This is a text",
  });
});

app.get("/generic", (req, res) => {
  res.render("generics", {
    name: "Luigi Gutierrez",
    title: "This is a text",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "Luigi Gutierrez",
    title: "This is a text",
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
