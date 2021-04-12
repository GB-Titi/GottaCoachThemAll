const express = require("express");
const path = require("path");
const app = express();
const jeux = require("./assets/json/games.json");
const port = 8080;
app.use(express.json());
const { body,validationResult } = require('express-validator');

///Database Connection
const mysql = require("mysql");
const { pseudoRandomBytes } = require("crypto");
const { mainModule } = require("process");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gotta_coach_them_all",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("connecté à la base de données");
});


///API EXPRESS
app.use(express.urlencoded({
    extended: true
  }))

app.listen(port, () => {
  console.log(`serveur à l'écoute : http://localhost:8000`);
});
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
});
app.get("/inscription", (req, res) => {
  res.send("Inscription");
});

app.get("/connexion", (req, res) => {
  res.send("connexion");
});

app.get("/listeCoach", (req, res) => {
  res.send("listeCoach");
});

app.get("/listeMembres", (req, res) => {
  res.send("listeMembres");
});

app.get("/ajouterJeu", function (req, res) {
    res.sendFile(path.join(__dirname + "/ajouterJeu.html"));
  });

app.get("/listeJeux", (req, res) => {
  //   res.send("liste Jeux");
  //   res.status(200).json(jeux);
  db.query("SELECT * FROM jeux", function (error, results) {
    if (error) throw error;
    return res.status(200).send(results);
  });
});

app.get("/listeJeux/:id", (req, res) => {
  // res.send("liste Jeux");
  const id = parseInt(req.params.id);
  //   const jeu = jeux.find(jeux => jeux.id === id)
  //   res.status(200).json(jeu);
  db.query("SELECT * FROM jeux where id=?", id, function (error, results) {
    if (error) throw error;
    return res.status(200).send(results[0]);
  });
});

app.post("/addGame", (req, res) => {
  //   jeux.push(req.body);
  jeu = req.body.jeu;
  description = req.body.description;
});

app.post("/addUser",

    body('firstname').isString(), 
    body('lastname').isString(),
    body('mail').isEmail(),
    body('pseudo').isString(),
    body('password').isLength({min: 5}),
    (req, res)=> {
    //   jeux.push(req.body);
    firstname = req.body.firstname ;
    lastname = req.body.lastname ;
    pseudo = req.body.pseudo ;
    mail = req.body.mail ;
    password = req.body.password ;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    console.log(firstname, lastname, pseudo, mail, password);
    db.query(
      "INSERT INTO users(firstname,lastname,pseudo,mail,mdp,id_role ) VALUES (?,?,?,?,?,?) ",
      [firstname, lastname, pseudo, mail, password, "1"],
      function (error, results) {
        if (error) throw error;
        return res
          .status(200)
          .send({ results, message: "User has been created" });
      }
    );
  });

app.put("/listeJeux/:id", (req, res) => {
  const id = parseInt(req.params.id);
  jeu = req.body.jeu;
  description = req.body.description;

  //   let jeu = jeux.find((jeu) => jeu.id === id);
  //   jeu.jeu = req.body.jeu;
  //   jeu.image = req.body.image;
  //   jeu.description = req.body.description;
  //   res.status(200).json(jeu);

  db.query(
    "UPDATE jeux SET jeu=?, desc =? Where id = ?",
    [jeu, description, id],
    function (error, result) {
      if (error) throw error;
      return res.status(200).send({ result, message: "game has been updated" });
    }
  );
});

app.delete("/listeJeux/:id", (req, res) => {
  const id = parseInt(req.params.id);
  //   let jeu = jeux.find((jeux) => jeux.id === id);
  //   jeux.splice(jeux.indexOf(jeu), 1);
  //   res.status(200).json(jeux);
  db.query("DELETE FROM jeux WHERE id = ?", [id], function (error, results) {
    if (error) throw error;
    return res.status(200).send({ results, message: "game has been deleted" });
  });
});
