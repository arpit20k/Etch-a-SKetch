
let container = document.querySelector(".container");
let controls = document.querySelector(".controls");
let pixels = 64;
let mousedown = false;
let color = document.querySelector(".color");
let reset = document.querySelector(".reset");


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
let cells = document.querySelectorAll(".cell");

reset.addEventListener("click",function(e){
    cells.forEach(cell => {
        cell.style.backgroundColor="aliceblue";
    });
});
