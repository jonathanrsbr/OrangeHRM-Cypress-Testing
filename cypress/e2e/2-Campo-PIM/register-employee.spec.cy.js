/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('CT005 - Testes de cadastro de colaborador no campo PIM', () => {
  beforeEach(() => {
    cy.login('Admin', 'admin123') // realiza o login
    cy.get('span.oxd-text').contains('PIM').click() // clica em PIM
    cy.get('.orangehrm-header-container > .oxd-button').click() // clica no botão "Add"
  })

  it('CT006 - Cadastro usando username com menos de 5 caracteres', () => {
    cy.preencherFormularioCadastro({
      firstName: 'João',
      middleName: 'Bezerra',
      lastName: 'Silva',
      id: '0468875',
      username: 'joao',
      password: 'silva150275'
    })
    cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('5 characters')
  })

  it('CT007 - Cadastro usando username com mais de 40 caracteres', () => {
    cy.preencherFormularioCadastro({
      firstName: 'João',
      middleName: 'Bezerra',
      lastName: 'Silva',
      id: '0468875',
      username: 'joaobezerradasilva15021975198666777898977',
      password: 'silva150275'
    })
    cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Should not exceed 40 characters')
  })

  it('CT008 - Cadastro de colaborador com Full Name contendo números e caracteres especiais', () => {
    cy.preencherFormularioCadastro({
      firstName: 'João6541564@',
      middleName: 'Bezerra)){}',
      lastName: 'Silva:::.|',
      id: '0468875',
      username: 'joaosilva76',
      password: 'silva150275'
    })
    cy.get('.oxd-toast').should('contains.text', 'Saved')
  })

  it('CT009 - Realizar cadastro com campo de Full Name vazio', () => {
    cy.preencherFormularioCadastro({
      firstName: '',
      middleName: '',
      lastName: '',
      id: '0468875',
      username: 'joaosilva76',
      password: 'silva150275'
    })
    cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('have.text', 'Required')
    cy.get('.--name-grouped-field > :nth-child(2)').should('have.text', 'Required')
    cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').should('have.text', 'Required')
  })

  it('CT010 - Realizar cadastro de colaborador com Password contendo apenas letras', () => {
    cy.preencherFormularioCadastro({
      firstName: 'João',
      middleName: 'Bezerra',
      lastName: 'Silva',
      id: '0468875',
      username: 'joaosilva76',
      password: 'silvajoaosilva'
    })
    cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Your password must contain minimum 1 number')
  })
  it('CT011 - Realizar cadastro de colaborador com Password contendo apenas números', () => {
    cy.preencherFormularioCadastro({
      firstName: 'João',
      middleName: 'Bezerra',
      lastName: 'Silva',
      id: '0468875',
      username: 'joaosilva75',
      password: '15021975'
    })
    cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Your password must contain minimum 1 lower-case letter')
  })

  it('CT012 - Realizar cadastro de colaborador com Password contendo menos de 7 caracteres', () => {
    cy.preencherFormularioCadastro({
      firstName: 'João',
      middleName: 'Bezerra',
      lastName: 'Silva',
      id: '0468875',
      username: 'joaosilva75',
      password: 'silva1'
    })
    cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Should have at least 7 characters')
  })

  it('CT013 - Realizar cadastro de colaborador com Password contendo mais de 64 caracteres', () => {
    cy.preencherFormularioCadastro({
      firstName: 'João',
      middleName: 'Bezerra',
      lastName: 'Silva',
      id: '0468875',
      username: 'joaosilva75',
      password: '11111222223333344444!JoãoBezerraSilva1234567890J040n@B3z3rr4S1lv4'
    })
    cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Should not exceed 64 characters')
  })

  it('CT014 - Realizar cadastro de colaborador com Password divergente do campo confirm password', () => {
    cy.preencherFormularioCadastro({
      firstName: 'João',
      middleName: 'Bezerra',
      lastName: 'Silva',
      id: '0468875',
      username: 'joaosilva75',
      password: 'silva150275'
    })
    cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('silva150286')
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Passwords do not match')
  })

  it('CT015 - Realizar cadastro de colaborador', () => {
    cy.preencherFormularioCadastro({
      firstName: 'João',
      middleName: 'Bezerra',
      lastName: 'Silva',
      id: '0468875',
      username: 'joaosilva75',
      password: 'silva150275'
    })
    cy.get('.oxd-toast').should('contains.text', 'Saved')
  })

  it('CT016 - Realizar cadastro de colaborador já cadastrado', () => {
    cy.preencherFormularioCadastro({
      firstName: 'João',
      middleName: 'Bezerra',
      lastName: 'Silva',
      id: '0468875',
      username: 'joaosilva75',
      password: 'silva150275'
    })
    cy.get('.oxd-input-group > .oxd-text').should('contains.text', 'Employee Id already exists', 'Username already exists')
  })
})
