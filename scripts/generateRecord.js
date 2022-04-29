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

  con.query("DELETE FROM registros", function (err, result) {
    if (err) throw err;
    // console.log("Datatable new");
  });

  setInterval(function () {
    // Real Lat max value = 25.728408037838058
    // Real Lat min value = 25.715301799102125
    let rndLat = Math.random() * (728408037 - 715301799) + 715301799;

    // Real Long max value = 100.30783537957136
    // Real Long min value = 100.293713230266218
    let rndLong = Math.random() * (307835379 - 293713230) + 293713230;

    const rndCon = Math.floor(Math.random() * 300);
    const rndDisp = Math.floor(Math.random() * 3) + 1;

    var sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${rndCon})', '${rndLat}', '-${rndLong}', '${rndDisp}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("worker inserted");
    });
  }, 100);
});
