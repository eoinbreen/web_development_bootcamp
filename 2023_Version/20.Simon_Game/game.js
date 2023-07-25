var button_colors = ["red", "blue", "green", "yellow"];
var game_pattern = [];
var user_clicked_pattern = []
var is_playing = false;
var level = 0;

$(document).keydown(function(event){
    if (is_playing === false){
        $("#level-title").text("Level " + level);
        is_playing = true;
        nextSequence();
    }
})

$(".btn").click(function(event){
    user_chosen_color = this.id;
    playSound(user_chosen_color);
    animatePress(user_chosen_color);
    user_clicked_pattern.push(user_chosen_color);
    current_input = user_clicked_pattern.length - 1;
    checkAnswer(current_input)
    //console.log(user_clicked_pattern);
})

function nextSequence(){
    rand_num = Math.floor(Math.random() * 4);
    random_chosen_color = button_colors[rand_num];
    game_pattern.push(random_chosen_color);

    next_button = $("#"+random_chosen_color);
    next_button.fadeOut(50).fadeIn(100);
    playSound(random_chosen_color);
    level += 1;
    $("#level-title").text("Level " + level);
    //console.log(game_pattern);
}

function checkAnswer(current_input){
    if(user_clicked_pattern[current_input] === game_pattern[current_input]){
        console.log("success")
        if(user_clicked_pattern.length === game_pattern.length){
            user_clicked_pattern = [];
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{
        console.log("wrong")
        
        // Game Over
    }

}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(current_color){
    active_button = document.querySelector("#"+current_color);
    active_button.classList.add("pressed");
   
    setTimeout(function(){
        active_button.classList.remove("pressed");
    }, 100);
}

