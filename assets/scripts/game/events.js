
const checkForWin = function (gameBoard) {

  // create a coordinateGrid array to represent the game board
  const coordinateGrid = [
    [0, 0], [0, 1], [0, 2],
    [1, 0], [1, 1], [1, 2],
    [2, 0], [2, 1], [2, 2]
  ]

  // initialize coordinate array to eventually mesh the game board elements
  // with the coordinateGrid
  const gameBoardCoordinates = []
  for (let i = 0; i < coordinateGrid.length; i++) {
    gameBoardCoordinates.push(coordinateGrid[i])
  }

  // console.log(gameBoardCoordinates)

  // map the current game board elements into the gameBoardCoordinates
  const addGameBoardElements = function () {
    for (let i = 0; i < gameBoard.length; i++) {
      // console.log(gameBoard[i])
      // console.log(gameBoardCoordinates[i])
      gameBoardCoordinates[i][2] = gameBoard[i]
    }
  }


  addGameBoardElements()
  console.log(gameBoardCoordinates)

  // test to see if fewer than three indexes of of the gameBoard are occupied
  // if no, nobody has won yet

  // if (gameBoardCoordinates.length >= 3) {
  //   console.log(gameBoardCoordinates + ' is at least 3')
  // } else {
  //   console.log(gameBoardCoordinates + ' is shorter than 3')
  // }

  // if yes, test to see if any row, column, or cross on the coordinates grid
  // has the same string
    // if yes, set game to over with update call to API
    // add "you've won" message, update game count, show reset game board option
    // if no, set currentPlayer to next player and call change game tile on click


}



const changeGameTile = function (currentPlayer, gameBoard) {

  console.log(currentPlayer)

  // click listener activates
  // this should be a ui event
  // check whose turn it is (x or o) - save in variable
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  }

  console.log(currentPlayer)

  // possible parameters:
    // current cell state (x or o or blank - get html?)


  // if game tile is not empty, do not allow click to change
  // else if last turn was x, change cell to o and remove click listener
  // else change cell to x and remove click listener

  // push onto cellsArray <-- use store.js?
  // send update to the API
  // make show request from the API for the current cellsArray
  // and call checkForWin
  checkForWin(gameBoard)
}

// Create empty board
const resetGameBoard = function () {
  // set all cells to blank
  const gameBoard = ['', 'x', '', 'o', '', 'o', '', '', '']

  const currentPlayer = 'x' // x or o.  if new game, always x <-- use store.js?


  console.log(gameBoard, currentPlayer)

  checkForWin(gameBoard)

  // send create call to API
  // retrieve games stats with index call to API

  return currentPlayer
}

resetGameBoard()

// changeGameTile()
