describe('Login with valid creds', () => {
    it('Sign in', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      .get('h2')
      .should('contain.text', 'Login Page')

      cy.get('#username')
        .type('tomsmith')

      cy.get('#password')  
        .type('SuperSecretPassword!')

      cy.get('.fa')
        .click()

      cy.get('h2')
      .should('contain.text', 'Secure Area')

      cy.get('.button')
        .click()

      cy.get('#flash')
        .should('contain.text', ' You logged out of the secure area!')

    });
});