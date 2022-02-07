import pg from "pg";
const Pool = pg.Pool;
const pool = new Pool();

const database = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

export default database;
