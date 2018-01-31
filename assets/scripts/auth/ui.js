'use strict'

const store = require('../store')
const watchEvents = require('../watching/events')

function clock () {
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
  clearAuthFields()
  $('#sign-up').find('input:text').val('')
  $('#sign-up').find('input:password').val('')
  $('#lblSignUpMessage').text('User ' + data.user.email + ' successfully created.')
    .css({'color': 'green', 'background-color': 'white', 'opacity': '100'})
  $('#lblSignUpMessage').show()
  $('#lblSignUpMessage').fadeTo(3000, 0)
}

const signUpFailure = function () {
  clearAuthFields()
  $('#lblSignUpMessage').show()
  $('#lblSignUpMessage').text('Error during sign up')
    .css({'color': 'red', 'background-color': 'white', 'opacity': '100'}).show()
}

const signInSuccess = function (data) {
  clearAuthFields()
  store.user = data.user
  $('.userlogin').hide()
  console.log(watchEvents)
  $('.sighting-grid').show()
  $('#userlabel').text(store.user.email + ' id: ' + store.user.id)
  setInterval(clock, 1000)
  $('#lblSignInMessage').text('User ' + store.user.email + ' successfully signed in.')
    .css({'color': 'green', 'background-color': 'white', 'opacity': '100'})
  $('#lblSignInMessage').show()
  $('#lblSignInMessage').fadeTo(3000, 0)
}

const signInFailure = function () {
  clearAuthFields()
  $('#lblSignOutMessage').text('Error during sign in')
    .css({'color': 'red', 'background-color': 'white', 'opacity': '100'}).show()
}

const changePasswordSuccess = function () {
  clearAuthFields()
  $('#lblSignInMessage')
    .text('Successfully changed password')
    .css({'color': 'green', 'background-color': 'white', 'opacity': '100'})
    .show()
  $('#lblSignInMessage').fadeTo(3000, 0)
}

const changePasswordFailure = function () {
  clearAuthFields()
  $('#lblSignInMessage').text('Error during change password')
    .css({'color': 'red', 'background-color': 'white', 'opacity': '100'}).show()
}

const signOutSuccess = function () {
  clearAuthFields()
  $('.sighting-grid').hide()
  $('.userlogin').show()
  $('#lblSignOutMessage').text('User ' + store.user.email + ' successfully signed out.')
    .css({'color': 'green', 'background-color': 'white', 'opacity': '100'})
  $('#lblSignOutMessage').show()
  $('#lblSignOutMessage').fadeTo(3000, 0)
}

const signOutFailure = function () {
  clearAuthFields()
  $('#lblSignOutMessage').show()
  $('#lblSignOutMessage').text('Error during sign out')
    .css({'color': 'red', 'background-color': 'white', 'opacity': '100'}).show()
}

const clearAuthFields = function () {
  $('#sign-in').find('input:text').val('')
  $('#sign-in').find('input:password').val('')
  $('#sign-up').find('input:text').val('')
  $('#sign-up').find('input:password').val('')
  $('#txtoldpassword').val('')
  $('#txtnewpassword').val('')
  $('.input-user-changepassword').val('')
  $('#lblSignUpMessage').text('')
  $('#lblSignInMessage').text('')
  $('#lblSignOutMessage').text('')
  $('#txtoldpassword').css('border', '0')
  $('#txtnewpassword').css('border', '0')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  clearAuthFields
}
