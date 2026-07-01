import HomePage from '../pages/HomePage'
import CreateEmail from '../pages/CreateEmail';
import SkipOverlay from '../pages/SkipOverlay'
import CreateAccount from '../pages/CreateAccount';

describe('template prueba juice shop', () => {
  const goHome = new HomePage();
  const createEmail = new CreateEmail();
  const skip = new SkipOverlay();
  const create = new CreateAccount();

  it('passes', () => {
    const email = createEmail.create();
    goHome.goHomePage();

    skip.skip();

    create.fill(email);

    cy.get(':nth-child(1) > .mat-mdc-card > .product > .footer > .mdc-button > .mdc-button__label').click()
    cy.get('[routerlink="/basket"] > .mdc-button__label > .hide-lt-md').click()
    cy.get('.mat-mdc-row > .cdk-column-product').should('be.visible')
  })
})