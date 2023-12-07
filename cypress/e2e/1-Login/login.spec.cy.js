/// <reference types="Cypress" />
describe('Teste de Login do Administrador', () => {
  it('Logar no OrangeHRM', () => {
    cy.login('Admin', 'admin123')
    cy.get('.oxd-sidepanel-body') // Painel lateral presente apenas no home menu
      .should('be.visible')
      .contains('Buzz') // Um dos campos do painel lateral
  });
});
