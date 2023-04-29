describe('Add and remove product from basket', () => {
    beforeEach(() => {
      cy.login({
        email: 'admin',
        password: 'admin123'
      })
    })
  
    it('Adds a product to the basket', () => {
        cy.visit('/#/search')

        cy.get('.mat-search_icon-search').type('Apple Juice (1000ml) {enter}');

        cy.get('[style="display: flex; justify-content: center;"] > .mat-focus-indicator').click();
    
        // ensure the modal for adding the product is displayed
        cy.get('.mat-snack-bar-container')              
          .contains('Placed Apple Juice (1000ml) into basket.')
          .should('exist');
      });
    
    it('Removes a product from the basket', () => {
        cy.visit('/#/basket')
        cy.get('.cdk-column-remove > .mat-focus-indicator').click();
        

        // Ensure the product is no longer in the basket
        cy.get('app-purchase-basket')
            .contains('Apple Juice (1000ml)')
            .should('not.exist');
    });
  })
