const store = require('../store')
const api = require('./api')

const getAllSightingsSuccess = function (data) {
  console.log(data)
  console.log(data.sightings.length)
  $('#grid td').remove()
  let tr
  for (let i = 0; i < data.sightings.length; i++) {
    tr = $('<tr/>')
    tr.append('<td>' + (i + 1) + '</td>')
    tr.append('<td>' + data.sightings[i].id + '</td>')
    tr.append('<td>' + data.sightings[i].bird + '</td>')
    tr.append('<td>' + data.sightings[i].characteristics + '</td>')
    tr.append('<td>' + data.sightings[i].body_color + '</td>')
    tr.append('<td>' + data.sightings[i].user_id + '</td>')
    $('#grid').append(tr)
  }
}

const getAllSightingsFailure = function () {
  clearFormFields()
  $('#lblgirdmessage').text('Error Getting All Sightings').css({'background-color': 'white', 'color': 'red', 'opacity': '100'})
  $('#lblgridmessage').show()
}

const createSightingSuccess = function (data) {
  clearFormFields()
  $('#latestsighting').text(Date(data.sighting.created_at))
  $('#lblgridmessage')
    .text('New sighting has been added. ' + 'Bird: ' + data.sighting.bird + '. Features: ' + data.sighting.characteristics + '. Color: ' + data.sighting.body_color + ' by user ' + store.user.email)
    .css({'color': 'green', 'background-color': 'white', 'opacity': '100'})
  $('#lblgridmessage').show()
  $('#lblgridmessage').fadeTo(5000, 0)
  api.getAllSightings()
    .then(getAllSightingsSuccess).catch(getAllSightingsFailure)
}

const createSightingFailure = function () {
  clearFormFields()
  $('#lblgirdmessage').text('Error Creating Sighting').css({'background-color': 'white', 'color': 'red', 'opacity': '100'})
  $('#lblgridmessage').show()
}

const updateSightingSuccess = function (data) {
  clearFormFields()
  $('#lblgridmessage')
    .text('Sighting with id ' + data.sighting.id + ' has been updated by user ' + store.user.email)
    .css({'color': 'green', 'background-color': 'white', 'opacity': '100'})
  $('#lblgridmessage').show()
  $('#lblgridmessage').fadeTo(5000, 0)
  api.getAllSightings()
    .then(getAllSightingsSuccess).catch(getAllSightingsFailure)
}

const updateSightingFailure = function () {
  clearFormFields()
  $('#lblgirdmessage').text('Error Updating Sighting').css({'background-color': 'white', 'color': 'red', 'opacity': '100'})
  $('#lblgridmessage').show()
}

const deleteSightingSuccess = function () {
  const id = $('#txtdeleteid').val()
  clearFormFields()
  $('#lblgridmessage')
    .text('Sighting with id ' + id + ' has been deleted by user ' + store.user.email)
    .css({'color': 'green', 'background-color': 'white', 'opacity': '100'})
  $('#lblgridmessage').show()
  $('#lblgridmessage').fadeTp(5000, 0)
  api.getAllSightings()
    .then(getAllSightingsSuccess).catch(getAllSightingsFailure)
}

const deleteSightingFailure = function () {
  clearFormFields()
  $('#lblgridmessage').text('Error Deleting Sighting').css({'background-color': 'white', 'color': 'red', 'opacity': '100'})
  $('#lblgridmessage').show()
}

const clearFormFields = function () {
  $('#txtbird').val('')
  $('#txtcharacteristics').val('')
  $('#txtcolor').val('')
  $('#txtupdateid').val('')
  $('#txtupdatebird').val('')
  $('#txtupdatecharacteristics').val('')
  $('#txtupdatecolor').val('')
  $('#txtdeleteid').val('')
  $('#txtbird').css('border', '0')
  $('#txtcharacteristics').css('border', '0')
  $('#txtcolor').css('border', '0')
  $('#txtupdateid').css('border', '0')
  $('#txtupdatebird').css('border', '0')
  $('#txtupdatecharacteristics').css('border', '0')
  $('#txtupdatecolor').css('border', '0')
  $('#txtdeleteid').css('border', '0')
  $('#lblgridmessage').text('')
}

module.exports = {
  getAllSightingsSuccess,
  getAllSightingsFailure,
  createSightingSuccess,
  createSightingFailure,
  updateSightingSuccess,
  updateSightingFailure,
  deleteSightingSuccess,
  deleteSightingFailure,
  clearFormFields
}
