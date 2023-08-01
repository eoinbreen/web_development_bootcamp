import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1> World!");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1> <p>My name is Eoin, I am a software developer. I am currently doing tutorials in Web Development and Python as these areas really interest me</p>")
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1> <p><strong>Phone Number: </strong> 0871234567</p> <p><strong>Email: </strong> me@gmail.com </p>")
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
