/// <reference types="Cypress" />
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Visiting the path to internal HTML file
    });
      it('Logar no OrangeHRM', function() {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
          .type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
          .type('admin123')
        cy.get('.oxd-button')
          .click()
    });
  });