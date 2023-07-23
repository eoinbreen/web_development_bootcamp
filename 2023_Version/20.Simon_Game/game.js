var button_colors = ["red", "blue", "green", "yellow"];
var game_pattern = [];

function nextSequence(){
    rand_num = Math.floor(Math.random() * 4);
    random_chosen_color = button_colors[rand_num];
    game_pattern.push(random_chosen_color);
    console.log(game_pattern);
}