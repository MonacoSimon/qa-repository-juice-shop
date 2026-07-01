import HomePage from "../pages/HomePage"
import SkipOverlay from "../pages/SkipOverlay";

describe('template prueba juice shop', () => {
  const goHome = new HomePage();
  const skip = new SkipOverlay();

  it('passes', () => {
    goHome.goHomePage()

    skip.skip();

    cy.get('#navbarLanguageButton > .mdc-button__label > .hide-lt-md').click()
    cy.get('#mat-radio-8-input').click()
    cy.get('.heading > :nth-child(1)').contains('Todos los Productos').should('be.visible')
  })
})