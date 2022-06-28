describe('empty spec', () => {

  it('passes', () => {
    cy.visit(' http://localhost:3000')
  })
  it('This is test case 1',()=>{
    // cy.get('.[placeholder="Email"]').type('venkatesh888@gmail.com')
    // cy.get('[placeholder="Password"]').type('Venkey@9550')
    // cy.get('form > button')
    // cy.get('h1').contains('venkatesh888@gmail.com')
    // cy.get('button').click()
    cy.get('#email').type('venkatesh888@gmail.com')
    cy.get('#password').type('Venkey@9550')
    cy.get('#signin').click();
    cy.get('#email-user').contains("venkatesh888@gmail.com")
    cy.get('#logout').click();

  })
  it('This is test case 2',()=>{  
    // cy.get('[placeholder="Email"]').type('venkatesh888@gmail.com')
    // cy.get('[placeholder="Password"]').type('Venkey@9550')
    // cy.get('form > button')
    // cy.get('h1').contains('venkatesh888@gmail.com')
    // cy.get('button').click()
    cy.get('#email').type('munagala@gmail.com')
    cy.get('#password').type('Venkey@9550')
    cy.get('#signin').click();
    cy.get('#email-user').contains("munagala@gmail.com")
    cy.get('#logout').click();

  })
})