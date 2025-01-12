// tetris.js
const boardElement = document.getElementById('board');
const rows = 20;
const columns = 10;
let grid = createGrid(rows, columns);
let currentPiece;

function createGrid(rows, columns) {
    return Array.from({ length: rows }, () => Array(columns).fill(null));
}

function render() {
    boardElement.innerHTML = '';
    grid.forEach((row, y) => {
        row.forEach((cell, x) => {
            const div = document.createElement('div');
            div.className = 'cell';
            if (cell && cell.type) {
                div.classList.add(cell.type);
            }
            div.style.left = `${x * 30}px`;
            div.style.top = `${y * 30}px`;
            boardElement.appendChild(div);
        });
    });
}

function createPiece() {
    const types = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
    const type = types[Math.floor(Math.random() * types.length)];
    switch (type) {
        case 'I':
            return new IShape();
        case 'J':
            return new JShape();
        case 'L':
            return new LShape();
        case 'O':
            return new OShape();
        case 'S':
            return new SShape();
        case 'T':
            return new TShape();
        case 'Z':
            return new ZShape();
    }
}

class Piece {
    constructor(shape) {
        this.shape = shape;
        this.cells = shape.map(([x, y]) => ({ x, y }));
    }

    render() {
        this.cells.forEach(({ x, y }) => {
            grid[y][x] = { type: this.type };
        });
    }
}

class IShape extends Piece {
    constructor() {
        super([[4, 1], [5, 1], [6, 1], [7, 1]]);
        this.type = 'I';
    }
}

class JShape extends Piece {
    constructor() {
        super([[4, 1], [4, 2], [5, 2], [6, 2]]);
        this.type = 'J';
    }
}

class LShape extends Piece {
    constructor() {
        super([[5, 1], [6, 1], [4, 2], [5, 2]]);
        this.type = 'L';
    }
}

class OShape extends Piece {
    constructor() {
        super([[4, 1], [5, 1], [4, 2], [5, 2]]);
        this.type = 'O';
    }
}

class SShape extends Piece {
    constructor() {
        super([[4, 1], [5, 1], [5, 2], [6, 2]]);
        this.type = 'S';
    }
}

class TShape extends Piece {
    constructor() {
        super([[4, 1], [5, 1], [6, 1], [5, 2]]);
        this.type = 'T';
    }
}

class ZShape extends Piece {
    constructor() {
        super([[4, 2], [5, 2], [5, 1], [6, 1]]);
        this.type = 'Z';
    }
}

currentPiece = createPiece();
currentPiece.render();
render();
