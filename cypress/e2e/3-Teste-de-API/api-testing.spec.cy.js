describe('Teste de API do Site Orange HRM', () => {
  beforeEach(() => {
    cy.api('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      username: 'Admin',
      password: 'admin123'
    }).as('login')
  })

  // Teste de autenticação bem-sucedida:
  it('Deve fazer login com sucesso', () => {
    // Verifica se a resposta é bem-sucedida
    cy.get('@login').its('status').should('eq', 200)

    // Verifica se a resposta contém informações esperadas
    cy.get('@login')
      .its('body')
      .then((body) => {
        cy.get(body).should('include.text', 'Bem-vindo, Admin')
      })
  })

  // Teste de autenticação mal-sucedida:
  it('Deve falhar ao fazer login com credenciais inválidas', () => {
    // Tentativa de login com credenciais inválidas
    cy.api('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      username: 'Testador',
      password: 'senhateste'
    }).as('badLogin')

    // Verifica se a resposta indica uma falha de autenticação
    cy.get('@badLogin').its('status').should('eq', 401) // 401 - Unauthorized
  })
})
