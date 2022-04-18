var express = require('express')
const consola = require('consola')
const chalk = require('chalk')
var portscanner = require('portscanner')
const ip = require('ip')

var path = require('path')

var app = express()

const port = process.env.PORT || 0

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'))
})

app.use('/', express.static(path.join(__dirname, 'build')))

const preferredPorts = [
  3000, 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 4000, 4001,
  4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009, 4010, 8000, 8001, 8002, 8003,
  8004, 8005, 8006, 8007, 8008, 8009, 8010, 9000, 9001, 9002, 9003, 9004, 9005,
  9006, 9007, 9008, 9009, 9010,
]

portscanner.findAPortNotInUse(preferredPorts).then((available) => {
  var listener = app.listen(port || available || 0, function (err) {
    if (err) consola.error(chalk.white.bold('Error: '), `${err}`)

    consola.info(
      'Listening on port ',
      chalk.white.bold(listener.address().port),
    )

    consola.success(
      chalk.white.bold('Local:            '),
      `http://localhost:${listener.address().port}`,
    )

    consola.success(
      chalk.white.bold('On Your Network:  '),
      `http://${ip.address()}:${listener.address().port}`,
    )
  })
})
