'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#display-message').show()
  $('#display-message').html('Sign-up successful! Please sign in above.')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpError = function () {
  $('#display-message').show()
  $('#display-message').html('Something went wrong! Please try signing up again.').fadeOut(5000)
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-message').show()
  $('#display-message').html('Sign-in successful!').fadeOut(5000)
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#display-message2').show()
  $('.display-message2').html('Click "New Game" to start playing!')
  store.user = response.user
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('.game-board').html('')
  $('.display-message2').removeClass('hidden')
  $('.game-title').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#reset-game-board').removeClass('hidden')
  $('.game-alert').removeClass('hidden')
  $('.game-details').removeClass('hidden')
  $('#games-played').removeClass('hidden')
}

const signInError = function () {
  $('#display-message').show()
  $('#display-message').html('Something went wrong! Please try signing in again.').fadeOut(5000)
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#password-message').show()
  $('#password-message').html('Password change successful!').fadeOut(5000)
  $('#password-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#password-message').show()
  $('#password-message').html('Something went wrong with your password change! Please try again.').fadeOut(5000)
  $('#password-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-message').show()
  $('#display-message').html('Sign out successful!').fadeOut(4000)
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  $('#display-message').show()
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('.display-message2').addClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('.game-container').addClass('hidden')
  $('#reset-game-board').addClass('hidden')
  $('.game-alert').addClass('hidden')
  $('.game-details').addClass('hidden')
  $('.game-stats').addClass('hidden')
  $('#games-played').addClass('hidden')
  $('.game-title').addClass('hidden')
  $('.game-alert1').html('')
  $('.game-alert2').html('')
  $('.game-alert3').html('')
  $('.game-alert4').html('')
  $('.game-id').html('')
}

const signOutFailure = function () {
  $('#display-message').show()
  $('#display-message').html('Something went wrong signing out! Check your network connection.')
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
