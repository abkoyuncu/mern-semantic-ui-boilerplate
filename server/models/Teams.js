const mongoose = require('mongoose');

const TeamScheme = new mongoose.Schema({
  name: {
    type: String,
  },
  year: {
    type: Number,
  }
});

module.exports = mongoose.model('Team', TeamScheme);
