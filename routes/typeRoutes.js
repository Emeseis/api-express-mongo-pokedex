const router = require('express').Router();
const Type = require('../models/Type');

router.get('/types', async (req, res) => {
  try {
    let newTypes = {}
    const types = await Type.find();
    
    for await (const type of types) {
      newTypes[type.name] = {
        attack: type.attack,
        defense: type.defense
      }
    }
    res.status(200).json(newTypes);
  } catch (err) {
    res.status(500).json({ error: err })
  }
});

// router.post('/type', async (req, res) => {
//   const { name, attack, defense } = req.body;
//   const type = { name, attack, defense }

//   try {
//     await Type.create(type);
//     res.status(201).json({ msg: 'Type successfully added' })
//   } catch (err) {
//     res.status(500).json({ error: err })
//   }
// });

module.exports = router;