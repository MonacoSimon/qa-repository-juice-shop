import HomePage from '../pages/HomePage'
import SkipOverlay from '../pages/SkipOverlay'

describe('template prueba juice shop', () => {
  const homePage = new HomePage();
  const skipOverlay = new SkipOverlay();

  it('passes', () => {
    homePage.goHomePage()
    skipOverlay.skip();

    cy.get('.hide-lt-sm').should('be.visible')
  })
})