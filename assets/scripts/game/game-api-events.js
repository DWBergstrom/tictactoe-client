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
  $('.game-id').html(`${store.game.id}`)
  console.log('game id is ', store.game.id)

  // store the game state (over is true or false)
  store.game.over = response.game.over
  console.log('game over? ', store.game.over)

  // store the player ID so we can update the game properly
  store.game.player_x.id = response.game.player_x.id
  console.log('player id is ', store.game.player_x.id)

  return store.game
}

const gameState = function (response) {
  store.game.cells = response.game.cells
  console.log(store.game.cells, ' in gameState check')
}

module.exports = {
  newGameCreated,
  gameState
}
