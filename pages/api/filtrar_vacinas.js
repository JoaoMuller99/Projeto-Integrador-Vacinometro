let mysql = require("mysql");

export default function handler(req, res) {
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = `SELECT vacina_nome, vacina_descricao_dose FROM newschema.vacinacovid WHERE estabelecimento_municipio_nome = '${req.body.cidade}' AND (vacina_descricao_dose = '1ª Dose' OR vacina_descricao_dose = '2ª Dose')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      res.status(200).json(result);
    });
  });
}
