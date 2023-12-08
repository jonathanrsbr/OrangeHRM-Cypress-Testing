describe('Teste de API do Site Orange HRM', () => {
  beforeEach(() => {
    cy.api('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login')
  })
  it.only('Valida o header info', () => {
    cy.get('@login').its('headers').its('content-type').should('include', 'text/html; charset=UTF-8')
  })
})
