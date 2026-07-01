import HomePage from "../pages/HomePage"
import SkipOverlay from "../pages/SkipOverlay";

describe('template test juice shop', () => {
  const goHome = new HomePage();
  const skip = new SkipOverlay();

  it('passes', () => {
    goHome.goHomePage();

    skip.skip();

    cy.get('.mdc-icon-button.mat-mdc-tooltip-trigger > .mat-icon').click()
    cy.get('[routerlink="/about"] > .mdc-list-item__content > .mat-mdc-list-item-unscoped-content > .menu-text').click()
    cy.get('.text-justify').should('be.visible')
  })
})