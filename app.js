require('dotenv').config();
const express = require("express");
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;


//handlebars
app.set('view engine', 'hbs');  // indica que usaremos la plantilla "handlebars"
hbs.registerPartials(__dirname + '/views/partials');   // indicamos el directorio hacia los parciales

//Servir contenido estático // middlewares
app.use(express.static('public'));

//Routing-rutas// public tiene prioridad sobre las rutas

app.get("/", (req, res) => {
  res.render('home', {
    nombre: 'Rebeca',
    titulo: 'Curso de Node'
  });
});

app.get("/generic", (req, res) => {
  res.render('generic', {
    nombre: 'Rebeca',
    titulo: 'Curso de Node'
  });
});

app.get("/elements", (req, res) => {
    res.render('elements', {
      nombre: 'Rebeca',
      titulo: 'Curso de Node'
    });
  });

app.get("*", (req, res) => {
  res.sendFile(__dirname + '/public/404.html'); //enviamos la ruta de la carpeta
});     //__dirname: Obtiene el nombre de directorio completo del directorio donde se encuentra el archivo actualmente ejecutado

app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});
