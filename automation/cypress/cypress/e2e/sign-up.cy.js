import HomePage from '../pages/HomePage'
import CreateEmail from '../pages/CreateEmail'
import SkipOverlay from '../pages/SkipOverlay'
import CreateAccount from '../pages/CreateAccount'

describe('template prueba juice shop', () => {
  const homePage = new HomePage();
  const createEmail = new CreateEmail();
  const skipOverlay = new SkipOverlay();
  const createAccount = new CreateAccount();

  it('passes', () => {
    const email = createEmail.create();

    homePage.goHomePage();

    skipOverlay.skip();

    createAccount.fill(email);

    cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label').should('be.visible')
    cy.get('.hide-lt-sm').should('be.visible')
  })
})