import 'cypress-axe';

describe('Accesibilidad - Home', () => {

  it('no debería tener errores críticos', () => {

    cy.visit('http://localhost:3000/#/search')

    // esperar contenido clave
    cy.get('#tbodyid').should('be.visible')

    cy.injectAxe()

    cy.checkA11y(null, {
      includedImpacts: ['critical', 'serious']
    })

  })

})
