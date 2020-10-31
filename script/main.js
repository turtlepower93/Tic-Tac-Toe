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

    //if (player1's turn) -->target colors['1']
    if(player1Board.length === player2Board.length) {
        player1Board.push(cellId);
        console.log(player1Board);
         } else {
            player2Board.push(cellId);
            console.log(player2Board);
         }
      


    //if (player2's turn) -->target colors['-1'] //setWhatever

    //checkWincondition. search in player1's grid for winningCombo
    render();
};

function render() {

}

function clearBoard() {
    
}


function init() {
    playerTurn = 1;

    clearBoard();
    render();
}