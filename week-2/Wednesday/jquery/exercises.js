// $("body").append(`<div class = "names">Names</div>`)
// $("body").append(`<input class = "name"></input>`)
// $("body").append(`<button class = "add">Add Human</button>`)
// $(".names").append($("#text"))
// $("#text").append($(".name").val())

// $(".add").click(function(){
//    const value = $(".name").val()
//    if(value){
//     $(".names").append(`<ul id = "list">${value}</ul>`) 
// }
// })

// $(".names").click(function(){
// $('#list').remove()}); 



// 3

// $("body").append(`<div class = "box" >Names</div>`)
// $("body").append(`<div class = "box" >Names</div>`)

// $(".box").hover(function() {
//         console.log($(this).css("background-color", "red"))})
// $(".box").mouseleave(function(){
//     console.log($(this).css("background-color", "#8e44ad"))})

    
// 4


// $(".item").click(function() {
// let words = `<ul> ${$(this).text()}</ul>`
// if($(this).text()=="Umbrella"){
//     console.log("")
// }else{
//     $("#cart").append(words) 
// }
    
// })
    

// 5


// const fruits = [
//     { name: "Orange", color: "orange" },
//     { name: "Banana", color: "yellow" },
//     { name: "Coconut", color: "brown" },
//     { name: "Kiwi", color: "brown" },
//     { name: "Lemon", color: "yellow" },
//     { name: "Cucumber", color: "green" },
//     { name: "Persimmon", color: "orange" },
//     { name: "Pumpkin", color: "orange" }
//   ]

//   for(let fruit of fruits){
    // $("#basket").append(`<div class = "${fruit.color}">${fruit.name}</div>`).css("background-color", "$(.this)")
//   }
  

// Extension

// let colore = $("span").data().color
for(i of $("span")){
$("body").append(`<div class = "picker" background-color = "${$(i).data().color}"> ${$(i).text()}</div>`).css("background-color","$(this).closest(i).data().color"

    
)}
    
    // }
// // Alert($(this).closest(“.cakes).data().type))})
// Alert($(this).closest(“.cakes).find(“price”).data().price))})