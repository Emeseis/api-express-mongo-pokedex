import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import typeRoutes from './routes/typeRoutes.js';
import pokemonRoutes from './routes/pokemonRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', typeRoutes);
app.use('/', pokemonRoutes);

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const port = 4000;

mongoose
  .set('strictQuery', false);

mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster-api.qt8ysip.mongodb.net/database?retryWrites=true&w=majority`)
  .then(() => { console.log(`Database successfully connected, running on port ${port}.`); app.listen(port); })
  .catch((err) => console.error(err));

export default app;