'use strict'

const store = require('../store.js')

const newGameCreated = function (response) {
  // store the entire game object returned from the API
  store.game = response.game

  // store the game array locally for game logic
  store.game.cells = response.game.cells

  // store the current game ID to display while playing
  store.game.id = response.game.id
  $('.game-id').html(`Your new game ID is: ${store.game.id}`)
  $('.game-id').css('color', 'black')

  // store the game state (over is true or false)
  store.game.over = response.game.over

  // store the player ID so we can update the game properly
  store.game.player_x.id = response.game.player_x.id

  return store.game
}

const newGameCreatedFailure = function () {
  $('.game-id').html('There was a problem creating a new game on the server.  Please check your network connection and click "New Game" again.')
  $('.game-id').css('color', 'red')
  $('.game-board').off('click')
}

const gamePatchSuccessful = function () {
  $('.game-alert2').show()
  $('.game-alert2').html('Game updated on server.').fadeOut(1000)
}

const gamePatchUnSuccessful = function () {
  $('.game-alert3').html('')
  $('.game-alert2').show()
  $('.game-alert2').html('There was a problem updating the game on the server. Please check your network connection and start a new game.')
  $('.game-board').off('click')
}

const gameState = function (response) {
  store.game.cells = response.game.cells
}

module.exports = {
  newGameCreated,
  newGameCreatedFailure,
  gamePatchSuccessful,
  gamePatchUnSuccessful,
  gameState
}
