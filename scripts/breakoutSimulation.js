var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ternium",
});

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  // Real Lat max value = 25.728408037838058
  // Real Lat min value = 25.715301799102125
  // let rndLat = Math.random() * (728408037 - 715301799) + 715301799;

  // Real Long max value = 100.30783537957136
  // Real Long min value = 100.293713230266218
  // let rndLong = Math.random() * (307835379 - 293713230) + 293713230;

  //const rndCon = Math.floor(Math.random() * 300);
  let i, j, sql;
  const rndDisp = Math.floor(Math.random() * 3) + 1;
  let rndCon = 25;
  let rndLat = 715432861,
    rndLong = 307694158;

  sql = `DELETE FROM registros`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    // console.log("Datatable new");
  });

  const runSimulation = async () => {
    for (i = 0; i < 50; i++) {
      for (j = 0; j < 50; j++) {
        sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${rndCon})', '${rndLat}', '-${rndLong}', '${rndDisp}')`;
        con.query(sql, function (err, result) {
          if (err) throw err;
          // console.log("worker inserted");
        });
        rndLat = rndLat + 262124;
        console.log(`${rndLong} , ${rndLat}`);
      }
      rndLat = 715432861;
      rndLong = rndLong - 282443;
    }

    // Aquí empieza la simulación
    await timer(15000);
    console.log("Iniciando Simulacion");
    // Punto 1
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720413231}', '-${302327740}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 2
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720413231}', '-${302558962}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 3
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720413231}', '-${301914076}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 4
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720120045}', '-${302327740}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 6
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720644294}', '-${302327740}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 7
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720120045}', '-${302558962}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 8
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720120045}', '-${301914076}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 9
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720644294}', '-${302558962}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 10
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720644294}', '-${301914076}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 11
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720413231}', '-${301721633}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 12
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${150})', '${720413231}', '-${302327740}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 13
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720413231}', '-${301539190}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 14
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720644294}', '-${301721633}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 15
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720644294}', '-${301539190}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 16
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720120045}', '-${301721633}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 17
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${150})', '${720413231}', '-${301914076}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 18
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${719957920}', '-${301914076}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 19
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${719957920}', '-${301721633}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 20
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720120045}', '-${301539190}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 21
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${719957920}', '-${301539190}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 22
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${719957920}', '-${302327740}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 23
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${150})', '${720120045}', '-${301914076}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 24
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${719595795}', '-${301539190}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 25
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${719957920}', '-${301256747}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 26
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${150})', '${720120045}', '-${301721633}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 27
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720120045}', '-${301256747}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 28
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${719595795}', '-${301721633}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 29
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${719595795}', '-${301256747}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 30
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${719595795}', '-${302004076}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 31
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720906419}', '-${302286519}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 32
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720906419}', '-${302004076}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 33
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${150})', '${719957920}', '-${301721633}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 34
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${719957920}', '-${302558962}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 35
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720413231}', '-${302851405}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 36
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720120045}', '-${302851405}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 37
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${719595795}', '-${302286519}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 38
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${150})', '${720120045}', '-${302327740}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 39
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${150})', '${719957920}', '-${302004076}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 40
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${150})', '${719857920}', '-${301439190}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 41
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${600})', '${720413231}', '-${302327740}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 42
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720906419}', '-${302568962}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 43
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720644294}', '-${302286519}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 44
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720644294}', '-${302851405}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 45
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720906419}', '-${302851405}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 46
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720644294}', '-${302568962}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 47
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720382169}', '-${302568962}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 48
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${600})', '${720120045}', '-${302327740}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 49
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${719595795}', '-${302568962}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 49
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${150})', '${719857920}', '-${302327740}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 50
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${719857920}', '-${302851405}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 51
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${150})', '${720120045}', '-${302568962}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 52
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${600})', '${720413231}', '-${302004076}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 53
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${600})', '${720120045}', '-${302004076}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 54
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720906419}', '-${301721633}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 55
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720644294}', '-${302004076}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 56
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720382169}', '-${301721633}', '${1}' )`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 57
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${600})', '${720413231}', '-${302568962}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 58
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${600})', '${720644294}', '-${302327740}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 59
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${600})', '${720644294}', '-${302568962}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 60
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${150})', '${720906419}', '-${302186519}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 61
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${150})', '${720906419}', '-${302468962}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 62
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${150})', '${720382169}', '-${302851405}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 63
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${150})', '${720644294}', '-${302851405}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 64
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${721168544}', '-${302186519}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 65
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720282169}', '-${303133848}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 66
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${720644294}', '-${303133848}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 67
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${125})', '${721168544}', '-${302568962}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 68
    await timer(200);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${5000})', '${720413231}', '-${302327740}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });

    // Punto 69
    await timer(1000);
    sql = `INSERT INTO registros (Con_gas, Latitud, Longitud, Sensor_ID) VALUES ('${5000})', '${720413231}', '-${302004076}', '${1}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Nueva Medicion");
    });
  };

  runSimulation();
});
