'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// const authEvents = require('./auth/events.js')
const gameUI = require('./game/game-ui.js')
const gameEvents = require('./game/game-events.js')
const authEvents = require('./auth/auth-events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.game-board').on('click', gameEvents.cellClicked)
  $('#reset-game-board').on('click', gameUI.resetBoardUI)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#games-played').on('click', gameEvents.getGames)
})
