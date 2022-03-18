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

  let trabajador = {
    nombre: "María Gonzáles",
    puesto: "Mecánico",
    areaID: "1",
    sensorID: "3",
  };
  var sql = `INSERT INTO trabajadores (Nombre, Puesto, Area_ID, Sensor_ID) VALUES ('${trabajador.nombre}', '${trabajador.puesto}', '${trabajador.areaID}', '${trabajador.sensorID}')`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("worker inserted");
  });
  var sensorSql = `INSERT INTO sensores (Trabajador_ID) VALUES ('${trabajador.sensorID}')`;
  con.query(sensorSql, function (err, result) {
    if (err) throw err;
    console.log("sensor inserted");
  });
});
