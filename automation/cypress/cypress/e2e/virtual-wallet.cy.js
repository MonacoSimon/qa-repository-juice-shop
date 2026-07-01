import HomePage from '../pages/HomePage'
import SkipOverlay from '../pages/SkipOverlay'
import CreateEmail from '../pages/CreateEmail'
import CreateAccount from '../pages/CreateAccount'
import FillCreditCard from '../pages/FillCreditCard'

describe('template prueba juice shop', () => {
  const homePage = new HomePage();
  const skipOverlay = new SkipOverlay();
  const createEmail = new CreateEmail();
  const createAccount = new CreateAccount();
  const fillCreditCard = new FillCreditCard();

  it('passes', () => {
    const email = createEmail.create();

    homePage.goHomePage();

    skipOverlay.skip();

    createAccount.fill(email);

    cy.get('.hide-lt-sm').should('be.visible')

    cy.get('#navbarAccount > .mdc-button__label > span').click()
    cy.get('[aria-label="Show Orders and Payment Menu"] > .mat-mdc-menu-item-text > span').click()
    cy.get('[routerlink="/wallet"] > .mat-mdc-menu-item-text > span').click()
    cy.get('h1').should('be.visible')
    cy.get('#mat-input-9').type('11')
    cy.get('#submitButton > .mdc-button__label').click()
    cy.get('.mat-expansion-panel-header-title').click()

    cy.get('#mat-input-10').type('fake name')
    cy.get('#mat-input-11').type('1112223334445556')
    cy.get('#mat-input-12').select('12')
    cy.get('#mat-input-13').select('2081')
    cy.get('#submitButton > .mdc-button__label').click({ force: true })

    cy.get('.mat-mdc-row > .cdk-column-Name').should('contain', 'fake name')

    cy.get('#mat-radio-42-input').click({ force: true })

    cy.get('.nextButton > .mdc-button__label > span').click({ force: true })

    cy.get('.confirmation').should('contain', '11.00')
  })
})