const express = require('express')
const setupMiddleware = require('./middleware')
const { connect } = require('./db')
const User = require('./api/resources/user/userModel')

const app = express()

setupMiddleware(app)
connect()

module.exports = app
