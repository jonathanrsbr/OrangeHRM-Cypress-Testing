/// <reference types="Cypress" />
describe('Testes de aplicações no PIM', () => {
    beforeEach(() => {
      cy.login('Admin', 'admin123');
    });
  
      it('Realizar cadastro de colaborador com username com menos de 5 caracteres', () => {
        cy.contains("PIM").click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('João');
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('Bezerra');
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('Silva')
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0468875');
        cy.get('.oxd-switch-input').click();
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('joao')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva150275');
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva150275');
        cy.get('.oxd-button--secondary').click();
        cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Should be at least 5 characters');
      });

      it('Realizar cadastro de colaborador com username com mais de 40 caracteres', () => {
        cy.contains("PIM").click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('João');
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('Bezerra');
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('Silva')
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0468875');
        cy.get('.oxd-switch-input').click();
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('joaobezerradasilva15021975198666777898977')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva150275');
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva150275');
        cy.get('.oxd-button--secondary').click();
        cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Should not exceed 40 characters');
      });

      it('Realizar cadastro de colaborador com Full Name contendo números e caracteres especiais', () => {
        cy.contains("PIM").click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('João6541564@');
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('Bezerra)){}');
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('Silva:::.|')
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0468876');
        cy.get('.oxd-switch-input').click();
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('joaosilva76')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva150275');
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva150275');
        cy.get('.oxd-button--secondary').click();
        cy.get('.oxd-toast').should('contains.text', 'Saved');
      });

      it('Realizar cadastro com campo de Full Name vazio', () => {
        cy.contains("PIM").click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0468875');
        cy.get('.oxd-switch-input').click();
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('joaosilva75')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva150275');
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva150275');
        cy.get('.oxd-button--secondary').click();
        cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('have.text', 'Required');
        cy.get('.--name-grouped-field > :nth-child(2)').should('have.text', 'Required');
        cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').should('have.text', 'Required');
      });

      it('Realizar cadastro de colaborador com Password contendo apenas letras', () => {
        cy.contains("PIM").click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('João');
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('Bezerra');
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('Silva')
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0468875');
        cy.get('.oxd-switch-input').click();
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('joaosilva75')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silvajoaosilva');
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silvajoaosilva');
        cy.get('.oxd-button--secondary').click();
        cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Your password must contain minimum 1 number');
      });

      it('Realizar cadastro de colaborador com Password contendo apenas números', () => {
        cy.contains("PIM").click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('João');
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('Bezerra');
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('Silva')
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0468875');
        cy.get('.oxd-switch-input').click();
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('joaosilva75')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('15021975');
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('15021975');
        cy.get('.oxd-button--secondary').click();
        cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Your password must contain minimum 1 lower-case letter');
      });

      it('Realizar cadastro de colaborador com Password contendo menos de 7 caracteres', () => {
        cy.contains("PIM").click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('João');
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('Bezerra');
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('Silva')
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0468875');
        cy.get('.oxd-switch-input').click();
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('joaosilva75')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva1');
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva1');
        cy.get('.oxd-button--secondary').click();
        cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Should have at least 7 characters');
      });

      it('Realizar cadastro de colaborador com Password contendo mais de 64 caracteres', () => {
        cy.contains("PIM").click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('João');
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('Bezerra');
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('Silva')
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0468875');
        cy.get('.oxd-switch-input').click();
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('joaosilva75')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('11111222223333344444!JoãoBezerraSilva1234567890J040n@B3z3rr4S1lv4');
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('11111222223333344444!JoãoBezerraSilva1234567890J040n@B3z3rr4S1lv4');
        cy.get('.oxd-button--secondary').click();
        cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Should not exceed 64 characters');
      });

      it('Realizar cadastro de colaborador com Password divergente do campo confirm password', () => {
        cy.contains("PIM").click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('João');
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('Bezerra');
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('Silva')
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0468875');
        cy.get('.oxd-switch-input').click();
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('joaosilva75')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva150275');
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva150286');
        cy.get('.oxd-button--secondary').click();
        cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Passwords do not match');
      });

      it('Realizar cadastro de colaborador', () => {
        cy.contains("PIM").click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('João');
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('Bezerra');
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('Silva')
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0468875');
        cy.get('.oxd-switch-input').click();
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('joaosilva75')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva150275');
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva150275');
        cy.get('.oxd-button--secondary').click();
        cy.get('.oxd-toast').should('contains.text', 'Saved');
      });

      it('Realizar cadastro de colaborador já cadastrado', () => {
        cy.contains("PIM").click();
        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('João');
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('Bezerra');
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('Silva')
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0468875');
        cy.get('.oxd-switch-input').click();
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('joaosilva75')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva150275');
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva150275');
        cy.get('.oxd-button--secondary').click();
        cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Employee Id already exists', 'Username already exists');
      });
  });
  