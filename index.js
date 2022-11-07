require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const personRoutes = require('./routes/personRoutes');
const typeRoutes = require('./routes/typeRoutes');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', personRoutes);
app.use('/', typeRoutes);

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster-api.qt8ysip.mongodb.net/database?retryWrites=true&w=majority`)
  .then(() => { console.log('Database successfully connected'); app.listen(3000); })
  .catch((err) => console.log(err))
