var p1_score = Math.floor(Math.random() * 6) + 1;
var p1_dice = document.querySelector(".img1")
p1_dice.setAttribute("src", "images/dice" + p1_score +".png")

var p2_score = Math.floor(Math.random() * 6) + 1;
var p2_dice = document.querySelector(".img2")
p2_dice.setAttribute("src", "images/dice" + p2_score +".png")

heading = document.querySelector("h1")
if(p1_score > p2_score){
    heading.textContent = "Player 1 Wins"
}
else if(p2_score > p1_score){
    heading.textContent = "Player 2 Wins"
}
else{
    heading.textContent = "Draw"
}