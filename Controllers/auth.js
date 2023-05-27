const express = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = (req, res = express.response) => {
  const { name, email, password } = req.body;

  res.status(200).json({
    ok: true,
    name,
    email,
    password,
  });
};

const register = (req,res = express.response) =>{
  const { name, email, password } = req.body

  res.status(200).json({
    ok: true,
    msg: "Usuario registrado",
    name,email,password
  })
  
}

const loginUsuario = (req, res = express.response) => {
  res.json({
    ok: true,
  });
};

const revalidarToken = (req, res = express.request) => {
  res.json({
    ok: true,
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
  register
};
