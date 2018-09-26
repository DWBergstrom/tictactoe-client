
const store = require('../store.js')

// if game tile is not empty, do not allow click to change
const checkGameCell = function (currentPlayer, gameBoard, gameIndex) {
  if (gameBoard[gameIndex] === 'x' || gameBoard[gameIndex] === 'o') {
    $('.game-alert1').html('Cell is already occupied!').fadeOut(1000, function () {
    // Animation complete.
    })
  } else {
    // Update the game board array
    updateGameBoard(currentPlayer, gameBoard, gameIndex)
  }
}

const updateGameBoard = function (currentPlayer, gameBoard, gameIndex) {
  console.log(currentPlayer, gameBoard, gameIndex)
  gameBoard[gameIndex] = currentPlayer
  console.log(gameBoard)
  changePlayer(currentPlayer, gameBoard)
  // push onto cellsArray <-- use store.js?
  // send update to the API
  // make show request from the API for the current cellsArray
  // and call checkForWin
  checkForWin(gameBoard, currentPlayer)
}

const checkForWin = function (gameBoard, currentPlayer) {
  // check if cell is occupied

  console.log('current gameBoard in checkForWin is ' + gameBoard, 'current player in checkForWin is ' + currentPlayer)
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
      $('.game-alert1').html(`${currentPlayer} wins!`)
      $('.game-board').off('click')
    } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
      console.log(gameBoard[3] + ' wins!')
      $('.game-alert1').html(`${currentPlayer} wins!`)
      $('.game-board').off('click')
    } else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
      console.log(gameBoard[6] + ' wins!')
      $('.game-alert1').html(`${currentPlayer} wins!`)
      $('.game-board').off('click')
    } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
      console.log(gameBoard[0] + ' wins!')
      $('.game-alert1').html(`${currentPlayer} wins!`)
      $('.game-board').off('click')
    } else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
      console.log(gameBoard[1] + ' wins!')
      $('.game-alert1').html(`${currentPlayer} wins!`)
      $('.game-board').off('click')
    } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
      console.log(gameBoard[2] + ' wins!')
      $('.game-alert1').html(`${currentPlayer} wins!`)
      $('.game-board').off('click')
    } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
      console.log(gameBoard[0] + ' wins!')
      $('.game-alert1').html(`${currentPlayer} wins!`)
      $('.game-board').off('click')
    } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
      console.log(gameBoard[2] + ' wins!')
      $('.game-alert1').html(`${currentPlayer} wins!`)
      $('.game-board').off('click')
    } else if (gameBoardElements.length === 9) {
      console.log('Draw!  The board is full.')
      $('.game-alert1').html('Draw!  The board is full.')
      $('.game-board').off('click')
    }
  } else {
    console.log(gameBoardElements + ' is shorter than 3. continue')
  }

  // if yes, set game to over with update call to API
  // add "you've won" message, update game count, show reset game board option

  // if no, set currentPlayer to next player and call change game tile on click
  changePlayer(currentPlayer, gameBoard)
}

const changePlayer = function (currentPlayer, gameBoard) {
  // click listener activates
  // this should be a ui event
  // check whose turn it is (x or o) - save in variable

  // console.log('current player & gameboard in changePlayer ' + currentPlayer, gameBoard)

  if (currentPlayer === 'x') {
    store.gameState.player = 'o'
    // console.log(currentPlayer + ' after player check')
  } else {
    store.gameState.player = 'x'
    // console.log(currentPlayer + ' after player check')
  }

  return currentPlayer
  // checkForWin(gameBoard)
}

// Create empty board
const resetGameBoard = function () {
  console.log(gameUI.cellClicked)
  $('.game-board').on('click', gameUI.cellClicked)
  // set all cells to blank
  const gameBoard = ['', '', '', '', '', '', '', '', '']

  const currentPlayer = 'x' // x for new game. <-- use store.js?

  $('.game-alert1').html('')

  // send create call to API
  // retrieve games stats with index call to API

  store.gameState = {
    board: gameBoard,
    player: currentPlayer
  }

  return store.gameState
}

// resetGameBoard()

// checkForWin(['x', '', '', '', 'o', '', 'o', 'x', 'x'])

module.exports = {
  resetGameBoard,
  changePlayer,
  checkForWin,
  updateGameBoard,
  checkGameCell
}