const router = require('express').Router();
const Pokemon = require('../models/Pokemon');

router.post('/pokemons', async (req, res) => { 
  let query = {}; 

  const { name, order, gen, type, from, to } = req.body;

  if (gen != 'All') query.gen = gen;
  if (type != 'All') query.types = { $elemMatch: { "type.name": type  } };
  if (name) query.name = { $regex: new RegExp(name.trim(), "i") };

  // filtros de from e to não estão mais sendo utilizados
  // if (from && to)  query.id = { $gte: from, $lte: to };  
  // if (from && !to) query.id = { $gte: from };
  // if (!from && to) query.id = { $lte: to };

  try {
    const pokemons = await Pokemon.find(query).sort({ id: order });
    res.status(200).json({ length: pokemons.length, pokemons });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get('/pokedex/:gen', async (req, res) => {
  const gen = req.params.gen;

  try {
    const pokemon = await Pokemon.find({ gen });
    res.status(200).json(pokemon);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get('/pokemon/:id', async (req, res) => {
  const id = req.params.id;
  
  try {
    const pokemon = await Pokemon.findOne({ id });
    if (!pokemon) { res.status(422).json({ msg: 'Pokemon not found' }); return; }
    res.status(200).json(pokemon);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// router.post('/pokemon', async (req, res) => {
//   const { id, entry, name, sprite, types, gen } = req.body;
//   const pokemon = { id, entry, name, sprite, types, gen };

//   try {
//     await Pokemon.create(pokemon);
//     res.status(201).json({ msg: 'Pokemon successfully added' });
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// });

// router.put('/pokemon', async (req, res) => {
//   const { id, entry } = req.body;
//   try {
//     await Pokemon.updateOne({ id }, { entry });
//     res.status(201).json({ msg: 'Pokemon successfully updated' });
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// });

// router.delete('/pokemon/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     await Pokemon.deleteOne({ id });
//     res.status(201).json({ msg: 'Pokemon successfully deleted' });
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// });

module.exports = router;
