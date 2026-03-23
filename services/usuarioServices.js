const db =
require("../database/usuarioDatabase")

function criarUsuario(nome, email) {

  if (!nome || nome.trim() === "") {
    return false
  }

  if (!email || email.trim() === "") {
    return false
  }

  const emailExiste =
    db.buscarPorEmail(email)

  if (emailExiste) {
    return false
  }

  db.salvar({ nome, email })

  return true

}

function listarUsuarios() {

  return db.listar()

}

function buscarUsuario(id) {

  return db.buscarPorId(id)

}

function removerUsuario(id) {

  return db.remover(id)

}

function resetarBancoMock() {

  db.resetar()

}

module.exports = {

  criarUsuario,
  listarUsuarios,
  buscarUsuario,
  removerUsuario,
  resetarBancoMock

}