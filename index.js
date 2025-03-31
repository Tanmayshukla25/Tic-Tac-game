let boxClick = document.getElementsByClassName("col");
let btn = document.getElementById("btn");


let currentPlayer="X"

let array=Array(9).fill(null);
Array.from(boxClick).forEach((box) => {
    box.addEventListener("click", handleClick);
});


function checkWinner() {
    if (
        (array[0] !== null && array[0] === array[1] && array[1] === array[2]) ||
        (array[3] !== null && array[3] === array[4] && array[4] === array[5]) ||
        (array[6] !== null && array[6] === array[7] && array[7] === array[8]) ||
        (array[0] !== null && array[0] === array[3] && array[3] === array[6]) ||
        (array[1] !== null && array[1] === array[4] && array[4] === array[7]) ||
        (array[2] !== null && array[2] === array[5] && array[5] === array[8]) ||
        (array[0] !== null && array[0] === array[4] && array[4] === array[8]) ||
        (array[2] !== null && array[2] === array[4] && array[4] === array[6])
    ) 
    {
  
    }
    
}



function handleClick(e) {
   const idName=  e.target;
   const clickedBox=Number(idName.id);
   if(array[clickedBox]!==null)
    return;
   array[clickedBox]=currentPlayer;
   idName.innerText=currentPlayer;
   currentPlayer=currentPlayer==="X"?"O":"X";
   checkWinner();

  
}

btn.addEventListener("click", () => {
    window.location.reload();
});


