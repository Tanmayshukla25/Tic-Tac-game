let boxClick = document.getElementsByClassName("col");
let btn = document.getElementById("btn");

let currentPlayer = "X";
let array = Array(9).fill(null);
let gameOver = false; // Prevent further moves after a win

Array.from(boxClick).forEach((box) => {
    box.addEventListener("click", handleClick);
});

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]           
    ];

    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (array[a] && array[a] === array[b] && array[a] === array[c]) {
            console.log(`Winner is ${array[a]}`);
            gameOver = true; 
            return;
        }
    }
}

function handleClick(e) {
    if (gameOver) return; 

    const idName = e.target;
    const clickedBox = Number(idName.id);

    if (array[clickedBox] !== null) return;

    array[clickedBox] = currentPlayer;
    idName.innerText = currentPlayer;

    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

btn.addEventListener("click", () => {
    window.location.reload();
});
