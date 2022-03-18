const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ternium",
});
db.connect();

//Body Parser
app.use(express.json({ limit: "10kb" }));
app.use(cors());

//ROUTES
app.get("/registros_ultima_hora", async (req, res) => {
  //FECHA ACTUAL
  var d = new Date(),
    dformat =
      [d.getFullYear(), d.getMonth() + 1, d.getDate()].join("-") +
      " " +
      [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
  console.log(dformat);

  //FECHA ACTUAL MENOS 1 HORA
  var numberOfMlSeconds = d.getTime();
  var addMlSeconds = 1 * 60 * 60000;
  var dLimit = new Date(numberOfMlSeconds - addMlSeconds);
  dLimitformat =
    [dLimit.getFullYear(), dLimit.getMonth() + 1, dLimit.getDate()].join("-") +
    " " +
    [dLimit.getHours(), dLimit.getMinutes(), dLimit.getSeconds()].join(":");
  console.log(dLimitformat);

  //QUERY SQL
  db.query(
    `SELECT * FROM registros WHERE F_Emision BETWEEN '${dLimitformat}' AND '${dformat}';`,
    function (err, rows, fields) {
      if (err) throw err;
      console.log(rows);
      res.status(200).json({
        status: "success",
        results: rows,
      });
    }
  );
});

app.get("/ultimo_dato", async (req, res) => {
  //QUERY SQL
  db.query(
    `SELECT * FROM registros ORDER BY ID DESC LIMIT 1`,
    function (err, rows, fields) {
      if (err) throw err;
      console.log(rows);
      res.status(200).json({
        status: "success",
        results: rows,
      });
    }
  );
});

module.exports = app;
