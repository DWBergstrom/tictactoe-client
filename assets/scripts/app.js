'use strict'

const gameUI = require('./game/game-ui.js')
const gameEvents = require('./game/game-events.js')
const authEvents = require('./auth/auth-events.js')

// enable click and form submit handlers
$(() => {
  $('.game-board').on('click', gameEvents.cellClicked)
  $('#reset-game-board').on('click', gameUI.resetBoardUI)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#games-played').on('click', gameEvents.getGames)
})
