const moveRight = function() {
    document.getElementById("block")
    let left = parseInt(block.style.left)|| 0
    left +=30
    block.style.left = left + "px"

}