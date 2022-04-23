// console.log(document)
const playingField = document.getElementById("playing-field")
const down = document.getElementById("down")
const block = document.getElementById("block")
const moveleft = function () {
    let left = parseInt(block.style.left) || 0
    left += 15
    block.style.left = left + "px"
}
const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)
header.setAttribute("class", "my-header")

const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: ~The Creator~"
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)

const up = document.getElementById("up")
const right = document.getElementById("right")
const left = document.getElementById("left")

up.onclick = function(){      
    let top = parseInt(block.style.top) || 0
    top -= 15
    if(top > 0){
        block.style.top = top + "px"
    }
}

right.onclick = function() {
    let left = parseInt(block.style.left) || 0
    left += 15
    if(left< 420){
        block.style.left = left + "px"
    }
    
}

left.onclick = function() {
    let left = parseInt(block.style.left) || 0
    left -= 15
    if(left > 0){
        block.style.left = left + "px"
    }

}

down.onclick = function() {
    let top = parseInt(block.style.top) || 0
    top += 15
    if(top< 335){
        block.style.top = top + "px"
    }

}