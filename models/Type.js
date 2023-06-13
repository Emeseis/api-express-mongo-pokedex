import mongoose from 'mongoose';

const typeSchema = new mongoose.Schema({
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

const Type = mongoose.model('Type', typeSchema);

export default Type;