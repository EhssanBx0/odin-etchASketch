let sketchContainer = document.createElement("div");
sketchContainer.classList.add("container");

for (let i=0; i < 16*16; i++){
    let square = document.createElement("div");
    square.classList.add("square");
    sketchContainer.append(square);
}

let body = document.querySelector("body");
body.append(sketchContainer);