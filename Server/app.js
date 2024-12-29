const express = require("express");
const mySql = require("mysql2");
var cors = require("cors");

const body_parser = require("body-parser");
const app = express();

require("dotenv").config();

app.use(cors());

// Use  body parser as middle ware
app.use(body_parser.urlencoded({ extended: true }));

app.listen(1111, (err) => {
  console.log("listneing");
});

const mysqlConnection = mySql.createConnection({
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  database: process.env.database,
  multipleStatements: true, 
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("connected");
  }
});

app.get("/install", (req, res) => {
  const Table = `CREATE TABLE IF NOT EXISTS ProductsTable (
    product_id INT AUTO_INCREMENT,
    id VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    brief VARCHAR(255) NOT NULL,
    startingPrice VARCHAR(255) NOT NULL,
    priceRange VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    PRIMARY KEY (product_id)
  )`;

  // Create tables in the database
  mysqlConnection.query(Table, (err) => {
    if (err) console.log(err);
  });
  res.send("Tables created");
});
// console.log(req.body);
app.post("/add-product", (req, res) => {
  // Add Products
  console.log(req.body);

  const {
    product_url,
    product_name,
    product_brief_description,
    product_description,
    product_img,
    product_id,
    starting_price,
    price_range,
  } = req.body;

  let insertProduct = `INSERT INTO ProductsTable (id,url,img,title,brief,startPrice,priceRange,description) VALUES (?, ?,?,?,?,?,?,?)`;

  mysqlConnection.query(insertProduct,
    [product_id,product_url,product_img,product_name,product_description,starting_price, price_range, product_brief_description],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
  res.send("Data inserted");
});     

app.get("/products", (req, res) => {
  let selectQuery = "SELECT * FROM ProductsTable";

  mysqlConnection.query(selectQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
