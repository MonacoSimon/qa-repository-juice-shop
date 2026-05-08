describe('template prueba juice shop', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/#/')

    cy.get('.cc-btn', { timeout: 10000 })
      .should('be.visible')
      .click()

    cy.get('.cc-window').should('not.be.visible')

    cy.contains('Dismiss')
      .should('be.visible')
      .click()
    cy.get('.mdc-button__label > .hide-lt-md').click()
    cy.get('#mat-radio-8 > .mdc-form-field > .mdc-label > .mat-body').click()
    cy.get('.heading > .ng-star-inserted').contains('Todos los Productos').should('be.visible')
  })
})