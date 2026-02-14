
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
let shade = document.querySelector(".shade");
let shadingMode = false;
shade.addEventListener("click", () => {
    shadingMode = !shadingMode;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
});


number.addEventListener("input",(e)=>
{
    pixels=parseInt(e.target.value);
    if(pixels>100) alert("INVALID VALUE"),pixels = 64;

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

function applyShading(cell) {
    let currentShade = parseInt(cell.dataset.shade);

    if (currentShade < 10) {
        currentShade++;
        cell.dataset.shade = currentShade;
    }
    let currentColor = window.getComputedStyle(cell).backgroundColor;
    let values = currentColor.match(/\d+/g);
    let r = parseInt(values[0]);
    let g = parseInt(values[1]);
    let b = parseInt(values[2]);
     let factor = 0.9; 

    r = Math.floor(r * factor);
    g = Math.floor(g * factor);
    b = Math.floor(b * factor);
    let opacity = currentShade / 10;
    cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    shade++;
    cell.dataset.shade = shade; 
}

function Grid(pixels)
{
    container.innerHTML =``;
for(let i=0;i<pixels*pixels;i++)
{
    const cell = document.createElement("div");
    cell.dataset.shade = 0;
    cell.classList.add("cell");
    cell.style.width = (100/pixels)+"%";
    container.appendChild(cell);

    cell.addEventListener("mouseenter",function()
{
    if(mousedown===true)
    {
        if (shadingMode) {
        applyShading(cell);
    }
        else if(rainbowMode)
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
    if (shadingMode) {
        applyShading(cell);
    }
      else if(rainbowMode)
        {
            cell.style.backgroundColor=getRainbow();
        }
        else{
            cell.style.backgroundColor = currentColor;
        }
    
});
}



}

Grid(pixels);
let cells = document.querySelectorAll(".cell");

reset.addEventListener("click",function(e){
    cells.forEach(cell => {
        cell.style.backgroundColor="aliceblue";
        cell.dataset.shade=0;
    });
});
