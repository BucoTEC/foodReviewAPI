import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// config
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

// ROUTES

//get all restaurantes
app.get("/api/restaurants", (req, res) => {
  res.json("all restaurantes");
});

//get single restaurante
app.get("/api/restaurants/:id", (req, res) => {
  const { id } = req.params;

  res.json({ msg: "single restaurante", id });
});

//create restaurante
app.get("/api/restaurants", (req, res) => {
  const data = req.body;
  res.status(200).json({ msg: "created new restaurantes", data });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serverr is operational on port: ${port}`);
});
