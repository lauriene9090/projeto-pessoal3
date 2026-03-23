let usuarios = []
let idAtual = 1

function salvar(usuario) {

  usuario.id = idAtual++

  usuarios.push(usuario)

  return usuario

}

function listar() {

  return usuarios

}

function buscarPorEmail(email) {

  return usuarios.find(
    usuario => usuario.email === email
  )

}

function buscarPorId(id) {

  return usuarios.find(
    usuario => usuario.id === id
  )

}

function remover(id) {

  const index = usuarios.findIndex(
    usuario => usuario.id === id
  )

  if (index !== -1) {

    usuarios.splice(index, 1)

    return true

  }

  return false

}

function resetar() {

  usuarios = []
  idAtual = 1

}

module.exports = {

  salvar,
  listar,
  buscarPorEmail,
  buscarPorId,
  remover,
  resetar

}