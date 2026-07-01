import CreateEmail from '../pages/CreateEmail'
import HomePage from '../pages/HomePage'
import SkipOverlay from '../pages/SkipOverlay'
import CreateAccount from '../pages/CreateAccount'

describe('template prueba juice shop', () => {
  const create = new CreateEmail();
  const homePage = new HomePage();
  const skip = new SkipOverlay();
  const createAccount = new CreateAccount();

  it('passes', () => {
    const email = create.create();

    homePage.goHomePage();

    skip.skip();

    createAccount.fill(email);

    cy.get('.hide-lt-sm').should('be.visible')
  })
})