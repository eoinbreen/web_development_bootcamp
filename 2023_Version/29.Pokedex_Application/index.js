import express from "express"
import axios from "axios"
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://pokeapi.co/api/v2/"

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    res.render("index.ejs");
});

app.post("/pokedex", async (req, res) => {
    var number = getNumber(req);
    const info_result = await axios.get(API_URL + "pokemon-species/" + number +"/");//URL to get pokedex information on pokemon
    const sprite_result = await axios.get(API_URL + "pokemon/" + number +"/");//URL to get sprites
    //Make number 3 digits if its below 100
    if(number < 10){
        number = "00" + number
    }
    else if(number < 100){
        number = "0" + number
    }

    var dex_entry = findDexEntry(info_result.data.flavor_text_entries);
    res.render("index.ejs", {
        number: number,
        name: info_result.data.name,
        game: dex_entry.version.name,
        dex_entry: dex_entry.flavor_text,
        sprite: sprite_result.data.sprites.front_default
    });
});
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})

//Get the number from the number field or get a random number between 1 and 1008 (highest entry on the pokedex)
function getNumber(req){
    var choice = req.body.choice;
    var number = 1;
    switch(choice){
        case "check-dex":
            number = req.body.dex_num;
            break;
        case "random":
            number = Math.floor(Math.random() * 1008) + 1;
            break;
    }

    return number;
}


// get a list of all the english pokedex entries, then get a random dex entry from that list
function findDexEntry(dex_entries){
    var english_dex_entries = [];
    dex_entries.forEach((entry) => {
        if(entry.language.name === "en"){
            english_dex_entries.push(entry)
        }
    })
    var dex_entry = english_dex_entries[Math.floor(Math.random() * english_dex_entries.length)];
    return dex_entry;
}