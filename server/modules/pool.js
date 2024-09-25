const pg = require('pg');

if (process.env.DATABASE_URL) {
  console.log(`Using cloud database config (DATABASE_URL found)`);
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
} else {
  console.log(`Using local database config (no DATABASE_URL found)`);

  pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'react-gallery',
  });
}

module.exports = pool;
