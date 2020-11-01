/*----- constants -----*/

    const colors = {
        'null': 'white',
        '1': 'url(https://i.kym-cdn.com/photos/images/newsfeed/001/505/717/49b.jpg)',
        '-1': 'url(https://i.kym-cdn.com/photos/images/newsfeed/001/505/718/136.jpg)'
    }

    const winningCombos = [
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],
        ['0','3','6'],
        ['1','4','7'],
        ['2','5','8'],
        ['0','4','8'],
        ['2','4','6'],
    ]

/*----- app's state (variables) -----*/

let gameStatus;
let player1Board = [];
let player2Board = [];


/*----- cached element references -----*/

const cellEl = document.querySelectorAll('.grid-container > *');
const replayEl = document.querySelector('.replay');
console.log(replayEl)

//console.log(cellEl) // ----> Gets specific ID for cell.



/*----- event listeners -----*/

document.querySelector('.grid-container').addEventListener('click', handleCellClick);

document.querySelector('.replay').addEventListener('click',init);

/*----- functions -----*/

init();


function handleCellClick(evt) {
    console.log(evt.target)
    cellId = evt.target.id;
    let currentPlayerChoice;

    //if cell is already picked... then pick again!
    if(player2Board.includes(cellId) || player1Board.includes(cellId)) return;

    //Switch between player turns
    if(player1Board.length === player2Board.length) {
        player1Board.push(cellId);
       // console.log(player1Board);
        playerArray = player1Board;
        currentPlayer = colors['1'];
         } else {
        player2Board.push(cellId);
       // console.log(player2Board);
        playerArray = player2Board;
        currentPlayer = colors['-1']
    }
    
    //update game board
    renderGameBoard(playerArray,currentPlayer,cellId);

    if(winCheck(playerArray) === 'w') {
        renderReplayButton();
    }
    //check if tie
    if(player1Board.length + player2Board.length === 9) {
        renderReplayButton();
    }
};

function winCheck(currentPlayerBoard) {

    for (i = 0;i<winningCombos.length;i++) {
      hits = 0;
      //console.log(winnerArray[i]);
      for(j = 0; j<currentPlayerBoard.length;j++)
      if(winningCombos[i].includes(currentPlayerBoard[j])) {
        hits += 1;
       // console.log('hits' + hits)
        if(hits === 3){
         return 'w';
        }
      }
    }
    return 'f';
}
    
function renderReplayButton() {
    replayEl.style.visibility = 'visible';
}

function renderGameBoard(playerArray,currentPlayer,cellId) {
    
    console.log(playerArray);
    console.log(currentPlayer);
    playerArray.forEach(function () {
        //debugger;
        cellEl[cellId].style.background = currentPlayer;
        cellEl[cellId].style.backgroundSize = 'cover';
    });
   


}

function render() {

}

function clearBoard() {
    player1Board = [];
    player2Board = [];
    cellEl.forEach(function(ele) {
        ele.style.background = 'white';
    })
    
}
function init() {
    replayEl.style.visibility = "hidden";
    playerTurn = 1;
    clearBoard();
    render();
}