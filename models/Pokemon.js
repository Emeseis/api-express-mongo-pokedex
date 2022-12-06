const mongoose = require('mongoose');

const Pokemon = mongoose.model('Pokemon', {
  id: Number,
  entry: String,
  name: String,
  sprite: String,
  types: Array,
  gen: Number
});

module.exports = Pokemon;