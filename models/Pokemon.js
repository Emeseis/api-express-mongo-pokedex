import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
  id: Number,
  entry: String,
  name: String,
  sprite: String,
  types: Array,
  gen: Number
});

export default mongoose.model('Pokemon', pokemonSchema);
