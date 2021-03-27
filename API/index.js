const express = require("express");
const path = require("path");
const app = express();
const jeux = require("./assets/json/games.json");
const port = 8080;
app.use(express.json());

app.listen(
    port, 
    () => { console.log(`serveur à l'écoute : http://localhost:${port}`);}
  );
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

app.get("/listeJeux", (req, res) => {
  //   res.send("liste Jeux");
  res.status(200).json(jeux);
});

app.get("/listeJeux/:id", (req, res) => {
  //   res.send("liste Jeux");
  const id = parseInt(req.params.id);
  const jeu = jeux.find(jeux => jeux.id === id)
  res.status(200).json(jeu);
});

app.post('/listeJeux', (req, res) => 
{
    jeux.push(req.body);
    res.status(200).json(jeux);
});

app.put('/listeJeux/:id', (req,res) =>
{
    const id = parseInt(req.params.id);
    let jeu = jeux.find(jeu => jeu.id === id);
    jeu.jeu = req.body.jeu;
    jeu.image = req.body.image;
    jeu.description = req.body.description;
    res.status(200).json(jeu);
});

app.delete('/listeJeux/:id', (req,res) =>
{
    const id = parseInt(req.params.id);
    let jeu = jeux.find(jeux => jeux.id === id);
    jeux.splice(jeux.indexOf(jeu),1);
    res.status(200).json(jeux);
    
});