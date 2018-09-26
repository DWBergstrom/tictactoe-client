'use strict'

const showGamesPlayed = function (response) {
  const gamesPlayed = response.games.length
  $('.game-stats').removeClass('hidden')
  $('.games').html(`${gamesPlayed}`)
}

module.exports = {
  showGamesPlayed
}
