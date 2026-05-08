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
    cy.get('#newCustomerLink > .primary-link').click()
    cy.get('#registration-form > :nth-child(1) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type(email)
    cy.get('#registration-form > :nth-child(2) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type('12345')
    cy.get('#repeatPasswordControl').type('12345')
    cy.get('.mat-mdc-form-field-type-mat-select > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').click()
    cy.get('#mat-option-4 > .mdc-list-item__primary-text').click()
    cy.get('#securityAnswerControl').type('Juice Shop')
    cy.get('#registerButton > .mdc-button__label').click()
    cy.get('[name="email"]').type(email)
    cy.get('[name="password"]').type('12345')
    cy.get('#rememberMe-input').click()
    cy.get('#loginButton > .mdc-button__label').click()
    cy.get('[style="left: 0px; width: calc(50% - 15px); margin-top: 0px; padding-top: calc(50% - 15px);"] > .mat-grid-tile-content > .mat-mdc-card > .mdc-card > .basket-btn-container > .mdc-button > .mdc-button__label').click()
    cy.get('.mdc-button.ng-star-inserted > .mdc-button__label > .hide-lt-md').click()
    cy.get('.mat-mdc-row > .cdk-column-product').should('be.visible')
  })
})