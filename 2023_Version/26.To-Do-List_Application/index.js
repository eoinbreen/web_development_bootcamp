import express from "express";
import bodyParser from "body-parser";
import dayjs from 'dayjs'

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var today = dayjs().format('MM/DD/YYYY');


function createTask(req){
  var task_type = req.body["task-type"];
  var task_description = req.body["task-description"];
  var task_priority = req.body["task-priority"];
  var task_date = req.body["task-date"];

  var task = {
    type: task_type,
    description: task_description,
    completed: false,
  }

  if(task_type === "daily"){
    task["date"] = task_date;
    daily_tasks.push(task);
  }

  else if(task_type === "work"){
    task["priority"] = task_priority;
    work_tasks.push(task);
  }
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
});




var daily_tasks = [
  { 
    type: "daily",
    description: "Mow the Lawn",
    completed: false,
    date: "08/13/2023"
    },
  { 
    type: "daily",
    description: "Do the Dishes",
    completed: false,
    date: "08/13/2023"
    },
  { 
    type: "daily",
    description: "Hoover the Floors",
    completed: false,
    date: "08/15/2023"
    },
  { 
    type: "daily",
    description: "Paint the House",
    completed: false,
    date: "08/15/2023"
    },
  
];

var work_tasks = [
  { 
    type: "work",
    description: "Work on Presentation",
    completed: false,
    priority: "high"
    },
  { 
    type: "work",
    description: "Email customer re Application",
    completed: false,
    priority: "medium"
    },
  { 
    type: "work",
    description: "Sort out Filing System",
    completed: false,
    priority: "low"
    },
];