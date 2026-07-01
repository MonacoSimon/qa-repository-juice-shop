class AddAdress {
    fillAdress() {
        cy.get('#address').type('Calle Falsa 123')
        cy.get('#mat-input-15').type('Springfield')
        cy.get('#mat-input-11').type('3243244334')
        cy.get('#mat-input-12').type('1900')
        cy.get('#mat-input-10').type('dg 19')
        cy.get('#mat-input-9').type('Argentina')
        cy.get('#mat-input-14').type('arizona')
        cy.get('#submitButton > .mdc-button__label').click()
    }
}
export default AddAdress;