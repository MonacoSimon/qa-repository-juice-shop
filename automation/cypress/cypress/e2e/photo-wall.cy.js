import HomePage from '../pages/HomePage'
import SkipOverlay from '../pages/SkipOverlay'

describe('template prueba juice shop', () => {
  const homePage = new HomePage();
  const skipOverlay = new SkipOverlay();

  it('passes', () => {
    homePage.goHomePage()

    skipOverlay.skip();

    cy.get('.mdc-icon-button.mat-mdc-tooltip-trigger > .mat-icon').click()
    cy.get('[routerlink="/photo-wall"] > .mdc-list-item__content > .mat-mdc-list-item-unscoped-content > .menu-text').click()
    cy.get('#cdk-overlay-0').should('be.visible')
  })
})