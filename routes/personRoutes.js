const router = require('express').Router();
const Person = require('../models/Person');

router.post('/person', async (req, res) => {
  const { name, salary, approved } = req.body;

  if (!name) { res.status(422).json({ msg: 'The name field is required' }); return; }
  if (!salary) { res.status(422).json({ msg: 'The salary field is required' }); return; }
  if (!approved) { res.status(422).json({ msg: 'This person is not approved' }); return; }

  const person = { name, salary, approved }

  try {
    await Person.create(person);
    res.status(201).json({ msg: 'Person successfully added' })
  } catch (err) {
    res.status(500).json({ error: err })
  }
});

router.get('/people', async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (err) {
    res.status(500).json({ error: err })
  }
});

router.get('/person/:id', async (req, res) => {
  const id = req.params.id;
  
  try {
    const person = await Person.findOne({ _id: id });
    if (!person) { res.status(422).json({ msg: 'Person not found' }); return; }
    res.status(200).json(person);
  } catch (err) {
    res.status(500).json({ error: err })
  }
});

router.get('/personName/:name', async (req, res) => {
  const name = req.params.name;
  
  try {
    const person = await Person.find({ name: name });
    if (!person) { res.status(422).json({ msg: 'Person not found' }); return; }
    res.status(200).json(person);
  } catch (err) {
    res.status(500).json({ error: err })
  }
});

router.patch('/person/:id', async (req, res) => {
  const id = req.params.id;
  const { name, salary, approved } = req.body;
  const person = { name, salary, approved }

  if (!person) { res.status(422).json({ msg: 'Person not found' }); return; }

  try {
    const updatedPerson = await Person.updateOne({ _id: id }, person);
    if (updatedPerson.matchedCount == 0) { res.status(422).json({ msg: 'Person not found' }); return; } 
    if (updatedPerson.modifiedCount == 0) { res.status(422).json({ msg: 'Nothing to update' }); return; } 
    res.status(200).json({ msg: 'Person successfully updated', person });
  } catch (err) {
    res.status(500).json({ error: err })
  }
});

router.delete('/person/:id', async (req, res) => {
  const id = req.params.id;
  const person = await Person.findOne({ _id: id });

  if (!person) { res.status(422).json({ msg: 'Person not found' }); return; }

  try {
    await Person.deleteOne({ _id: id }, person);
    res.status(200).json({ msg: 'Person successfully removed', person });
  } catch (err) {
    res.status(500).json({ error: err })
  }
});

module.exports = router;