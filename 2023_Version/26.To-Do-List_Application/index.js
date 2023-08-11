import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


//Add a Task Page

var tasks = [];

function createTask(req){
  var task_type = req.body["task-type"];
  var task_description = req.body["task-description"];
  var task_priority = req.body["task-priority"];
  var task_date = req.body["task-date"];

  var task = {
    type: task_type,
    description: task_description,
    priority: task_priority,
    date: task_date
  }

  tasks.push(task);
}




app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  createTask(req);
  console.log(tasks);
});

app.get("/daily", (req, res) => {
  res.render("daily.ejs");
});

app.get("/work", (req, res) => {
  res.render("work.ejs");
});



app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});