
var inputTask = document.getElementById("item")
var unfinishedTask = document.getElementById("unfinished")



$("#add").click(function(){
  if(inputTask.value){
$("#unfinished").append(`<div class = "list">${inputTask.value}</div>`)}
document.getElementById("item").value = ""})



$("div").on("click", ".list", function(){
    $("#finished").append($(this).removeClass("list").addClass("listFinished"))})



   $('#finished').on("click", ".listFinished", function(){
    $(this).closest("div").remove();
});
