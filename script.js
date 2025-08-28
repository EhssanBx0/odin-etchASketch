let sketchContainer = document.createElement("div");
sketchContainer.classList.add("container");

function hoverColour(event){
    console.dir(event.target);
    event.target.classList.add("activeHover");
}

for (let i=0; i < 16*16; i++){
    let square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", hoverColour)
    sketchContainer.append(square);
}

let body = document.querySelector("body");
body.append(sketchContainer);