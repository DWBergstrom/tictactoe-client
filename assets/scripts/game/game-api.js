'use strict'

const config = require('../config.js')
const store = require('../store.js')

// initialize a new game via the API
// on success, runs gameAPIEvents.newGameCreated
const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'POST'
  })
}

const updateGame = function (GAMEID, INDEX, VALUE) {
  return $.ajax({
    url: config.apiUrl + `/games/${GAMEID}`,
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: {
      'game': {
        'id': GAMEID,
        'cell': {
          'index': INDEX,
          'value': VALUE
        },
        'over': false
      }
    }
  })
}

const finishGame = function (GAMEID) {
  return $.ajax({
    url: config.apiUrl + `/games/${GAMEID}`,
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: {
      'game': {
        'id': GAMEID,
        'over': true
      }
    }
  })
}

const getGame = function (GAMEID) {
  return $.ajax({
    url: config.apiUrl + `/games/${GAMEID}`,
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games/',
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

module.exports = {
  createGame,
  updateGame,
  finishGame,
  getGame,
  getGames
}
