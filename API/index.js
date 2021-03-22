const express = require('express')
const path = require('path');
const app = express()

app.listen(8080, () => {
    console.log('Serveur à l\'écoute')
})
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });
app.get('/inscription', (req, res) => {
    res.send("Inscription")
});