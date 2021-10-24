const maxCells = 64;
let cells = document.getElementsByClassName("cell");
let resetBtn = document.querySelector(".resetBtn");
let etchBoard = document.querySelector(".etchBoard");

resetBtn.addEventListener('click', promptForCellAmount);

function promptForCellAmount() {
    resetBoard();

    let amountOfCells = prompt("Please enter the size of grid you would like. The max is 64")

    if (amountOfCells == null || amountOfCells == "") {
        location.reload()
    }
    
    let cellsToCreate = parseInt(amountOfCells);

    if (cellsToCreate > maxCells) {
        cellsToCreate = maxCells
    }
    drawBoard(cellsToCreate);
}

function drawBoard(cellsToCreate) {
    document.documentElement.style.setProperty('--howManyColumns', cellsToCreate);
    
    for (i = 0; i < cellsToCreate * cellsToCreate; i++) {
        let cellDiv = document.createElement("div");
        cellDiv.classList.add('cell');
        etchBoard.appendChild(cellDiv);
    }
    
    for (i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', changeClass);
    }
}

function resetBoard() {
    while (etchBoard.childElementCount > 1) {
        etchBoard.removeChild(etchBoard.lastChild);
        console.log(etchBoard.childElementCount);
    }
}

function changeClass() {
    this.classList.add('active');
}