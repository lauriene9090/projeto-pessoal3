const service =
require("../services/usuarioServices")

function criar(req, res) {

  const { nome, email } = req.body

  const resultado =
    service.criarUsuario(nome, email)

  if (!resultado) {

    return res.status(400).json({
      erro: "Dados inválidos ou email já existe"
    })

  }

  return res.status(201).json({
    mensagem: "Usuário criado"
  })

}

function listar(req, res) {

  const usuarios =
    service.listarUsuarios()

  return res.json(usuarios)

}

function buscar(req, res) {

  const id =
    Number(req.params.id)

  const usuario =
    service.buscarUsuario(id)

  if (!usuario) {

    return res.status(404).json({
      erro: "Usuário não encontrado"
    })

  }

  return res.json(usuario)

}

function remover(req, res) {

  const id =
    Number(req.params.id)

  const removido =
    service.removerUsuario(id)

  if (!removido) {

    return res.status(404).json({
      erro: "Usuário não encontrado"
    })

  }

  return res.json({
    mensagem: "Usuário removido"
  })

}

module.exports = {

  criar,
  listar,
  buscar,
  remover

}