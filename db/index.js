import pg from "pg";
import dotenv from "dotenv";
const Pool = pg.Pool;

dotenv.config();

const final = {
  connectionString: process.env.DATABASE_URL,
};

const pool = new Pool(final);

const database = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

export default database;
