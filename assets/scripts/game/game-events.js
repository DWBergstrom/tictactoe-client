'use strict'

const store = require('../store.js')
const gameAPI = require('./game-api.js')
const gameAPIEvents = require('./game-api-events.js')
const gameAlertUI = require('./game-alert-ui.js')

// if game tile is not empty, do not allow click to change
const checkGameCell = function (currentPlayer, gameIndex, gameBoardAPI) {
  // check if cell is occupied
  console.log('API gameBoard is ' + gameBoardAPI)
  if (gameBoardAPI[gameIndex] === 'x' || gameBoardAPI[gameIndex] === 'o') {
    $('.game-alert3').html('Cell is already occupied!').fadeOut(5000)
  } else {
    // Update the cell anc call funciton to update game board array
    $(`#${gameIndex}`).html(`${currentPlayer}`)
    updateGameBoard(currentPlayer, gameIndex, gameBoardAPI)
  }
}

const updateGameBoard = function (currentPlayer, gameIndex, gameBoardAPI) {
  // update gameBoardAPI locally first
  gameBoardAPI[gameIndex] = currentPlayer
  console.log(gameBoardAPI, ' local update for gameBoardAPI')

  // send update to the API
  gameAPI.updateGame(store.game.id, gameIndex, currentPlayer)
    .then(console.log)
    .catch(console.log)

  // call checkForWin
  checkForWin(currentPlayer)
}

const checkForWin = function (currentPlayer) {
  const gameBoard = store.game.cells

  console.log('current API gameBoard in checkForWin is ', store.game.cells, 'current player in checkForWin is ' + currentPlayer)
  // create an array of currently occupied game board elements
  const gameBoardElements = []

  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i].length === 1) {
      gameBoardElements.push(gameBoard[i])
    }
  }
  // test to see if at least three indexes of of the gameBoard are occupied
  // if yes, test to see if any row, column, or cross on the coordinates grid
  // has the same string
  if (gameBoardElements.length >= 3) {
    // console.log(gameBoardElements + ' is at least 3')
    // test rows, columns, then crosses, then for draw
    if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
      console.log(gameBoard[0] + ' wins!')
      $('.game-alert1').html('')
      $('.game-alert2').html(`${currentPlayer} wins!   Click "Start New Game" to play again.`)
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(console.log)
        .catch(console.log)
    } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
      console.log(gameBoard[3] + ' wins!')
      $('.game-alert1').html('')
      $('.game-alert2').html(`${currentPlayer} wins!   Click "Start New Game" to play again.`)
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(console.log)
        .catch(console.log)
    } else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
      console.log(gameBoard[6] + ' wins!')
      $('.game-alert1').html('')
      $('.game-alert2').html(`${currentPlayer} wins!   Click "Start New Game" to play again.`)
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(console.log)
        .catch(console.log)
    } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
      console.log(gameBoard[0] + ' wins!')
      $('.game-alert1').html('')
      $('.game-alert2').html(`${currentPlayer} wins!   Click "Start New Game" to play again.`)
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(console.log)
        .catch(console.log)
    } else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
      console.log(gameBoard[1] + ' wins!')
      $('.game-alert1').html('')
      $('.game-alert2').html(`${currentPlayer} wins!   Click "Start New Game" to play again.`)
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(console.log)
        .catch(console.log)
    } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
      console.log(gameBoard[2] + ' wins!')
      $('.game-alert1').html('')
      $('.game-alert2').html(`${currentPlayer} wins!   Click "Start New Game" to play again.`)
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(console.log)
        .catch(console.log)
    } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
      console.log(gameBoard[0] + ' wins!')
      $('.game-alert1').html('')
      $('.game-alert2').html(`${currentPlayer} wins!   Click "Start New Game" to play again.`)
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(console.log)
        .catch(console.log)
    } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
      console.log(gameBoard[2] + ' wins!')
      $('.game-alert1').html('')
      $('.game-alert2').html(`${currentPlayer} wins!   Click "Start New Game" to play again.`)
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(console.log)
        .catch(console.log)
    } else if (gameBoardElements.length === 9) {
      console.log('Draw!  The board is full.')
      $('.game-alert1').html('')
      $('.game-alert2').html('Draw!  The board is full.  Click "Start New Game" to play again.')
      $('.game-board').off('click')
      gameAPI.finishGame(store.game.id)
        .then(console.log)
        .catch(console.log)
    } else {
      changePlayer(currentPlayer)
    }
  } else {
    // console.log(gameBoardElements + ' is shorter than 3. continue')
    changePlayer(currentPlayer)
  }
  // if yes, set game to over with update call to API
  // add "you've won" message, update game count, show reset game board option

  // if no, set currentPlayer to next player and call change game tile on click
}

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

const cellClicked = function (event) {
  console.log('API playerID in cellClicked is ', store.game.player_x.id)
  // set game index variable using the data attribute
  const gameIndex = event.target.getAttribute('data-cell-index')
  console.log('gameIndex is ', gameIndex)

  // get currentPlayer and board
  const currentPlayer = store.gameState.player
  console.log(currentPlayer + ' local cp in cell clicked before html')
  const gameBoardAPI = store.game.cells
  console.log(gameBoardAPI, ' gameboard in cellClicked')

  // store the gameIndex from the HTML element for further game logic
  store.gameState.gameIndex = gameIndex
  // console.log(store.gameState.gameIndex)
  // check to make sure game cell is not occupied
  checkGameCell(currentPlayer, store.gameState.gameIndex, gameBoardAPI)

  // send API call with current index and value
  // change current player
}

// Create empty board
const resetGameBoard = function () {
  $('.game-board').off('click')
  $('.game-board').on('click', cellClicked)

  // local game:  set all cells to blank
  // const gameBoard = ['', '', '', '', '', '', '', '', '']

  // create object in store for the currentPlayer
  const currentPlayer = 'x'
  store.gameState = {
    player: currentPlayer
  }

  $('.game-alert1').html('')
  $('.game-alert2').html('')
  $('.game-alert3').html('')
  $('.game-alert1').html(`It is ${currentPlayer}'s turn`)

  // send create call to API
  gameAPI.createGame()
    .then(gameAPIEvents.newGameCreated)
    .catch(console.log)

  return store.gameState
}

// get details about games played for current player ID
const getGames = function () {
  // request from the API for the current cellsArray
  gameAPI.getGames()
    .then(gameAlertUI.showGamesPlayed)
    .catch(console.log)
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
