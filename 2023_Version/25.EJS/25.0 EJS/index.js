import express from "express";


const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();


app.get("/", (req, res) => {
    var day_type = "a weekday";
    var adv = "it's time to work hard";

    if(day === 0 || day === 6)
    {
        day_type = "the weekend";
        adv =  "it's time to have fun";
    }
    
    res.render("index.ejs",{
        dayType : day_type,
        advice: adv
    });

  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });