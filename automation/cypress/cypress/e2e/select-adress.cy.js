import HomePage from '../pages/HomePage'
import CreateEmail from '../pages/CreateEmail'
import SkipOverlay from '../pages/SkipOverlay'
import CreateAccount from '../pages/CreateAccount'
import AddAddress from '../pages/AddAdress'

describe('template prueba juice shop', () => {
  const homePage = new HomePage();
  const create = new CreateEmail();
  const skipOverlay = new SkipOverlay();
  const createAccount = new CreateAccount();
  const addAddress = new AddAddress();

  it('passes', () => {
    const email = create.create();

    homePage.goHomePage();

    skipOverlay.skip();

    createAccount.fill(email);

    cy.visit('http://localhost:3000/#/address/saved');

    cy.get('.add-new-address > .mdc-button > .mdc-button__label > span').click()

    cy.get('h1').should('be.visible')

    addAddress.fillAdress();

    cy.get('.mat-mdc-row > .cdk-column-Address').should('contain', 'Calle Falsa 123')
  })
})