let container = document.querySelector("container");

let pixels = 64;
prompt("Enter number of pixels (max = 100)",pixels);

for(let i=0;i<=pixels*pixels;i++)
{
    const cell = document.createElement("div");
    cell.classList("cell");
    container.appendChild(cell);
}