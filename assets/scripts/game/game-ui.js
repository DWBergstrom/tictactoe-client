'use strict'

const gameEvents = require('./game-events.js')

// function to clear game board html and call game logic to
// get new game array from the API
const resetBoardUI = function (event) {
  $('.game-board').html('')
  $('display-message').html('')
  // call gameEvents.resetGameBoard
  gameEvents.resetGameBoard()
}

module.exports = {
  resetBoardUI
}
