// script.js
const board = document.getElementById('board');
const rows = 20;
const cols = 10;
let grid = createGrid(rows, cols);

function createGrid(rows, cols) {
    let grid = [];
    for (let row = 0; row < rows; row++) {
        grid[row] = [];
        for (let col = 0; col < cols; col++) {
            grid[row][col] = { type: 'empty', color: '#ccc' };
        }
    }
    return grid;
}

function renderGrid() {
    board.innerHTML = '';
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            if (grid[row][col].type === 'block') {
                cell.style.backgroundColor = grid[row][col].color;
            } else {
                cell.style.backgroundColor = '#ccc';
            }
            board.appendChild(cell);
        }
    }
}

renderGrid();
