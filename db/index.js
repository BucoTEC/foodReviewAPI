import pg from "pg";
const Pool = pg.Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "food_review",
  password: "04012000",
  port: 5432,
});

const database = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

export default database;
