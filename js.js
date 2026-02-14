
let container = document.querySelector(".container");
let controls = document.querySelector(".controls");
let pixels = 64;
let mousedown = false;
let colorPicker = document.querySelector(".color");
let reset = document.querySelector(".reset");
let currentColor = colorPicker.value;
let eraserBool = false;
let draw = document.querySelector(".pen");
let eraser = document.querySelector(".erase");
let rainbow = document.querySelector(".rainbow");
let hue = 0;
let rainbowMode = false;
let number = document.querySelector(".number");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});


number.addEventListener("input",(e)=>
{
    pixels=parseInt(e.target.value);
    Grid(pixels);
});
rainbow.addEventListener("click",()=>{
    rainbowMode= !rainbowMode;
});

function getRainbow()
{
    let color = `hsl(${hue},100%,50%)`;
    hue = (hue+5)%360;
    return color;   
};

draw.addEventListener("click",()=>{
    eraserBool=false;
});
eraser.addEventListener("click",()=>{
    eraserBool = true;
});

colorPicker.addEventListener("input", () => {
    currentColor = colorPicker.value;
});


document.addEventListener("mousedown",()=>
{
    mousedown = true;
});
document.addEventListener("mouseup",()=>
{
    mousedown = false;

});
Grid(pixels);
function Grid(pixels)
{
    container.innerHTML =``;
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
        if(rainbowMode)
        {
            cell.style.backgroundColor=getRainbow();
        }
        else{
            cell.style.backgroundColor = currentColor;
        }
    }
    if(eraserBool===true)
    {
        cell.style.backgroundColor = "aliceblue";
    }
});
    cell.addEventListener("click",function()
{
      if(rainbowMode)
        {
            cell.style.backgroundColor=getRainbow();
        }
        else{
            cell.style.backgroundColor = currentColor;
        }
    
});
}
}
let cells = document.querySelectorAll(".cell");

reset.addEventListener("click",function(e){
    cells.forEach(cell => {
        cell.style.backgroundColor="aliceblue";
    });
});
