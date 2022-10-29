describe('Credit Card Form', () => {
  it('should have been rendered correctly', () => {
    cy.visit('')
    cy.get('[data-testid="card-holder-name"]').should('be.visible')
    cy.get('[data-testid="card-number"]').should('be.visible')
    cy.get('[data-testid="card-valid-month"]').should('be.visible')
    cy.get('[data-testid="card-valid-year"]').should('be.visible')
    cy.get('[data-testid="card-cvc"]').should('be.visible')
    cy.get('[data-testid="card-form-button-submit"]').should('be.visible')
  })

  it('should have been rendered correctly', () => {
    cy.visit('')
    cy.get('[data-testid="card-holder-name"]').type('Alexandre Akira Enjiu')
    cy.get('[data-testid="card-number"]').type('4444 3333 2222 1111')
    cy.get('[data-testid="card-valid-month"]').type('09')
    cy.get('[data-testid="card-valid-year"]').type('30')
    cy.get('[data-testid="card-cvc"]').type('123')
    cy.get('[data-testid="card-form-button-submit"]').click()
  })
})