const router = require('express').Router();
const Pokemon = require('../models/Pokemon');

router.post('/pokemon', async (req, res) => {
  const { id, entry, name, sprite, types, gen } = req.body;
  const pokemon = { id, entry, name, sprite, types, gen }

  try {
    await Pokemon.create(pokemon);
    res.status(201).json({ msg: 'Pokemon successfully added' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get('/pokedex', async (req, res) => {
  try {
    const pokemon = await Pokemon.find();
    res.status(200).json(pokemon);
  } catch (err) {
    res.status(500).json({ error: err })
  }
});

router.get('/pokedex/:gen', async (req, res) => {
  const gen = req.params.gen;
  try {
    const pokemon = await Pokemon.find({ gen });
    res.status(200).json(pokemon);
  } catch (err) {
    res.status(500).json({ error: err })
  }
});

router.get('/pokemon/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const pokemon = await Pokemon.findOne({ id });
    if (!pokemon) { res.status(422).json({ msg: 'Pokemon not found' }); return; }
    res.status(200).json(pokemon);
  } catch (err) {
    res.status(500).json({ error: err })
  }
});

module.exports = router;