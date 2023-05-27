const express = require("express");
require("dotenv").config();

//Crear express app
const app = express();

//Statics files
app.use(express.static('public'))


//Middlewares
app.use(express.json())

//Rutas
app.use('/api/auth', require('./routes/auth'))


//Escuchar en puerto 4000
app.listen(process.env.PORT, () => {
  console.log("Server on port:", process.env.PORT)
});
