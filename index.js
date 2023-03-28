require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const typeRoutes = require('./routes/typeRoutes');
const pokemonRoutes = require('./routes/pokemonRoutes');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', typeRoutes);
app.use('/', pokemonRoutes);

const DB_USER = process.env.DB_USER; //***REMOVED***
const DB_PASS = process.env.DB_PASS; //***REMOVED***

mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster-api.qt8ysip.mongodb.net/database?retryWrites=true&w=majority`)
  .then(() => { console.log('Database successfully connected'); app.listen(4000); })
  .catch((err) => console.log(err))
