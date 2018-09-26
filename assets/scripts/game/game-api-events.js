'use strict'

const store = require('../store.js')

const newGameCreated = function (response) {
  store.game = response.game

  // console.log('API game state in newGameCreated func ' + store.game)
  // console.log(store.game.id)

  store.game.cells = response.game.cells
  // console.log('gameboard is ' + gameBoard)
  // console.log('gameboard is ' + store.game.cells)
  store.game.id = response.game.id
  $('.game-id').html(`${store.game.id}`)
  // console.log('game id is ' + gameID)
  // console.log('game id is ' + store.game.id)
  store.game.over = response.game.over
  // console.log('game over? ' + gameOver)
  // console.log('game over? ' + store.game.over)
  store.game.player_x.id = response.game.player_x.id
  // console.log('player id is ' + playerID)
  // console.log('player id is ' + store.game.player_x.id)

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
