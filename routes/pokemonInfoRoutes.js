import express from 'express';
import PokemonInfo from '../models/PokemonInfo.js';

const router = express.Router();

router.get('/getPokemonInfo', async (req, res) => {
  const { id, name } = req.query;
  let pokemon;
  try {
    if (name) pokemon = await PokemonInfo.findOne({ 'pokemon.name': name });
    else if (id) pokemon = await PokemonInfo.findOne({ 'pokemon.id': id });
    if (!pokemon) return res.status(404).json({ msg: 'Pokemon not found' });
    return res.status(200).json(pokemon);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

// router.post('/pokemonInfo', async (req, res) => {
//   const pokemonInfo = req.body;
//   try {
//     await PokemonInfo.create(pokemonInfo);
//     return res.status(201).json({ msg: 'PokemonInfo successfully added' });
//   } catch (err) {
//     return res.status(500).json({ error: err });
//   }
// });

export default router;