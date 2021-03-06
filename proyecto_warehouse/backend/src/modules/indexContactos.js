const express = require("express");
const contacto = express.Router();
const multer = require("multer");
const upload = multer({ dest: "./public/tmp" });
const validarLocacion = require("../services/validarLocacion");
const validarCompania = require("../services/validarCompania");
const validarCuentaContacto = require("../middlewares/contacto/canal/validarCuentaContacto");
const validarCreateContacto = require("../middlewares/contacto/validarCreateContacto");
const validarModifyContacto = require("../middlewares/contacto/validarModifyContacto");
const validarCreateCanal = require("../middlewares/contacto/canal/validarCreateCanal");
const validarModifyCanal = require("../middlewares/contacto/canal/validarModifyCanal");
const crearContacto = require("../controllers/contacto/crearContacto");
const obtenerContactos = require("../controllers/contacto/obtenerContactos");
const modificarContacto = require("../controllers/contacto/modificarContacto");
const modificarCanal = require("../controllers/contacto/canal/modificarCanal");
const crearCanal = require("../controllers/contacto/canal/crearCanal");
const eliminarContacto = require("../controllers/contacto/eliminarContacto");
const eliminarCanal = require("../controllers/contacto/canal/eliminarCanal");

contacto.post(
  "/canales/:id",
  validarCreateCanal,
  validarCuentaContacto,
  crearCanal
);
contacto.put(
  "/canales/:id",
  validarModifyCanal,
  validarCuentaContacto,
  modificarCanal
);
contacto.delete("/canales/:id", eliminarCanal);
contacto.put(
  "/:id",
  upload.single("uidImagen"),
  validarModifyContacto,
  validarCompania,
  validarLocacion,
  validarCuentaContacto,
  modificarContacto
);
contacto.delete("/", eliminarContacto);
contacto.post(
  "/",
  upload.single("uidImagen"),
  validarCreateContacto,
  validarCompania,
  validarLocacion,
  validarCuentaContacto,
  crearContacto
);
contacto.get("/", obtenerContactos);

module.exports = contacto;
