const board = document.getElementById("game-board");
const result = document.getElementById("result");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

// Initialize the game board
renderBoard();

function renderBoard() {
    board.innerHTML = "";
    gameBoard.forEach((cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        cellElement.textContent = cell;
        cellElement.addEventListener("click", () => handleClick(index));
        board.appendChild(cellElement);
    });
}

function handleClick(index) {
    if (gameBoard[index] === "" && !result.textContent) {
        gameBoard[index] = currentPlayer;
        renderBoard();
        if (checkWin()) {
            result.textContent = `Player ${currentPlayer} wins!`;
        } else if (isBoardFull()) {
            result.textContent = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winConditions.some((condition) => {
        const [a, b, c] = condition;
        return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
    });
}

function isBoardFull() {
    return gameBoard.every((cell) => cell !== "");
}
