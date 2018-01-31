'use strict'

const config = require('../config')
const store = require('../store')

const getAllSightings = function () {
  return $.ajax({
    url: config.apiOrigin + '/sightings',
    method: 'GET'
  })
}

const createSighting = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sightings',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateSighting = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sightings/' + $('#txtupdateid').val(),
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteSighting = function () {
  return $.ajax({
    url: config.apiOrigin + '/sightings/' + $('#txtdeleteid').val(),
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getAllSightings,
  createSighting,
  updateSighting,
  deleteSighting
}
