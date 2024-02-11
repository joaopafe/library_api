import "dotenv/config";
import express from "express";
import { openDb } from "../connectDB.js";

const port = process.env.PORT || 3000;

function createTable() {
  openDb().then((db) => {
    db.exec(`CREATE TABLE IF NOT EXISTS Book (id INTEGER)`);
  });
}

createTable();

const app = express();

app.listen(port, console.log("Servidor na porta " + port));
