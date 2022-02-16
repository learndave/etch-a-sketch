function draw(e) {
    if (e.type == "mouseenter" && isMouseDown == false) {
        return;
    };
    e.target.style.backgroundColor = brushColor;

}

function clearGrid() {
    canvas.innerHTML = "";
}

function makeGrid(size) {
    canvas.style.gridTemplateColumns = `repeat(${size},1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size},1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseenter",draw);
        cell.addEventListener("mousedown", draw);
        canvas.appendChild(cell);
    }
}

function setBrushSettings() {
    brushColor = brushColorInput.value;
}

function refresh() {
    clearGrid();
    makeGrid(gridSizeInput.value);
    setBrushSettings();
}


// =========================================
// =========================================
// =========================================
// =========================================

// GLOBAL OBJECTS
const canvas = document.querySelector(".canvas");
const gridSizeInput = document.querySelector('#gridSize');
const brushColorInput = document.querySelector('#brushColor');

// default values;
let brushColor = "black";
let isMouseDown = false;

// check if mouse is down
canvas.onmousedown = () => (isMouseDown = true);
canvas.onmouseup = () => (isMouseDown = false);

// detect settings changes
gridSizeInput.onchange = () => refresh();
brushColorInput.onchange = () => setBrushSettings();

// start
refresh();