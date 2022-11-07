const mongoose = require('mongoose');

const Type = mongoose.model('Type', {
  name: String,
  attack: {
    double: Array,
    half: Array,
    zero: Array
  },
  defense: {
    double: Array,
    half: Array,
    zero: Array
  }
});

module.exports = Type;