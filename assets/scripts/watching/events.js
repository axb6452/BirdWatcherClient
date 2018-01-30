const api = require('./api')
const ui = require('./ui')

const onSave = function (event) {
  event.preventDefault()
  const data = {
    // ID: $('#id').val(),
    bird: $('#bird').val(),
    characteristics: $('#characteristics').val(),
    color: $('#color').val()
  }
  api.createSighting(data)
    .then(ui.createSightingSuccess)
    .catch(ui.createSightingFailure)
}

const onAdd = function (event) {
  event.preventDefault()
  const data = {
    bird: $('#txtbird').text(),
    characteristics: $('#txtcharacteristics').text(),
    color: $('#txtcolor').text()
  }
  api.createSighting(data)
    .then(ui.createSightingSuccess)
    .catch(ui.createSightingFailure)
}

const onUpdate = function (event) {
  event.preventDefault()
  $('#id').val('')
  $('#bird').val('')
  $('#characteristics').val('')
  $('#color').val('')
  $('#dialog').css('display', 'block')
}

const onDelete = function (event) {
}

const onGridLoad = function (event) {
  api.getAllSightings()
    .then(ui.getAllSightingsSuccess)
    .catch(ui.getAllSightingsFailure)
}

const addHandlers = function () {
  $('#btnGetSingle').on('click', onGridLoad)
  // $('.sighting-grid').on('load', onGridLoad)
  $('#btnAdd').on('click', onAdd)
  $('#btnUpdate').on('click', onUpdate)
  $('#btnDelete').on('click', onDelete)
  $('#btnSave').on('click', onSave)
}

module.exports = {
  addHandlers
}
