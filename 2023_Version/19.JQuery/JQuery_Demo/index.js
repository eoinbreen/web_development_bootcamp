// JQuery Notes

// Selecting Elements
$("h1").css("color", "red");
console.log($("h1").css("font-size")); // One input in css method gets a value, 2 inputs sets the value to the second input
$("button").css("background-color", "orange");

// Adding and removing Classes
$("h1").addClass("big-title margin-100");
$("h1").removeClass("big-title");
console.log($("h1").hasClass("margin-100")); //Checks if element has a specific class

// Text Manipulation
$("h1").html("<em> Hello World </em>"); //innerHTML
$("button").text("Don't Click Me"); //TextContent

// Attribute Manipulation
console.log($("a").attr("href"));
$("a").attr("href","https://www.yahoo.com/" );

// Event Listeners
$("h1").on("mouseover", function(){
    $("h1").toggleClass("big-title")
})

$("button").click(function(){
    console.log("button was clicked")
})

$(document).keydown(function(event){
    $("h1").text(event.key);
})

// Adding html 
$("h1").before("<button>New</button>") // Adds new html before the opening tag of the element
$("h1").after("<button>New</button>") // Adds new html after the closing tag of the element
$("h1").prepend("<button>New</button>") // Adds new html at the start of the content of the element
$("h1").append("<button>New</button>") // Adds new html at the end of the content of the element

// Removing elements
$("button").remove();