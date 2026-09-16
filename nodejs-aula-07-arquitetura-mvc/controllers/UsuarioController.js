// Importando o framework Express
import express from "express";
// router() :
const rota = express.Router()

// ROTA DE PERFIL
rota.get("/perfil", (req, res) => {
  res.render("perfil");
});

export default rota;