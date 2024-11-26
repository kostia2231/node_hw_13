import express from "express";
import mongoose from "mongoose";
import data from "./src/data.js";
import "dotenv/config";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3333;
const uri = process.env.MONGO_URI;

mongoose
  .connect(uri, {})
  .then(() => {
    console.log(`connection established`);
    data();
  })
  .catch((err) => {
    console.error(`error occurred establishing the connection: ${err.message}`);
  });

app.listen(port, () => {
  console.log(`server is running on: http://localhost:${port}`);
});
