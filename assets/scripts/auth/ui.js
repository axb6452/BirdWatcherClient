'use strict'

const store = require('../store')
const watchEvents = require('../watching/events')

function clock () { // We create a new Date object and assign it to a variable called "time".
  const time = new Date()
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  $('#clock').text(harold(hours) + ':' + harold(minutes) + ':' + harold(seconds))
  function harold (standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn
  }
}

const signUpSuccess = function (data) {
  $('#sign-up').find('input:text').val('')
  $('#sign-up').find('input:password').val('')
  $('#lblSignUpMessage').text('User ' + data.user.email + ' successfully created.').css({'color': 'green', 'background-color': 'white'})
  $('#lblSignUpMessage').show()
  $('#lblSignUpMessage').fadeOut(3000, function () {
    $(this).text('')
  })
}

const signUpFailure = function () {
  $('#lblSignUpMessage').show()
  $('#lblSignUpMessage').text('Error during sign up').css({'color': 'red', 'background-color': 'white'}).show()
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.userlogin').hide()
  console.log(watchEvents)
  $('.sighting-grid').show()
  setInterval(clock, 1000)
  // $('#game-page').show()
  // $('#change-password').hide()
  // $('#game-table').hide()
  // $('#lbl-board-message').text('Select an option below to begin').css({'color': '#0F2043', 'background-color': 'white', 'width': '300px'})
}

const signInFailure = function () {
  $('#lblSignInMessage').text('Error during sign in').css({'color': 'red', 'background-color': 'white'}).show()
}

const changePasswordSuccess = function () {
  $('#change-password').find('input:password').val('')
  $('#lblChangePasswordMessage')
    .text('Successfully changed password')
    .css({'color': 'green', 'background-color': 'white'})
    .show()
  $('#change-password').hide()
  $('#change-password-link').text('Change Password')
}

const changePasswordFailure = function () {
  $('#lblChangePasswordMessage').text('Error during change password').css({'color': 'red', 'background-color': 'white'}).show()
}

const signOutSuccess = function () {
  $('.sighting-grid').hide()
  $('.userlogin').show()
  $('#sign-in').find('input:text').val('')
  $('#sign-in').find('input:password').val('')
  $('#sign-up').find('input:text').val('')
  $('#sign-up').find('input:password').val('')
  // $('#change-password').find('input:password').val('')
  // $('#change-password-link').text('Change Password').css('color', 'black')
  // $('#lblSignInMessage').text('')
  // $('#lblSignUpMessage').text('')
  $('#lblChangePasswordMessage').text('')
  $('#lblSignInMessage').text('User ' + store.user.email + ' successfully signedOut.').css({'color': 'green', 'background-color': 'white'})
  $('#lblSignInMessage').show()
  $('#lblSignInMessage').fadeOut(3000, function () {
    $(this).text('')
  })
}

const signOutFailure = function () {
  $('#lblSignOutMessage').show()
  $('#lblSignOutMessage').text('Error during sign out').css({'color': 'red', 'background-color': 'white'})
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
