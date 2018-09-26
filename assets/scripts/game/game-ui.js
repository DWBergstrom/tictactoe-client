
const gameEvents = require('./game-events.js')

const cellClicked = function (event) {
  // get currentPlayer
  const currentPlayer = gameEvents.changeGameTile
  console.log('current player in changeGameTile is ' + currentPlayer)
  console.log('cell 0 clicked - function')
  const gameIndex = event.target.getAttribute('data-cell-index')
  console.log('gameIndex is ' + gameIndex)
  $(`#${gameIndex}`).html(`${currentPlayer}`)
  // send API call with current index and value
}

const resetBoardUI = function (event) {
  $('.game-board').html('select')
  // call events.resetGameBoard
}

module.exports = {
  cellClicked,
  resetBoardUI
}
