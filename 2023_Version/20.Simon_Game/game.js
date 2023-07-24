var button_colors = ["red", "blue", "green", "yellow"];
var game_pattern = [];
var user_clicked_pattern = []

$(".btn").click(function(event){
    user_chosen_color = this.id;
    user_clicked_pattern.push(user_chosen_color);
    console.log(user_clicked_pattern);
})

function nextSequence(){
    rand_num = Math.floor(Math.random() * 4);
    random_chosen_color = button_colors[rand_num];
    game_pattern.push(random_chosen_color);

    next_button = $("#"+random_chosen_color);
    next_button.fadeOut(50).fadeIn(100);
    var audio = new Audio("sounds/"+random_chosen_color+".mp3");
    audio.play();
    
    //console.log(game_pattern);
}

