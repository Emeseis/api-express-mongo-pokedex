import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
  abilities: Array,
  id: Number,
  entry: String,
  name: String,
  label: String,
  sprite: String,
  types: Array,
  gen: Number
});

export default mongoose.model('Pokemon', pokemonSchema);
