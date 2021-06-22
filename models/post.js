const mongoose = require('mongoose')

// const { Schema } = mongoose;

  const PostSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    time: {
      type: String,
      required: true
    },
    content: {
        type: String,
        required: true
    },
    picture: {
      type: String,
      required: false
    },
    like: {
      type: Boolean,
      required: true
    },
  });

  const Post = new mongoose.model('Post', PostSchema);

  module.exports = Post;
