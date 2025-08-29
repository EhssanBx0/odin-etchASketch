function hoverColour(event){
    event.target.classList.add("activeHover");
}

function deleteOldGrid(){
    let body = document.querySelector("body");
    let sketchContainer = document.querySelector(".container");
    body.removeChild(sketchContainer);
}

function createNewGrid(size=16){
    let sketchContainer = document.createElement("div");
    sketchContainer.classList.add("container");

    for (let i=0; i < size**2; i++){
        let square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", hoverColour)
        sketchContainer.append(square);
    }

    let body = document.querySelector("body");
    body.append(sketchContainer);
}
