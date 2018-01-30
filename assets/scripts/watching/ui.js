// const store = require('../store')

const getAllSightingsSuccess = function (data) {
  console.log(data)
  console.log(data.sightings.length)
  $('#latestupdate').text(Date(data.sightings[0].updated_at))
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

const createSightingSuccess = function (data) {
  console.log('data is ' + data)
  console.log('sighting created')
}
module.exports = {
  getAllSightingsSuccess,
  createSightingSuccess
}
