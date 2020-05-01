describe('Logged In User', () => {
  before(() => cy.exec('yarn reseed'))

  it('can add a new review')
  it('can edit a previous review')
  it('cannot edit antoher users review')
  it('can log out of their session')
})
