describe('template prueba juice shop', () => {
  it('passes', () => {
    const email = `simon_${Date.now()}@test.com`
    cy.visit('http://localhost:3000/#/')

    cy.get('.cc-btn', { timeout: 10000 })
      .should('be.visible')
      .click()

    cy.get('.cc-window').should('not.be.visible')

    cy.contains('Dismiss')
      .should('be.visible')
      .click()

    cy.get('#navbarAccount > .mdc-button__label > span').click()
    cy.get('.mat-mdc-menu-item-text > span').click()
    cy.wait(1000)
    cy.get('#newCustomerLink > .primary-link').should('be.visible')
    cy.get('#newCustomerLink > .primary-link').click()
    cy.get('#registration-form > :nth-child(1) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type(email)
    cy.get('#registration-form > :nth-child(2) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type('12345')
    cy.get('#repeatPasswordControl').type('12345')
    cy.get('.mat-mdc-form-field-type-mat-select > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click()
    cy.get('#mat-option-4 > .mdc-list-item__primary-text').click()
    cy.get('#securityAnswerControl').type('Juice Shop')
    cy.get('#registerButton > .mdc-button__label').click()
    cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label').should('be.visible')
    cy.get('h1').should('be.visible')
  })
})