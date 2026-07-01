class SkipOverlay {
    skip() {
        cy.contains('Welcome to OWASP Juice Shop!', { timeout: 10000 })
            .should('be.visible');

        cy.get('.cdk-overlay-backdrop').click({ force: true });

        cy.get('.cc-window', { timeout: 10000 })
            .should('be.visible');
    }
}

export default SkipOverlay;