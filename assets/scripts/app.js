'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#0').on('click', () => alert('cell 0 clicked'))
  $('#1').on('click', () => alert('cell 1 clicked'))
  $('#2').on('click', () => alert('cell 2 clicked'))
  $('#3').on('click', () => alert('cell 3 clicked'))
  $('#4').on('click', () => alert('cell 4 clicked'))
  $('#5').on('click', () => alert('cell 5 clicked'))
  $('#6').on('click', () => alert('cell 6 clicked'))
  $('#7').on('click', () => alert('cell 7 clicked'))
  $('#8').on('click', () => alert('cell 8 clicked'))
  // $('#sign-up-form').on('submit', authEvents.onSignUp)
  // $('#sign-in-form').on('submit', authEvents.onSignIn)
  // $('#change-password-form').on('submit', authEvents.onChangePassword)
  // $('#sign-out-button').on('click', authEvents.onSignOut)
})
