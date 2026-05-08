describe('template prueba juice shop', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/#/')
    cy.get('h1[_ngcontent-ng-c1761162471=""]').should('be.visible')
    cy.get('.cc-btn').click()
    cy.get('.mdc-button__label > .hide-lt-sm').click()
    cy.get('.hide-lt-sm').should('be.visible')
  })
})