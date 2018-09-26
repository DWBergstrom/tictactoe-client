'use strict'

const config = require('../config.js')
const store = require('../store.js')

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

const getGame = function (GAMEID) {
  return $.ajax({
    url: config.apiUrl + `/games/${GAMEID}`,
    headers: {
      'Authorization': `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

module.exports = {
  createGame,
  updateGame,
  getGame
}
