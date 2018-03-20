const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: { required: true, type: String },
  },
  { timestamps: true }
)

const User = mongoose.model('user', userSchema)

module.exports = User
