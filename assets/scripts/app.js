'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// const authEvents = require('./auth/events.js')
const gameUI = require('./game/game-ui.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#0').on('click', gameUI.cellClicked)
  $('#1').on('click', gameUI.cellClicked)
  $('#2').on('click', gameUI.cellClicked)
  $('#3').on('click', gameUI.cellClicked)
  $('#4').on('click', gameUI.cellClicked)
  $('#5').on('click', gameUI.cellClicked)
  $('#6').on('click', gameUI.cellClicked)
  $('#7').on('click', gameUI.cellClicked)
  $('#8').on('click', gameUI.cellClicked)
  $('#reset-game-board').on('click', gameUI.resetBoardUI)
  // $('#sign-up-form').on('submit', authEvents.onSignUp)
  // $('#sign-in-form').on('submit', authEvents.onSignIn)
  // $('#change-password-form').on('submit', authEvents.onChangePassword)
  // $('#sign-out-button').on('click', authEvents.onSignOut)
})
