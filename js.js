
let container = document.querySelector(".container");
let controls = document.querySelector(".controls");
let pixels = 64;

for(let i=1;i<=pixels*pixels;i++)
{
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = (100/pixels)+"%";
    container.appendChild(cell);
}

let form = document.createElement("form");
