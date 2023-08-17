import express from "express";
import bodyParser from "body-parser";
import dayjs from 'dayjs'
import fs from 'fs'

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var today = dayjs().format('YYYY-MM-DD');

var daily_tasks = []
var work_tasks = []
function createTask(req){
  var task_type = req.body["task-type"];
  var task_description = req.body["task-description"];
  var task_priority = req.body["task-priority"];
  var task_date = req.body["task-date"];

  var task = {
    type: task_type,
    description: task_description,
  }

  if(task_type === "daily"){
    task["date"] = task_date;
    daily_tasks.push(task);
  }

  else if(task_type === "work"){
    task["priority"] = task_priority;
    work_tasks.push(task);
  }
  console.log(task);
}



app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  createTask(req);
  //console.log(tasks);
});

app.get("/daily", (req, res) => {
  res.render("daily.ejs", {
    today: today,
    tasks: daily_tasks,
  });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", {
    tasks: work_tasks
  });
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
    start();
});


function start(){
  fs.readFile("tasks.txt", 'utf8', (err, data) => {
    if (err) throw err;
      readTasks(data);
  });

  
}

function readTasks(data){
  var task_array = data.split("\n");
  task_array.forEach((task) => {
      var task_array = task.split(",");
      
      if(task_array[0] === "daily"){
        var new_task={
          type: task_array[0],
          description: task_array[1],
          date: task_array[2],
        }
        daily_tasks.push(new_task);
      }
      else if(task_array[0] === "work"){
        var new_task={
          type: task_array[0],
          description: task_array[1],
          priority: task_array[2],
        }
        work_tasks.push(new_task);
      }
      
  })
}
