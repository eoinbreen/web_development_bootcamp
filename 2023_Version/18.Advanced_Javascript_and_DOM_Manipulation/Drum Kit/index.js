
buttons = document.querySelectorAll(".drum")

for(var i = 0; i<buttons.length; i++)
{
    buttons[i].addEventListener("click", function (){
       button = this;
       button.style.color = "white"
       console.log(button.textContent + " Button was Pressed" )
    });
}


