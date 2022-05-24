const { Client } = require('pg');
const env = require('./env');

// connect to DB
const pool = new Client(env.DB_URL);

// start db
pool
  .connect()
  .then(() => {
    console.log('Database connection successful.');
  })
  .catch((err) => console.log(err));

module.exports = pool;
