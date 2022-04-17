var express = require('express')
const consola = require('consola')

var path = require('path')

var app = express()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'))
})

app.use('/', express.static(path.join(__dirname, 'build')))

app.listen(9000, function () {
  consola.info('Listening on port 9000')
  consola.success('http://localhost:9000')
})
