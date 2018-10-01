'use strict'

const showGamesPlayed = function (response) {
  const gamesPlayed = response.games.length
  $('.game-stats').removeClass('hidden')
  $('#display-message').show()
  $('.games').html(`${gamesPlayed}`)
  $('.games').css('color', 'black')
}

const showGamesPlayedFailure = function (response) {
  $('#display-message').show()
  $('.games').html('There was an error retrieving your game stats.  Please check your network connection.')
  $('.games').css('color', 'red')
}

module.exports = {
  showGamesPlayed,
  showGamesPlayedFailure
}
