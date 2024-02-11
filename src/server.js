import express from "express";
import BookRepository from "./repositories/bookRepository.js";

const port = process.env.PORT || 3000;
const bookRepository = new BookRepository();

bookRepository.createTable();

const app = express();

app.listen(port, console.log(`Server listening in the port ${port}`));
