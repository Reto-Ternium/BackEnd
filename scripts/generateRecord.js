var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ternium",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  setInterval(function () {
    const rndLat =
      Math.random() * (25.728408037838058 - 25.715301799102125) +
      25.715301799102125;
    const rndLong =
      Math.random() * (100.30783537957136 - 100.293713230266218) +
      100.293713230266218;
    const rndCon = Math.floor(Math.random() * 300);
    const rndDisp = Math.floor(Math.random() * 3) + 1;

    var sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${rndCon})', '${rndLat}', '-${rndLong}', '${rndDisp}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("worker inserted");
    });
  }, 10000);
});
