class CreateAccount {
    fill(email) {
        cy.get('#navbarAccount > .mdc-button__label > span').click()
        cy.get('.mat-mdc-menu-item-text > span').click()
        cy.wait(1000)
        cy.get('#newCustomerLink > .primary-link').click()
        cy.get('#registration-form > :nth-child(1) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type(email)
        cy.get('#registration-form > :nth-child(2) > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type('12345')
        cy.get('#repeatPasswordControl')
            .should('exist')
            .scrollIntoView()
            .type('12345', { force: true });
        cy.get('.mat-mdc-form-field-type-mat-select > .mat-mdc-text-field-wrapper').click()
        cy.get('#mat-option-4 > .mdc-list-item__primary-text').click()
        cy.get('#securityAnswerControl').type('Juice Shop')
        cy.get('#registerButton > .mdc-button__label').click()
        cy.get('[name="email"]').type(email)
        cy.get('[name="password"]').type('12345')
        cy.get('#rememberMe-input').click()
        cy.get('#loginButton > .mdc-button__label').click()
    }
}
export default CreateAccount;