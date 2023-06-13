import express from 'express';
import Type from '../models/Type.js';

const router = express.Router();

router.get('/types', async (req, res) => {
  try {
    const types = await Type.find();

    let newTypes = {};
    
    for await (let type of types) {
      newTypes[type.name] = {
        attack: type.attack,
        defense: type.defense
      };
    }

    res.status(200).json(newTypes);
  } catch (err) {
    res.status(500).json({ error: err });
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

export default router;