const bodyParser = require('body-parser')

const setupGlobalMiddleware = app => {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
}

module.exports = setupGlobalMiddleware
