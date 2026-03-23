const express = require("express")

const usuarioController =
require("./controllers/usuarioController")

const app = express()

app.use(express.json())

app.post(
  "/usuarios",
  usuarioController.criar
)

app.get(
  "/usuarios",
  usuarioController.listar
)

app.get(
  "/usuarios/:id",
  usuarioController.buscar
)

app.delete(
  "/usuarios/:id",
  usuarioController.remover
)

app.listen(3000, () => {

  console.log(
    "Servidor rodando na porta 3000"
  )

})