class FillCreditCard {
    fill() {
        cy.get('#mat-input-16').type('tarjeta fake')
        cy.get('#mat-input-17').type('1112223334445556')
        cy.get('#mat-input-18').select('12')
        cy.get('#mat-input-19').select('2081')
    }
}
export default FillCreditCard;