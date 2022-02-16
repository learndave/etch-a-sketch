function getMixedColors(currentColor) {
    currentColor = currentColor.match(/\d+/g);
    let _brushColor = [
        parseInt(brushColor.substring(1,3),16),
        parseInt(brushColor.substring(3,5),16),
        parseInt(brushColor.substring(5,7),16)
    ]
    let a = brushOpacity/100;
    mixedColor = [
        (1 - a) * parseInt(currentColor[0]) + (a * _brushColor[0]),
        (1 - a) * parseInt(currentColor[1]) + (a * _brushColor[1]),
        (1 - a) * parseInt(currentColor[2]) + (a * _brushColor[2]),
    ]
    return `rgb(${mixedColor[0]}, ${mixedColor[1]}, ${mixedColor[2]})`
}


function draw(e) {
    if (e.type == "mouseover" && isMouseDown == false) {
        return;
    };
    currentColor = e.target.style.backgroundColor;
    e.target.style.backgroundColor = getMixedColors(currentColor);
}

function clearGrid() {
    canvas.innerHTML = "";
}

function makeGrid(size) {
    canvas.style.gridTemplateColumns = `repeat(${size},1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size},1fr)`;
    gridSizeCaption.innerHTML = `${gridSizeInput.value} x ${gridSizeInput.value}`;
    
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.backgroundColor = backgroundColorInput.value;;
        cell.addEventListener("mouseover",draw);
        cell.addEventListener("mousedown", draw);
        canvas.appendChild(cell);
    }
}

function setBrushSettings() {
    opacityCaption.innerHTML = `${opacityInput.value}%`;

    brushColor = brushColorInput.value;
    brushOpacity = opacityInput.value;
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
const brushColorInput = document.querySelector("#brushColor");
const opacityInput = document.querySelector("#opacity");
const gridSizeInput = document.querySelector("#gridSize");
const backgroundColorInput = document.querySelector("#backgroundColor");
const clearCanvasButton = document.querySelector(".clear");
const gridSizeCaption = document.querySelector(".caption.gridSize");
const opacityCaption = document.querySelector(".caption.opacity")

// default values;
let brushOpacity = 100;
let brushColor = brushColorInput.value;
let isMouseDown = false;
let backgroundColor = backgroundColorInput.value;

// check if mouse is down
canvas.onmousedown = () => (isMouseDown = true);
canvas.onmouseup = () => (isMouseDown = false);

// detect settings changes
gridSizeInput.onchange = () => refresh();
brushColorInput.onchange = () => setBrushSettings();
opacityInput.onchange = () => setBrushSettings();
backgroundColorInput.onchange = () => refresh();
clearCanvasButton.onclick = () => refresh();

// update HTML captions

// start
refresh();