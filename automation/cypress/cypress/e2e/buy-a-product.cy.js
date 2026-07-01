import HomePage from '../pages/HomePage'
import CreateEmail from '../pages/CreateEmail'
import SkipOverlay from '../pages/SkipOverlay'
import CreateAccount from '../pages/CreateAccount'
import AddAdress from '../pages/AddAdress'
import FillCreditCard from '../pages/FillCreditCard'


describe('template prueba juice shop', () => {
  const goHome = new HomePage();
  const create = new CreateEmail();
  const skip = new SkipOverlay();
  const createAccount = new CreateAccount();
  const fillAdress = new AddAdress();
  const fillCredit = new FillCreditCard();

  it('passes', () => {
    const email = create.create();

    goHome.goHomePage();

    skip.skip();

    createAccount.fill(email);


    cy.get(':nth-child(1) > .mat-mdc-card > .product > .footer > .mdc-button > .mdc-button__label').click()

    cy.get('[routerlink="/basket"] > .mdc-button__label > .hide-lt-md').click()

    cy.get('#checkoutButton > .mdc-button__label').click()

    cy.get('.add-new-address > .mdc-button > .mdc-button__label > span').click()

    fillAdress.fillAdress();
    cy.get('#mat-radio-42-input').click()
    cy.get('.btn-next > .mdc-button__label > span').click()

    cy.get('#mat-radio-44-input').click()
    cy.get('.nextButton > .mdc-button__label > span').click({ force: true })

    cy.get('#mat-expansion-panel-header-0').click()

    fillCredit.fill();
    cy.get('#submitButton > .mdc-button__label').click()
    cy.get('#mat-radio-46-input').click()
    cy.get('.nextButton > .mdc-button__label > span').click({ force: true })
    cy.get('.order-summary').should('be.visible')
    cy.get('#checkoutButton > .mdc-button__label > span').click()
    cy.get('.confirmation').should('be.visible')
  })
})