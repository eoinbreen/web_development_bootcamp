var task_type = $("#task-type")

task_type.on('change', () => {
  var type = task_type.find(":selected").val();
  $("#task-description").val("");
  
  if(type === "daily"){
    $(".priority").addClass("invisible");
    $(".date").removeClass("invisible");
  }
  else if(type === "work"){
    $(".priority").removeClass("invisible");
    $(".date").addClass("invisible");
  }
});