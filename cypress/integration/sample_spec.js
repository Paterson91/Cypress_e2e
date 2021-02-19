describe('Section 1: Getting to where you need to be', function () {
    it('Firstly navigate to your webpage', () => {
        cy.visit('http://example.cypress.io')
    })
})
describe('Section 1: Querying', function () {
    it('Navigate to `Querying` section', function (){    
        cy.contains('Querying').click({force: true})
        cy.url()
          .should('include', '/commands/querying')
    })
    it('Testing the elements of `Querying`', () => {
        cy.get('.query-btn').should('contain', 'Button')
        cy.get('[data-test-id="test-example"]').should('have.class', 'example')
        cy.get('.query-list')
          .contains('oranges').should('have.class', 'second')
            //.contains(/^a\w+/).should('have.class', 'first')                      // REGEX EXAMPLE
        cy.get('#querying')
          .contains('ul', 'oranges')
          .should('have.class', 'query-list')
        cy.get('.form-control').should('have.attr', 'placeholder', 'Name')
        cy.get('.query-form').within(() => {
            cy.get('input:first').should('have.attr', 'placeholder', 'Email')
           })
        cy.root().should('match','html')                                            //Check the root DOM
        cy.get('[data-cy=submit]').click()
    })
    it('Navigate back to root page', () => {
        cy.visit('https://example.cypress.io')
    })
})
describe('Section 2: Traversal', () => {                                            //Examples of traversing DOM elements 
    it('Firstly navigate to `Traversal` section', () => {
        cy.contains('Traversal').click({force:true})
    })
    it('Testing the elements of `Traversal`', () => {
        cy.get('.traversal-breadcrumb')
            .children('.active')
            .should('contain', 'Data')
        cy.get('.traversal-badge')
            .closest('ul')
            .should('have.class','list-group')
        cy.get('.traversal-list>li')
            .eq(2).should('contain','persian')
    })
    
})