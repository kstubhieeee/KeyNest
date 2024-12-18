/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require("mongodb");

dotenv.config();
const url = process.env.MONGO_URI;
const app = express();
const port = 3000;

const dbName = process.env.DB_NAME;
const client = new MongoClient(url);
client.connect();

app.use(bodyparser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Get a credential
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("credentials");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

// Save a credential
app.post("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("credentials");
  const findResult = await collection.insertOne(password);
  res.send({
    success: true,
    result: findResult,
  });
});

// Delete a credential
app.delete("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("credentials");
  const findResult = await collection.deleteOne(password);
  res.send({
    success: true,
    result: findResult,
  });
});
