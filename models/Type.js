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

export default mongoose.model('Type', typeSchema);
