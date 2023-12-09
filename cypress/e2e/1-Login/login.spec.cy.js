/// <reference types="Cypress" />
describe('Teste de Login do Administrador', () => {
  // Fluxo de sucesso
  it('CT001 - Logar no OrangeHRM com credênciais de ADM, disponíveis no site', () => {
    cy.login('Admin', 'admin123')
    cy.get('.oxd-sidepanel-body') // Painel lateral presente apenas no home menu
      .should('be.visible')
      .contains('Buzz') // Um dos campos do painel lateral
  })

  // Fluxos de exceção
  it('CT002 - Login utilizando credencial de "Username" inválida', () => {
    cy.login('asdfg', 'admin123')
    cy.get('.oxd-alert-content > .oxd-text') // Mensagem de erro:"Invalid credentials"
      .contains('Invalid credentials')
      .should('be.visible')
  })
  it('CT003 - Login utilizando credencial de "Password" inválida', () => {
    cy.login('Admin', 'asdfg123')
    cy.get('.oxd-alert-content > .oxd-text') // Mensagem de erro:"Invalid credentials"
      .contains('Invalid credentials')
      .should('be.visible')
  })

  // Fluxo alternativos
  it('CT004 - Verificar se a opção "Forgot your password" funciona corretamente.', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('.orangehrm-login-forgot > .oxd-text') // Campo "Forgot your password"
      .should('be.visible')
      .click()
    cy.get('.oxd-input').type('Admin') // Adiciona o username correto
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-text--h6') // Mensagem de erro: "Reset Password link sent successfully"
      .should('be.visible')
      .contains('successfully')
  })
})
