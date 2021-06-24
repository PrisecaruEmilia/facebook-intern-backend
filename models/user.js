const mongoose = require('mongoose')

// const { Schema } = mongoose;

  const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
  });

  const User = new mongoose.model('User', UserSchema);

  module.exports = User;