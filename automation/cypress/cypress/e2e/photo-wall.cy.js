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
    cy.get('.mdc-icon-button > .mat-icon').click()
    cy.get('[routerlink="/photo-wall"] > .mdc-list-item__content > .mat-mdc-list-item-unscoped-content > .menu-text').click()
    cy.get('#cdk-overlay-0').should('be.visible')
  })
})