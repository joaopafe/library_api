import { openDb } from "../../connectDB.js";

export default class BookRepository {
  createTable() {
    openDb().then((db) => {
      db.exec(
        `CREATE TABLE IF NOT EXISTS Book (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          author_id INTEGER,
          publishing_id INTEGER,
          category_id INTEGER,
          price INTEGER
          );`
      );
    });
  }
}
