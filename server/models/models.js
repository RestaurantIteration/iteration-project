const { Pool } = require('pg');

const PG_URI =
  'postgres://airqktxs:aQZgLI9E8FX15CbGGx7DMaUd-Hs9qwTI@mahmud.db.elephantsql.com/airqktxs';

// create new pool using connection string
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    // display SQL query in console upon execution
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
