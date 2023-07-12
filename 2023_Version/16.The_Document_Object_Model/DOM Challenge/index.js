
// Style Documentation https://www.w3schools.com/jsref/dom_obj_style.asp

function change_text(){
    first_link = document.querySelector("a")
    first_link.textContent = "Yahoo"
    first_link.setAttribute("href", "https://www.yahoo.com")
    
    list_link = document.querySelector(".list a");
    list_link.style.color = "red";
    
    second = document.querySelectorAll("li")[1];
    second.innerHTML = "Hello";
    
    third = document.firstElementChild.lastElementChild.lastElementChild.lastElementChild;
    third.textContent = "My Name is Eoin";
    

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

function visibility(){
    var checkbox = document.querySelector("#visCheck");
    var button = document.getElementsByClassName("myButton")[0];
    document.querySelector("h1").classList.toggle("huge");

    if(checkbox.checked == true){
        button.classList.add("invisible");
    }
    else{
        button.classList.remove("invisible");
    }
}