'use strict'

const store = require('../store.js')

const newGameCreated = function (response) {
  // store the entire game object returned from the API
  store.game = response.game
  console.log('API game state in newGameCreated func ', store.game)

  // store the game array locally for game logic
  store.game.cells = response.game.cells
  console.log('gameboard is ', store.game.cells)

  // store the current game ID to display while playing
  store.game.id = response.game.id
  $('.game-id').html(`Your new game ID is: ${store.game.id}`)
  $('.game-id').css('color', 'black')
  console.log('game id is ', store.game.id)

  // store the game state (over is true or false)
  store.game.over = response.game.over
  console.log('game over? ', store.game.over)

  // store the player ID so we can update the game properly
  store.game.player_x.id = response.game.player_x.id
  console.log('player id is ', store.game.player_x.id)

  return store.game
}

const newGameCreatedFailure = function () {
  $('.game-id').html('There was a problem creating a new game on the server.  Please check your network connection and click "Start new game" again.')
  $('.game-id').css('color', 'red')
  $('.game-board').off('click')
}

const gamePatchSuccessful = function () {
  $('.game-alert2').show()
  $('.game-alert2').html('Game updated on server.').fadeOut(1000)
}

const gamePatchUnSuccessful = function () {
  $('.game-alert2').show()
  $('.game-alert2').html('There was a problem updating the game on the server.').fadeOut(1000)
}

const gameState = function (response) {
  store.game.cells = response.game.cells
  console.log(store.game.cells, ' in gameState check')
}

module.exports = {
  newGameCreated,
  newGameCreatedFailure,
  gamePatchSuccessful,
  gamePatchUnSuccessful,
  gameState
}
