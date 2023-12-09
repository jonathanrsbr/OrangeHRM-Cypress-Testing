describe('Teste de API do Site Orange HRM', () => {
  // Verifica o Header
  it('Valida o header info', () => {
    // Verifica o header info antes dos outros testes
    cy.api('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      username: 'Admin',
      password: 'admin123'
    }).as('login')

    cy.get('@login').its('headers.content-type').should('include', 'text/html; charset=UTF-8')
  })

  // Teste de autenticação bem-sucedida:
  it('Deve fazer login com sucesso', () => {
    // Antes de cada teste, faz login com as credenciais padrão
    cy.api('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      username: 'Admin',
      password: 'admin123'
    }).as('login')

    // Verifica se a resposta é bem-sucedida
    cy.get('@login').its('status').should('eq', 200)

    // Verifica se a resposta contém informações esperadas
    cy.get('@login').its('body.token').should('not.exist')
  })

  // Teste de autenticação mal-sucedida:
  it('Deve apresentar o status 404, pois credenciais apresentadas não existem', () => {
    // Tentativa de login com credenciais inválidas
    cy.request({
      method: 'POST',
      url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validateCredentials',
      failOnStatusCode: false,
      body: {
        username: 'TestadorErrado',
        password: 'senhaErrada1'
      }
    }).as('badLogin')

    // Verifica se a resposta indica uma falha de autenticação
    cy.get('@badLogin').its('status').should('eq', 404) // 404 - Not found
  })

  // Teste de autenticação alternativa, Bem-sucedida:
  it('Deve fazer login com credenciais válidas, adicionadas no campo PIM', () => {
    // Tentativa de login com credenciais válidas
    cy.api('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      username: 'joaosilva75',
      password: 'silva150275'
    }).as('outroLogin')

    // Verifica se a resposta indica credenciais autorizadas
    cy.get('@outroLogin').its('status').should('eq', 200) // 200 - Credenciais autorizadas
  })
})
