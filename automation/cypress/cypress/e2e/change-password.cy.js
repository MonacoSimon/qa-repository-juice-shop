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

    homePage.goHomePage()

    skipOverlay.skip();

    createAccount.fill(email)

    cy.get('.heading > :nth-child(1)').should('be.visible')
    cy.get('#navbarAccount > .mdc-button__label > span').click()
    cy.wait(1000)
    cy.get('.mat-mdc-menu-content > [aria-label="Show Privacy and Security Menu"]').click()
    cy.get('[aria-label="Go to change password page"] > .mat-mdc-menu-item-text > span').click()
    cy.get('#mat-mdc-form-field-label-12 > mat-label').type('12345')
    cy.get('#newPassword').type('54321')
    cy.get('#mat-mdc-form-field-label-14 > mat-label').type('54321')
    cy.get('#changeButton > .mdc-button__label').click()
    cy.get('.confirmation').should('contain', 'Your password was successfully changed.')
  })
})