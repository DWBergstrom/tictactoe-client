'use strict'

const showGamesPlayed = function (response) {
  const gamesPlayed = response.games.length
  $('.game-stats').removeClass('hidden')
  $('.game-id').show()
  $('.games').html(`${gamesPlayed}`)
  $('.games').css('color', 'black')
}

const showGamesPlayedFailure = function () {
  $('.games').html('There was an error retrieving your game stats.  Please check your network connection.')
  $('.games').css('color', 'red')
}

const gameFinishSuccess = function () {
  $('.game-alert4').show()
  $('.game-alert4').html('Your finished game was saved to the server :) ')
}

const gameFinishFailure = function () {
  $('.game-alert3').html('')
  $('.game-alert4').show()
  $('.game-alert4').html('There was a problem saving your finished game was saved to the server :(  Please check your network connection and start a new game. ')
}

module.exports = {
  showGamesPlayed,
  showGamesPlayedFailure,
  gameFinishSuccess,
  gameFinishFailure
}
