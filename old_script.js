function clearGrid() {
    const canvas = document.querySelector(".canvas");
    canvas.innerHTML = "";
}

function createGrid() {
    const canvas = document.querySelector(".canvas");
    const gridDimension = document.querySelector("#gridDimension").value;
    const cellSize = parseInt(canvas.offsetWidth)/gridDimension + "px";

    for (let i = 0; i < gridDimension; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.height = cellSize;
        canvas.appendChild(row)
        for (j = 0; j < gridDimension; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = cellSize;
            cell.style.height = cellSize;
            cell.addEventListener("mouseover",draw);
            cell.addEventListener("mousedown",draw);
            row.appendChild(cell);
        }
    }
}

function draw(e) {
    if (e.type == "mousedown") {
        {}
    } else if (GLOBAL_mouseDown) {
        {}
    } else {
        return;
    }

    e.target.style.backgroundColor = "green";
}

function refresh() {
    clearGrid();
    createGrid();
    createEventListeners();
}

function createEventListeners() {
    document.querySelector("#gridDimension").addEventListener("change",refresh);
}

function main() {
    refresh();
    createEventListeners();
}

let GLOBAL_mouseDown = false;
document.body.querySelector(".canvas").onmousedown = () => (GLOBAL_mouseDown = true);
document.body.querySelector(".canvas").onmouseup = () => (GLOBAL_mouseDown = false);

main();