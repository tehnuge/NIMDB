describe('Logged Out User', () => {
  before(() => cy.exec('yarn reseed'))

  it('can view reviews in the feed', () => {
    cy.visit('/')
    cy.contains('NIMDB Reviews')
    cy.get('.review-tile').should('have.length', 2)
  })

  it('can click into a media to view review history', () => {
    cy.get('.review-tile').first().within(() => {
      cy.get('.media-link').click()
    })
    cy.contains('Titanic')
    cy.get('.review-tile').should('have.length', 1)
    cy.get('.back-btn').click()
  })

  it('cannot edit any reviews', () => {
    cy.get('a').should('not.contain', 'Edit')
  })

  it('cannot add a review', () => {
    cy.get('body').should('not.contain', 'Add Review')
  })

  it('has the option to sign in with Google', () => {
    cy.contains('Sign in with Google')
  })
})
