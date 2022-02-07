import { Pool } from "pg";
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "food_review",
  password: "04012000",
  port: 5431,
});

database = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

export default database;
