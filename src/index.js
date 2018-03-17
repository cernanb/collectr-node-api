const { createServer } = require('http')

const app = require('./server')

const server = createServer(app)

let currentApp = app

server.listen(3000, () => {
  console.log('Server listening on port 3000')
})
