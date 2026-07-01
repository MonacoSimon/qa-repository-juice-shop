import HomePage from '../pages/HomePage'
import SkipOverlay from '../pages/SkipOverlay'
import CreateEmail from '../pages/CreateEmail'
import CreateAccount from '../pages/CreateAccount'
import AddAddress from '../pages/AddAdress'

describe('template prueba juice shop', () => {
  const homePage = new HomePage();
  const skipOverlay = new SkipOverlay();
  const create = new CreateEmail();
  const createAccount = new CreateAccount();
  const addAddress = new AddAddress();

  it('passes', () => {


    const email = create.create();

    homePage.goHomePage();

    skipOverlay.skip();

    createAccount.fill(email);

    cy.visit('http://localhost:3000/#/address/saved');

    cy.get('.add-new-address > .mdc-button > .mdc-button__label > span').click()

    addAddress.fillAdress();

    cy.visit('http://localhost:3000/#/recycle');

    cy.get('h1[_ngcontent-ng-c1578815911=""]').should('contain', 'Recycling')

    cy.get('#mat-input-17').type('1000')

    cy.get('#mat-radio-42-input').click()

    cy.get('#mat-mdc-checkbox-2-input').click()

    cy.get('.mat-mdc-form-field-has-icon-suffix > .mat-mdc-text-field-wrapper').click().type('2/13/2026');

    cy.get('#recycleButton > .mdc-button__label').click({ force: true })

    cy.get('.responsibility-header').should('contain', 'You hug trees. We save money. Win-win!')
  })
})