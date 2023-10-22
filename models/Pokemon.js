import mongoose from 'mongoose';

export const pokemonSchema = new mongoose.Schema({
  abilities: [{
    ability: {
      name: String,
      url: String
    },
    is_hidden: Boolean,
    slot: Number
  }],
  entry: String,
  gen: Number,
  id: Number,
  label: String,
  name: String,
  sprite: String,
  types: Array
});

export default mongoose.model('Pokemon', pokemonSchema);
