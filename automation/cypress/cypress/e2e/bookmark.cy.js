import HomePage from '../pages/HomePage'

describe('template prueba juice shop', () => {
  const goHome = new HomePage();

  it('passes', () => {
    goHome.goHomePage();

    cy.get('.mdc-icon-button.mat-mdc-tooltip-trigger > .mat-icon').click()
    cy.get('[routerlink="/score-board"] > .mdc-list-item__content > .mat-mdc-list-item-unscoped-content').click({ force: true });
    cy.get('.options-group > :nth-child(1) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').should('be.visible')
  })
})