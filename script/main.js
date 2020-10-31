/*----- constants -----*/

    const colors = {
        'null': null,
        '1': 'blue',
        '-1': 'red'
    }

    const winningcombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

/*----- app's state (variables) -----*/

let currentBoard = [null,null,null,null,null,null,null,null];
let gameStatus;
let player1Board = [];
let player2Board = [];


/*----- cached element references -----*/

const cellEl = document.querySelectorAll('.grid-container > *');

console.log(cellEl[1].id) // ----> Gets specific ID for cell.



/*----- event listeners -----*/

document.querySelector('.grid-container').addEventListener('click', handleCellClick);

document.getElementById('reset').addEventListener('click',init);

/*----- functions -----*/

init();

function handleCellClick(evt) {
    console.log(evt.target)
    cellId = evt.target.id;
    let currentPlayerChoice;

    //if cell is already picked... then pick again!
    if(player2Board.includes(cellId) || player1Board.includes(cellId)) return render();

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
    weHaveWinner();
    //Check if someone won! (if player1Board.length + player2Board.length === 9 THEN TIE)

    render();
};

function renderGameBoard(playerArray,currentPlayer,cellId) {
    //minipulateDOM
    
    console.log(playerArray);
    console.log(currentPlayer);
    playerArray.forEach(function () {
        //debugger;
        cellEl[cellId].style.background = currentPlayer;
    })

}

function weHaveWinner() {
    player1Board.forEach(function() {
        
    })
}

function render() {

}

function clearBoard() {
    player1Board = [];
    player2Board = [];
}


function init() {
    playerTurn = 1;

    clearBoard();
    render();
}