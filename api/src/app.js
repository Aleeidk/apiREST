const express = require('express');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conexión a MongoDB (se configurará con variables de entorno)
mongoose.connect(process.env.MONGODB_URI, {
});

mongoose.connection.on('connected', () => {
  console.log('Conectado a MongoDB');
});

// Rutas
app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.use('/api/productos', require('./routes/productos.route'));

module.exports = app;