//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;
const password = "ILoveProgramming";

var endpoint = "index.html";

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
  console.log(req.body);
  var user_password = req.body["password"];
  if(user_password === password){
    endpoint = "secret.html";
  }
  else{
    endpoint = "index.html";
  }
  
  next();
}

app.use(passwordCheck);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/" + endpoint);
});

app.post("/check", (req, res) => {
    res.sendFile(__dirname + "/public/" + endpoint);
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});