'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  if ($('#txtoldpassword').val() === '') {
    $('#txtoldpassword').css({'border': 'solid', 'border-color': 'red'})
    return false
  } else if ($('#txtnewpassword').val() === '') {
    $('#txtnewpassword').css({'border': 'solid', 'border-color': 'red'})
    return false
  } else {
    $('#changePasswordModal').modal('toggle')
    const data = {
      passwords: {
        old: $('#txtoldpassword').val(),
        new: $('#txtnewpassword').val()
      }
    }
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
  }
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onClearInputs = function (event) {
  $('#txtoldpassword').val('')
  $('#txtnewpassword').val('')
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#btn-sign-out').on('click', onSignOut)
  $('#btn-user-changepassword').on('click', onChangePassword)
  $('#changePasswordModal').on('hidden.bs.modal', onClearInputs)
}

module.exports = {
  addHandlers
}
