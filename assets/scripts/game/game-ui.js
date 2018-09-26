
const gameEvents = require('./game-events.js')
const store = require('../store.js')

const cellClicked = function (event) {
  // clear alert div
  $('.game-alert1').html('')
  // set game index variable using the data attribute
  const gameIndex = event.target.getAttribute('data-cell-index')
  // console.log('gameIndex is ' + gameIndex)
  // get currentPlayer and board
  const currentPlayer = store.gameState.player
  // console.log(currentPlayer)
  const gameBoard = store.gameState.board
  $(`#${gameIndex}`).html(`${currentPlayer}`)
  // check to make sure game cell is not occupied
  gameEvents.checkGameCell(currentPlayer, gameBoard, gameIndex)

  // console.log('cell 0 clicked - gameUI function')
  // send API call with current index and value
  // change current player
}

const resetBoardUI = function (event) {
  $('.game-board').html('')
  // call gameEvents.resetGameBoard
  const gameReset = gameEvents.resetGameBoard()
  console.log(gameReset)
}

module.exports = {
  cellClicked,
  resetBoardUI
}