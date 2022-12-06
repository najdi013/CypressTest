describe('login page', () => {
  beforeEach(() => {
    cy.visit('https://publish-it.vercel.app/')
  })

  it('page loaded correctly', () => {
    cy.contains('PublishIT')
  })


  it.only('allows user to login and logut', () => {

    cy.get('[name="email"]').type("pat.najder@gmail.com");

    cy.get('[name="password"]').type("coś")

  })

})