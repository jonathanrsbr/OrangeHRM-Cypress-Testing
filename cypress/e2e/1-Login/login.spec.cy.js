/// <reference types="Cypress" />
describe('Teste de Login do Administrador', () => {
  it('Logar no OrangeHRM', () => {
      cy.login("Admin", "admin123")
    });
  });