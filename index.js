const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();

//Crear express app
const app = express();

//Base de datos
dbConnection()

//Cors
const cors = require('cors',{cors:{
  origin: '*'
}})

//Statics files
app.use(express.static('public'))


//Lectura y parseo del body
app.use(express.json())

//Rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/task', require('./routes/task'))

//Escuchar en puerto 4000
app.listen(process.env.PORT, () => {
  console.log("Server on port:", process.env.PORT)
});
