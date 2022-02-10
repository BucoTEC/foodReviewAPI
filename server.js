import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./db/index.js";
// config
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

// ROUTES
//get all restaurantes
app.get("/api/restaurants", async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM restaurants");
    res.json(rows);
  } catch (err) {
    console.log(err.stack);
    res.json(err.message);
  }
});

//get single restaurante
app.get("/api/restaurants/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query("SELECT * FROM restaurants WHERE id = $1", [
      id,
    ]);
    res.json(rows);
  } catch (err) {
    console.log(err.stack);
    res.json(err.message);
  }
});

//create restaurante
app.post("/api/restaurants", async (req, res, next) => {
  const { name } = req.body;
  const { location } = req.body;
  const { price_range } = req.body;

  try {
    const { rows } = await db.query(
      "SELECT * FROM restaurants WHERE name = $1",
      [name]
    );
    if (rows.length !== 0) {
      throw Error("review alredy exists");
    }

    await db.query(
      "INSERT INTO restaurants (name, location, price_range) values ($1,$2,$3)",
      [name, location, price_range]
    );

    res.json("Added a food review successfuly");
  } catch (err) {
    console.log(err);
    res.json(err.message);
  }
});

//update restaurant
app.put("/api/restaurants/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!req.body.name || !req.body.location || !req.body.price_range) {
      throw Error("Missing data");
    }
    const data = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, id]
    );
    res.json(data.rows[0]);
  } catch (err) {
    console.log(err);
    res.json(err.message);
  }
});
//delete restaurante
app.delete("/api/restaurants/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM restaurants WHERE id = $1", [id]);
    res.json("Deleted review");
  } catch (err) {
    console.log(err);
    res.json(err.message);
  }
});

//add review
app.post("/api/restaurants/:id/addReview", async (req, res) => {
  try {
    const newReview = await db.query(
      "INSERT INTO reviews (restaurant_id, name, review, rating) values ($1, $2, $3, $4) returning *;",
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    );
    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//not found
app.use("*", (req, res) => {
  res.status(404).json("404 route doese not exist");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serverr is operational on port: ${port}`);
});
