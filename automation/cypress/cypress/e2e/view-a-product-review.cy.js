import HomePage from '../pages/HomePage'
import SkipOverlay from '../pages/SkipOverlay'

describe('template prueba juice shop', () => {
  const homePage = new HomePage();
  const skipOverlay = new SkipOverlay();

  it('passes', () => {

    homePage.goHomePage();

    skipOverlay.skip();

    cy.get(':nth-child(1) > .mat-mdc-card > .product > .mat-mdc-tooltip-trigger > .image-container > .mat-mdc-card-image').click()

    cy.get('#mat-expansion-panel-header-0').click()

    cy.get('.review-row > .mat-mdc-tooltip-trigger').should('be.visible')
  })
})