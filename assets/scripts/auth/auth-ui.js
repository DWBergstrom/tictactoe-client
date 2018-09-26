'use strict'

const store = require('../store.js')
const gameEvents = require('../game/game-events.js')

const signUpSuccess = function () {
  $('#display-message').html('Sign-up successful!')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpError = function () {
  $('#display-message').html('Something went wrong!')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-message').show()
  $('#display-message').html('Sign-in successful!')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('.game-board').html('')
  gameEvents.resetGameBoard()
  $('#sign-out-button').removeClass('hidden')
  $('.game-container').removeClass('hidden')
  $('#reset-game-board').removeClass('hidden')
  $('.game-alert').removeClass('hidden')
}

const signInError = function () {
  $('#display-message').html('Something went wrong!')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#display-message').html('Password change successful!')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#display-message').html('Something went wrong with your password change!')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-message').html('Sign out successful!').fadeOut(4000)
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('.game-container').addClass('hidden')
  $('#reset-game-board').addClass('hidden')
  $('.game-alert').addClass('hidden')
}

const signOutFailure = function () {
  $('#display-message').html('Something went wrong signing out!')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signUpError,
  signInError,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}