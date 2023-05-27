const express = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const { generateJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = express.response) => {
  const { name, email, password } = req.body;
  try {
    let usuario = await Usuario.findOne({ email: email });
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario con ese correo ya existe",
      });
    }

    usuario = new Usuario(req.body);
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);
    await usuario.save();

    res.status(200).json({
      ok: true,
      usuario,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      e,
    });
  }
};

const register = (req, res = express.response) => {
  const { name, email, password } = req.body;

  res.status(200).json({
    ok: true,
    msg: "Usuario registrado",
    name,
    email,
    password,
  });
};

const loginUsuario = async (req, res = express.response) => {
  const { email, password } = req.body;
  try {
    let usuario = await Usuario.findOne({ email: email });
    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario NO existe",
      });
    }

    const passwordValid = bcrypt.compareSync(password,usuario.password)
    if(!passwordValid){
      return res.status(400).json({
        ok:false,
        msg: 'Password is not valid'
      })
    }

    const token = await ( generateJWT(usuario.id,usuario.name))
    res.status(200).json({
      ok: true,
      usuario,
      token
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      e,
    });
  }
};

const revalidarToken = async (req, res = express.response) => {
  const {uid,name} = req
  const token = await(generateJWT(uid,name))
  
  res.json({
    ok:true,
    token
  })
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
  register,
};
