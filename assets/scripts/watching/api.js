'use strict'

const config = require('../config')
const store = require('../store')

const createSighting = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sightings',
    method: 'POST',
    data
  })
}

const updateSighting = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sightings/' + store.sighting.id,
    method: 'PATCH',
    data
  })
}

const getAllSightings = function () {
  return $.ajax({
    url: config.apiOrigin + '/sightings',
    method: 'GET'
  })
}

const getSingleSighting = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/sightings/' + id,
    method: 'GET'
  })
}

const deleteSighting = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/sightings/' + id,
    method: 'DELETE'
  })
}

module.exports = {
  createSighting,
  updateSighting,
  getAllSightings,
  getSingleSighting,
  deleteSighting
}
