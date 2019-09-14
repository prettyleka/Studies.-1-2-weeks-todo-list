const moveRight = function() {
    document.getElementById("right")
    let left = parseInt(block.style.left)|| 0
    left +=30
    block.style.left = left + "px"}

const moveLeft = function() {
    document.getElementById("left")
    let left = parseInt(block.style.left)|| 0
    left -=30
    block.style.left = left + "px"}

    const moveUp = function() {
        document.getElementById("up")
        let top = parseInt(block.style.top)|| 0
        top -=30
        block.style.top = top + "px"}
    
const moveDown = function() {
            document.getElementById("down")
            let top = parseInt(block.style.top)|| 0
            top +=30
            block.style.top = top + "px"}   
