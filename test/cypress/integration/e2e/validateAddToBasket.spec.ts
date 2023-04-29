describe('Test sold out items', () => {
    beforeEach(() => {
      cy.login({
        email: 'admin',
        password: 'admin123'
      })
  
      cy.visit('/#/search')
    })
  
    it('Should filter and try to add to a basket products that are sold out', () => {
        cy.get('.mat-search_icon-search').type('OWASP Juice Shop "King of the Hill" Facemask {enter}');

        cy.get('[style="display: flex; justify-content: center;"] > .mat-focus-indicator').click();

        // Ensures that the modal which tells that the item is out of stock is displayed
        cy.get('.mat-simple-snack-bar-content').should('be.visible')
        .contains('We are out of stock! Sorry for the inconvenience.')
    })
  })
  