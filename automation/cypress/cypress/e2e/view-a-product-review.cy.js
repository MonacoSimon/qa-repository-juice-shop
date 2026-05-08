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

    cy.get('[style="left: 0px; width: calc(50% - 15px); margin-top: 0px; padding-top: calc(50% - 15px);"] > .mat-grid-tile-content > .mat-mdc-card > .mdc-card > .mat-mdc-tooltip-trigger').click()
    cy.get('.mat-expansion-panel-header-title').click()
    cy.get('.review-row > .mat-mdc-tooltip-trigger').should('be.visible')
  })
})