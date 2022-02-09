function clearGrid() {
    const canvas = document.querySelector(".canvas");
    canvas.innerHTML = "";
}

function createGrid() {
    const canvas = document.querySelector(".canvas");
    canvas.style.width = "600px";
    canvas.style.height = "600px";
    canvas.innerHTML = "";
    gridDimension = document.querySelector("#gridDimension").value;
    let cellDimension = parseInt(canvas.style.width.toString())/gridDimension + "px";

    for (let i = 0; i < gridDimension; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        console.log(cellDimension)
        row.style.height = cellDimension;
        canvas.appendChild(row)
        for (j = 0; j < gridDimension; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = cellDimension;
            cell.style.height = cellDimension;
            row.appendChild(cell);
        }
    }
}

function refresh() {
    clearGrid();
    createGrid();
}

function createEventListeners() {
    document.querySelector("#gridDimension").addEventListener("change",refresh);
}

function main() {
    createEventListeners();
}

main();