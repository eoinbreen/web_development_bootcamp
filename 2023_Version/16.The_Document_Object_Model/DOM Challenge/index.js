
// Style Documentation https://www.w3schools.com/jsref/dom_obj_style.asp

function change_text(){
    list_link = document.querySelector(".list a");
    list_link.style.color = "red";
    second = document.querySelectorAll("li")[1];
    second.innerHTML = "Hello";
    third = document.firstElementChild.lastElementChild.lastElementChild.lastElementChild;
    third.innerHTML = "My Name is Eoin";
}

function checkbox(){
    var checkbox = document.getElementById("myCheck");
    var button = document.getElementsByClassName("myButton")[0];

    if(checkbox.checked == true){
        button.style.backgroundColor = "yellow";
    }
    else{
        button.style.backgroundColor = "red";
    }
}