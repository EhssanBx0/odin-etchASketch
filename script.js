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

let colourChangeBtns = document.querySelectorAll("input[type=checkbox]");

colourChangeBtns.forEach(btn => {
    btn.addEventListener("click", toggleColour)
})

let shadeCounter = 0

function toggleColour(event){
    colourChangeBtns.forEach(btn => {
        if (btn !== event.target) {
            btn.checked = false;
            shadeCounter = 0
        }
    })
}

function randomColour(square){
    let red = Math.floor(Math.random()*257);
    let green = Math.floor(Math.random()*257);
    let blue = Math.floor(Math.random()*257);

    square.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function shadeColour(square){
    square.style.backgroundColor = `hsla(0, 0%, 0%, ${0.1+shadeCounter/10})`;
    shadeCounter++
}

function hoverColour(event){
    let activeBtn;
    colourChangeBtns.forEach(btn => {
        if(btn.checked) activeBtn = btn;
    })

    if (!activeBtn) {
        event.target.classList.add("activeHover");
        return
    }

    if (activeBtn.matches("#shadeCheck")) shadeColour(event.target);
    if (activeBtn.matches("#randomCheck")) randomColour(event.target);   
}