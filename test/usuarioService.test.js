const service =
require("../services/usuarioServices")

describe("Service de Usuario", () => {

  beforeEach(() => {

    service.resetarBancoMock()

  })

  test("1 - Criar usuario valido", () => {

    const resultado =
      service.criarUsuario(
        "Maria",
        "maria@email.com"
      )

    expect(resultado).toBe(true)

  })

  test("2 - Nao criar usuario sem nome", () => {

    const resultado =
      service.criarUsuario(
        "",
        "email@email.com"
      )

    expect(resultado).toBe(false)

  })

  test("3 - Nao criar usuario sem email", () => {

    const resultado =
      service.criarUsuario(
        "Maria",
        ""
      )

    expect(resultado).toBe(false)

  })

  test("4 - Nao permitir email duplicado", () => {

    service.criarUsuario(
      "Maria",
      "maria@email.com"
    )

    const resultado =
      service.criarUsuario(
        "Joao",
        "maria@email.com"
      )

    expect(resultado).toBe(false)

  })

  test("5 - Listar usuarios", () => {

    service.criarUsuario(
      "Maria",
      "maria@email.com"
    )

    const lista =
      service.listarUsuarios()

    expect(lista.length).toBe(1)

  })

  test("6 - Buscar usuario existente", () => {

    service.criarUsuario(
      "Maria",
      "maria@email.com"
    )

    const usuario =
      service.buscarUsuario(1)

    expect(usuario).toBeDefined()

  })

  test("7 - Buscar usuario inexistente", () => {

    const usuario =
      service.buscarUsuario(1)

    expect(usuario).toBeUndefined()

  })

  test("8 - Remover usuario existente", () => {

    service.criarUsuario(
      "Maria",
      "maria@email.com"
    )

    const removido =
      service.removerUsuario(1)

    expect(removido).toBe(true)

  })

  test("9 - Remover usuario inexistente", () => {

    const removido =
      service.removerUsuario(1)

    expect(removido).toBe(false)

  })

  test("10 - Banco inicia vazio", () => {

    const lista =
      service.listarUsuarios()

    expect(lista.length).toBe(0)

  })

})