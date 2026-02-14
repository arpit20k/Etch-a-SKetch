
let container = document.querySelector(".container");
let controls = document.querySelector(".controls");
let pixels = 64;
let mousedown = false;

document.addEventListener("mousedown",()=>
{
    mousedown = true;
});
document.addEventListener("mouseup",()=>
{
    mousedown = false;
});

for(let i=0;i<pixels*pixels;i++)
{
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = (100/pixels)+"%";
    container.appendChild(cell);

    cell.addEventListener("mouseenter",function()
{
    if(mousedown===true)
    {
        cell.style.backgroundColor = "black";
    }
});
    cell.addEventListener("click",function()
{
        cell.style.backgroundColor = "black";
});
}

let form = document.createElement("form");

