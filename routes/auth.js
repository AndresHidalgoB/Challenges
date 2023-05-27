const { Router } = require("express");
const router = Router();
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
  register,
} = require("../Controllers/auth");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos.js");

router.post("/", loginUsuario);

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "la constra tiene que ser >= 6 bro").isLength({ min: 6 }),
    validarCampos
  ],
  crearUsuario
);

router.post(
  "/register",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "la constra tiene que ser >= 6 bro").isLength({ min: 6 }),
    validarCampos,
  ],
  register
);
router.get("/renew", revalidarToken);

module.exports = router;
