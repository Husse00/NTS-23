var mysql = require("mysql2");
const util = require("util");

// MYSQL database connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "nts",
  port: 3306,
  insecureAuth: true
});

const query = util.promisify(connection.query).bind(connection); // creates a version of `query` that uses promises

// Funktion för att hämta användare om den finns i databasen
async function SignIn(email, password) {
  let success = false;

  // Hämta alla användare från databasen med givet email och password
  let dbResult = await query(
    `SELECT email FROM users WHERE email = '${email}' AND password = '${password}'`
  );

  // Om någon användare hittas så gick det att logga in
  if (dbResult.length !== 0) {
    success = true;
  }

  return success;
}

// Lägg till användare i databasen
async function SignUp(email, password) {
  let success = false;

  // Lägg till användare
  let dbResult = await query(
    `INSERT INTO users (email, password) VALUES ('${email}', '${password}')`
  );

  // Om inget id returneras så skapades inte användaren
  if (dbResult.insertId != null) {
    success = true;
  }

  return success;
}

// Skapa dokument
async function CreateDocument(name, description) {
  let insertedId = null;

  // Lägg till nytt dokument i databasen
  let dbResult = await query(
    `INSERT INTO documents (name, description) VALUES ('${name}', '${description}')`
  );

  // Om inget id returneras så skapades inte dokumentet
  if (dbResult.insertId != null) {
    insertedId = dbResult.insertId;
  }

  return insertedId;
}

// Hämta alla dokument från databasen och sortera på nyast först
async function GetDocuments() {
  let documents = await query("SELECT * FROM documents ORDER BY id DESC");

  return documents;
}

// Hämta specifikt dokument från databasen
async function GetDocument(id) {
  let document = await query(`SELECT * FROM documents WHERE id = ${id}`);

  return document;
}

// Uppdatera specifikt dokument i databasen
async function UpdateDocument(id, text) {
  let result = await query(
    `UPDATE documents SET data = ? WHERE id = ?`, [text, id]
  );

  return 1;
}

module.exports = {
  SignIn,
  SignUp,
  CreateDocument,
  GetDocuments,
  GetDocument,
  UpdateDocument,
};
