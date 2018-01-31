const api = require('./api')
const ui = require('./ui')

const onAdd = function (event) {
  event.preventDefault()
  if ($('#txtbird').val() === '') {
    $('#txtbird').css({'border': 'solid', 'border-color': 'red'})
    return false
  } else if ($('#txtcharacteristics').val() === '') {
    $('#txtcharacteristics').css({'border': 'solid', 'border-color': 'red'})
    return false
  } else if ($('#txtcolor').val() === '') {
    $('#txtcolor').css({'border': 'solid', 'border-color': 'red'})
    return false
  } else {
    const data = {
      sighting: {
        bird: $('#txtbird').val(),
        characteristics: $('#txtcharacteristics').val(),
        body_color: $('#txtcolor').val()
      }
    }
    api.createSighting(data)
      .then(ui.createSightingSuccess)
      .catch(ui.createSightingFailure)
  }
}

const onUpdate = function (event) {
  event.preventDefault()
  if ($('#txtupdateid').val() === '') {
    $('#txtupdateid').css({'border': 'solid', 'border-color': 'red'})
    return false
  } else if ($('#txtupdatebird').val() === '') {
    $('#txtupdatebird').css({'border': 'solid', 'border-color': 'red'})
    return false
  } else if ($('#txtupdatecharacteristics').val() === '') {
    $('#txtupdatecharacteristics').css({'border': 'solid', 'border-color': 'red'})
    return false
  } else if ($('#txtupdatecolor').val() === '') {
    $('#txtupdatecolor').css({'border': 'solid', 'border-color': 'red'})
    return false
  } else {
    $('#updateModal').modal('toggle')
    const data = {
      sighting: {
        bird: $('#txtupdatebird').val(),
        characteristics: $('#txtupdatecharacteristics').val(),
        body_color: $('#txtupdatecolor').val()
      }
    }
    api.updateSighting(data)
      .then(ui.updateSightingSuccess)
      .catch(ui.updateSightingFailure)
  }
}

const onDelete = function (event) {
  event.preventDefault()
  if ($('#txtdeleteid').val() === '') {
    $('#txtdeleteid').css({'border': 'solid', 'border-color': 'red'})
    return false
  } else {
    $('#updateModal').modal('toggle')
    api.deleteSighting()
      .then(ui.deleteSightingSuccess)
      .catch(ui.deleteSightingFailure)
  }
}

const onGridLoad = function (event) {
  api.getAllSightings()
    .then(ui.getAllSightingsSuccess)
    .catch(ui.getAllSightingsFailure)
}

const onClearUpdateDeleteInputs = function (event) {
  $('#txtupdateid').val('')
  $('#txtupdatebird').val('')
  $('#txtupdatecharacteristics').val('')
  $('#txtupdatecolor').val('')
  $('#txtdeleteid').val('')
}

const addHandlers = function () {
  $('#btnAdd').on('click', onAdd)
  $('#btn-sighting-update').on('click', onUpdate)
  $('#btn-sighting-delete').on('click', onDelete)
  $('#updateModal').on('hidden.bs.modal', onClearUpdateDeleteInputs)
  $('#deleteModal').on('hidden.bs.modal', onClearUpdateDeleteInputs)
}

module.exports = {
  addHandlers,
  onGridLoad
}
