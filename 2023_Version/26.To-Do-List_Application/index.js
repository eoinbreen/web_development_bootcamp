import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.get("/work", (req, res) => {
  res.render("work.ejs")
});

app.get("/daily", (req, res) => {
  res.render("daily.ejs")
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});