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

    for (let row=0; row < size; row++){
        let row = document.createElement("div")
        row.classList.add("row");
        for (let col=0; col < size; col++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", hoverColour)
            row.appendChild(square);
        }
        sketchContainer.appendChild(row);
    }

    let body = document.querySelector("body");
    body.append(sketchContainer);
}

function changeGridSize(e){
    let newGridSize = e.target.value
    deleteOldGrid();
    createNewGrid(newGridSize);
}

let sizeInput = document.querySelector("#gridSize")
sizeInput.addEventListener("change",changeGridSize)

createNewGrid();