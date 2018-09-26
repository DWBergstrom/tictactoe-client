
const checkForWin = function (gameBoard, currentPlayer) {
  console.log(gameBoard, 'current player in checkForWin is ' + currentPlayer)
  // create an array of currently occupied game board elements
  const gameBoardElements = []

  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i].length === 1) {
      gameBoardElements.push(gameBoard[i])
    }
  }
  // test to see if at least three indexes of of the gameBoard are occupied
  // if yes, test to see if any row, column, or cross on the coordinates grid
  // has the same string
  if (gameBoardElements.length >= 3) {
    console.log(gameBoardElements + ' is at least 3')
    // test rows
    if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
      console.log(gameBoard[0] + ' wins!')
    } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
      console.log(gameBoard[3] + ' wins!')
    } else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
      console.log(gameBoard[6] + ' wins!')
    } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
      console.log(gameBoard[0] + ' wins!')
    } else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
      console.log(gameBoard[1] + ' wins!')
    } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
      console.log(gameBoard[2] + ' wins!')
    } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
      console.log(gameBoard[0] + ' wins!')
    } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
      console.log(gameBoard[2] + ' wins!')
    } else if (gameBoardElements.length === 9) {
      console.log('Draw!  The board is full.')
    }
  } else {
    console.log(gameBoardElements + ' is shorter than 3. continue')
  }

  // if yes, set game to over with update call to API
  // add "you've won" message, update game count, show reset game board option
  // if no, set currentPlayer to next player and call change game tile on click

  changeGameTile(currentPlayer, gameBoard)
}

const changeGameTile = function (currentPlayer, gameBoard) {
  // click listener activates
  // this should be a ui event
  // check whose turn it is (x or o) - save in variable



  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }

  console.log('current player in changeGameTile is ' + currentPlayer)

  // possible parameters:
  // current cell state (x or o or blank - get html?)

  // if game tile is not empty, do not allow click to change
  // else if last turn was x, change cell to o and remove click listener
  // else change cell to x and remove click listener

  // push onto cellsArray <-- use store.js?
  // send update to the API
  // make show request from the API for the current cellsArray
  // and call checkForWin
  return currentPlayer
  checkForWin(gameBoard)
}

// Create empty board
const resetGameBoard = function () {
  // set all cells to blank
  const gameBoard = ['', '', '', '', '', '', '', '', '']

  const currentPlayer = 'o' // x for new game. <-- use store.js?

  // console.log(gameBoard, currentPlayer)

  checkForWin(gameBoard, currentPlayer)

  // send create call to API
  // retrieve games stats with index call to API
}

resetGameBoard()

// checkForWin(['x', '', '', '', 'o', '', 'o', 'x', 'x'])
