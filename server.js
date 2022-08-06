const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const PORT = 8000;
require('dotenv').config();

let db,
  dbConnectionString = process.env.DB_STRING,
  dbName = 'sample_mflix',
  collection;

MongoClient.connect(dbConnectionString)
  .then(client => {
    console.log('Connected to database');
    db = client.db(dbName);
    collection = db.collection('movies');
  });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});