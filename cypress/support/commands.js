// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('input[name="username"]').clear().type(username)
  cy.get('input[name="password"]').clear().type(password)
  cy.get('.oxd-button').click()
})

Cypress.Commands.add('preencherFormularioCadastro', ({ firstName, middleName, lastName, id, username, password }) => {
  //cy.get(':nth-child(2) > .oxd-main-menu-item').contains('PIM').click() // Campo PIM
  //cy.get('.orangehrm-header-container > .oxd-button').click() // Botão Add

  //cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input') // First name
  cy.get('input[name="firstName"].orangehrm-firstname').type(firstName)
  cy.get('input[name="middleName"].orangehrm-middlename').type(middleName)
  cy.get('input[name="lastName"].orangehrm-lastname').type(lastName)
  cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(id)
  cy.get('.oxd-switch-input').click() // Botão para abrir campo suspenso de registro de usuário e senha
  cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
  cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(password) // Password
  cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password) // Confirm Password
  cy.get('.oxd-button--secondary').click() // Botão Salvar
})
