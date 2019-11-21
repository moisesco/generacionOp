const express = require('express');
const path = require('path'); //modulo nativo de node.js

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const apiRouter = require('./routes/api_v1');

const app = express();
mongoose.connect('mongodb://localhost/estudiantes', {
  useMongoClient: true
});
//enviar la aplicacion de angular al cliente
//middlewear: funcion que se ejecuta cada vez que recibimos una peticion, procesar la peticiones del servidor
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
//aqui creamos la ruta por la que queremos que viaje la data
app.use('/', apiRouter);

//enviar todos los archivos de angular al navegador
//static files
console.log(__dirname);
app.use(express.static(path.join(__dirname,'public/dist/users-app')))

app.listen(3000, () => {
  console.log('server on port 3000');
})
