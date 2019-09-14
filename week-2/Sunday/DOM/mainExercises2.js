const getRandomColor = function() {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition]}
    

//for(i=0;i<7;i++){
  //let squar = document.createElement("div")
  //squar.style.backgroundColor = getRandomColor()
  //squar.setAttribute("id", "box")
 // squar.style.margin = "1px"
//  squar.style.display = "inline-block"
  //document.body.appendChild(square)
//}


//for(i = 0;i<7;i++){
  //color.Math.floor(Math.random() * niceColors.length);
//return color}


//squar.style.backgroundColor = getRandomColor()

var div = document.createElement("div");
div.id = "div"
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.margin = "5px"
document.body.appendChild(div)

var div2 = document.createElement("div");
div2.id = "div1"
div2.style.width = "100px";
div2.style.height = "100px";
div2.margin = "5px"
div2.style.background = "black";
document.body.appendChild(div2)

var div3 = document.createElement("div");
div3.id = "div2"
div3.style.width = "100px";
div3.style.height = "100px";
div3.style.background = "yellow";
div3.margin = "1px"
document.body.appendChild(div3)

var div4 = document.createElement("div");
div4.id = "div3"
div4.style.width = "100px";
div4.style.height = "100px";
div4.style.background = "blue";
div4.margin = "1px"
document.body.appendChild(div4)

var div5 = document.createElement("div");
div5.id = "div4"
div5.style.width = "100px";
div5.style.height = "100px";
div5.style.background = "green";
div5.margin = "1px"
document.body.appendChild(div5)

var div6 = document.createElement("div");
div6.id = "div5"
div6.style.width = "100px";
div6.style.height = "100px";
div6.style.background = "purple";
div6.margin = "1px"
document.body.appendChild(div6)


function mouseEnter() {
  document.getElementById("div").style.background = getRandomColor()
  document.getElementById("div1").style.background = getRandomColor()
  document.getElementById("div2").style.background = getRandomColor()
  document.getElementById("div3").style.background = getRandomColor()
  document.getElementById("div4").style.background = getRandomColor()
  document.getElementById("div5").style.background = getRandomColor()}


  document.getElementById("div").onmouseenter = function() {mouseEnter()};
  document.getElementById("div1").onmouseenter = function() {mouseEnter()};
  document.getElementById("div2").onmouseenter = function() {mouseEnter()};
  document.getElementById("div3").onmouseenter = function() {mouseEnter()};
  document.getElementById("div4").onmouseenter = function() {mouseEnter()};
  document.getElementById("div5").onmouseenter = function() {mouseEnter()};
  