import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
  id: Number,
  entry: String,
  name: String,
  sprite: String,
  types: Array,
  gen: Number
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

export default Pokemon;