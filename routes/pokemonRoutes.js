import express from 'express';
import Pokemon from '../models/Pokemon.js';

const router = express.Router();

router.post('/pokemons', async (req, res) => { 
  let query = {}; 

  const { name, order, gen, types } = req.body;

  if (name) query.name = { $regex: new RegExp(name.trim(), "i") };
  if (!types.includes('All')) {
    if (types.length == 1) query.types = { $elemMatch: { "type.name": types[0] } };
    else query.$and = [{ types: { $elemMatch: { "type.name": types[0] } } }, { types: { $elemMatch: { "type.name": types[1] } } }];
  }
  if (gen != 'All') query.gen = gen;

  try {
    const pokemons = await Pokemon.find(query).sort({ id: order });
    return res.status(200).json({ length: pokemons.length, pokemons });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

router.get('/pokedex/:gen', async (req, res) => {
  const gen = req.params.gen;
  try {
    const pokemon = await Pokemon.find({ gen });
    return res.status(200).json(pokemon);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

router.get('/pokemon', async (req, res) => {
  const { name, id } = req.query;
  let pokemon;
  try {
    if (name) pokemon = await Pokemon.findOne({ name: name.charAt(0).toUpperCase() + name.slice(1) });
    else if (id) pokemon = await Pokemon.findOne({ id });

    if (!pokemon) return res.status(404).json({ msg: 'Pokemon not found' });     
    return res.status(200).json(pokemon);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

// router.post('/pokemon', async (req, res) => {
//   const { id, entry, name, sprite, types, gen } = req.body;
//   const pokemon = { id, entry, name, sprite, types, gen };

//   try {
//     await Pokemon.create(pokemon);
//     return res.status(201).json({ msg: 'Pokemon successfully added' });
//   } catch (err) {
//     return res.status(500).json({ error: err });
//   }
// });

// router.put('/pokemon', async (req, res) => {
//   const { id, entry } = req.body;
//   try {
//     await Pokemon.updateOne({ id }, { entry });
//     return res.status(201).json({ msg: 'Pokemon successfully updated' });
//   } catch (err) {
//     return res.status(500).json({ error: err });
//   }
// });

// router.delete('/pokemon/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     await Pokemon.deleteOne({ id });
//     return res.status(201).json({ msg: 'Pokemon successfully deleted' });
//   } catch (err) {
//     return res.status(500).json({ error: err });
//   }
// });

export default router;
