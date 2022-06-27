const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

//para poder hacer peticiones al servidor
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//conection bd
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true
}).then(()=>{
  console.log('connect')
})

//Rutas
app.use('/service/auth', require('./routes/routesPersona'));
app.use('/service/auth', require('./routes/routesCursos'));

const port = process.env.PORT;
app.listen(port, () => {
  console.log('aplicacion ejucatandose');
});

