'use strict'

const store = require('../store.js')
const gameAPI = require('./game-api.js')
const gameAPIEvents = require('./game-api-events.js')
const gameAlertUI = require('./game-alert-ui.js')

// If any game tile is not empty, do not allow click to change
const checkGameCell = function (currentPlayer, gameIndex, gameBoardAPI) {
  // check if cell is occupied by either player; alert if so
  if (gameBoardAPI[gameIndex] === 'x' || gameBoardAPI[gameIndex] === 'o') {
    $('.game-alert3').show()
    $('.game-alert3').html('Cell is already occupied!').fadeOut(1000)
  } else {
    // Update the cell and call function to update game board array
    $(`#${gameIndex}`).html(`${currentPlayer}`)
    updateGameBoard(currentPlayer, gameIndex, gameBoardAPI)
  }
}

// Update the game board arrays (both in the store and via the API)
const updateGameBoard = function (currentPlayer, gameIndex, gameBoardAPI) {
  // update gameBoardAPI copy locally first
  gameBoardAPI[gameIndex] = currentPlayer

  // send update to the API
  gameAPI.updateGame(store.game.id, gameIndex, currentPlayer)
    .then(gameAPIEvents.gamePatchSuccessful)
    .catch(gameAPIEvents.gamePatchUnSuccessful)

  // call checkForWin
  checkForWin(currentPlayer)
}

// Check to see if either player has won
const checkForWin = function (currentPlayer) {
  // check the local gameBoard again
  const gameBoard = store.game.cells

  // create an empty array of currently occupied game board elements
  const gameBoardElements = []

  // if any index on the gameboard is occupied, push it onto the test array
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i].length === 1) {
      gameBoardElements.push(gameBoard[i])
    }
  }
  // test to see if at least three indexes of of the gameBoard are occupied
  // if yes, test to see if any row, column, or cross on the coordinates grid
  // has the same string
  if (gameBoardElements.length >= 3) {
    // test rows, columns, then crosses, then for draw
    if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
      // console.log(gameBoard[0] + ' wins!')
      $('.game-alert1').html('')
      $('.game-alert3').show()
      $('.game-alert3').html(`${currentPlayer} wins!   Click "New Game" to play again.`)
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(gameAlertUI.gameFinishSuccess)
        .catch(gameAlertUI.gameFinishFailure)
    } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
      // console.log(gameBoard[3] + ' wins!')
      $('.game-alert1').html('')
      $('.game-alert3').show()
      $('.game-alert3').html(`${currentPlayer} wins!   Click "New Game" to play again.`)
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(gameAlertUI.gameFinishSuccess)
        .catch(gameAlertUI.gameFinishFailure)
    } else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
      // console.log(gameBoard[6] + ' wins!')
      $('.game-alert1').html('')
      $('.game-alert3').show()
      $('.game-alert3').html(`${currentPlayer} wins!   Click "New Game" to play again.`)
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(gameAlertUI.gameFinishSuccess)
        .catch(gameAlertUI.gameFinishFailure)
    } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
      // console.log(gameBoard[0] + ' wins!')
      $('.game-alert1').html('')
      $('.game-alert3').show()
      $('.game-alert3').html(`${currentPlayer} wins!   Click "New Game" to play again.`)
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(gameAlertUI.gameFinishSuccess)
        .catch(gameAlertUI.gameFinishFailure)
    } else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
      // console.log(gameBoard[1] + ' wins!')
      $('.game-alert1').html('')
      $('.game-alert3').show()
      $('.game-alert3').html(`${currentPlayer} wins!   Click "New Game" to play again.`)
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(gameAlertUI.gameFinishSuccess)
        .catch(gameAlertUI.gameFinishFailure)
    } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
      // console.log(gameBoard[2] + ' wins!')
      $('.game-alert1').html('')
      $('.game-alert3').show()
      $('.game-alert3').html(`${currentPlayer} wins!   Click "New Game" to play again.`)
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(gameAlertUI.gameFinishSuccess)
        .catch(gameAlertUI.gameFinishFailure)
    } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
      // console.log(gameBoard[0] + ' wins!')
      $('.game-alert1').html('')
      $('.game-alert3').show()
      $('.game-alert3').html(`${currentPlayer} wins!   Click "New Game" to play again.`)
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(gameAlertUI.gameFinishSuccess)
        .catch(gameAlertUI.gameFinishFailure)
    } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
      // console.log(gameBoard[2] + ' wins!')
      $('.game-alert1').html('')
      $('.game-alert3').show()
      $('.game-alert3').html(`${currentPlayer} wins!   Click "New Game" to play again.`)
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(gameAlertUI.gameFinishSuccess)
        .catch(gameAlertUI.gameFinishFailure)
    } else if (gameBoardElements.length === 9) {
      // console.log('Draw!  The board is full.')
      $('.game-alert1').html('')
      $('.game-alert3').show()
      $('.game-alert3').html('Draw!  The board is full.  Click "New Game" to play again.')
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(gameAlertUI.gameFinishSuccess)
        .catch(gameAlertUI.gameFinishFailure)
    } else {
      // if neither player has won, call the changePlayer function to continue the game
      changePlayer(currentPlayer)
    }
  } else {
    // if the test array is shorter than three elements, call the changePlayer function to continue the game
    changePlayer(currentPlayer)
  }
}

// Function to switch to the opposite player
const changePlayer = function (currentPlayer) {
  // test for currentPlayer and switch to opposite.  update HTML alert
  if (currentPlayer === 'x') {
    store.gameState.player = 'o'
    $('.game-alert1').html(`It is ${store.gameState.player}'s turn`)
    // console.log(currentPlayer + ' after player check')
  } else {
    store.gameState.player = 'x'
    $('.game-alert1').html(`It is ${store.gameState.player}'s turn`)
    // console.log(currentPlayer + ' after player check')
  }
  return currentPlayer
}

// Function to start game logic cascade
const cellClicked = function (event) {
  // set game index variable using the data attribute
  const gameIndex = event.target.getAttribute('data-cell-index')

  // get currentPlayer and board from the store
  const currentPlayer = store.gameState.player
  const gameBoardAPI = store.game.cells

  // store the gameIndex from the HTML element for further game logic
  store.gameState.gameIndex = gameIndex

  // check to make sure game cell is not occupied by calling checkGameCell function
  checkGameCell(currentPlayer, store.gameState.gameIndex, gameBoardAPI)
}

// Create empty board; reenable click listener for subsequent games
const resetGameBoard = function () {
  $('.game-board').off('click')
  $('.game-board').on('click', cellClicked)

  // create object in store for the currentPlayer
  const currentPlayer = 'x'
  store.gameState = {
    player: currentPlayer
  }

  $('.game-container').removeClass('hidden')
  $('.display-message2').html('')
  $('.game-alert1').html('')
  $('.game-alert2').html('')
  $('.game-alert3').html('')
  $('.game-alert4').html('')
  $('.game-alert1').html(`It is ${currentPlayer}'s turn`)

  // send create game call to API
  gameAPI.createGame()
    .then(gameAPIEvents.newGameCreated)
    .catch(gameAPIEvents.newGameCreatedFailure)

  return store.gameState
}

// get details about games played (started) for current player ID
const getGames = function () {
  // request from the API for the current games (response.games.length)
  gameAPI.getGames()
    .then(gameAlertUI.showGamesPlayed)
    .catch(gameAlertUI.showGamesPlayedFailure)
}

module.exports = {
  resetGameBoard,
  changePlayer,
  checkForWin,
  updateGameBoard,
  checkGameCell,
  cellClicked,
  getGames
}
