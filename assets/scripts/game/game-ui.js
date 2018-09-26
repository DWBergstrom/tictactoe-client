
const gameEvents = require('./game-events.js')

const resetBoardUI = function (event) {
  $('.game-board').html('')
  $('display-message').html('')
  // call gameEvents.resetGameBoard
  const gameReset = gameEvents.resetGameBoard()
  console.log(gameReset)
}

module.exports = {
  resetBoardUI
}
