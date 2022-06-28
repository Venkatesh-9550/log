describe('login using wrong credentials', () => {

   beforeEach(()=>{
    cy.visit('http://localhost:3000')

   });
//    it("checks with incorrect password", () =>{
//     cy.get('#email').type('venkatesh888@gmail.com')
//     cy.get('#password').type('Venkey')
//     cy.get('#signin').click();
//     cy.on('.user-not',(t)=>{
//         expect(t).to.contains("wrong password");
//     });
//    });
   it("checks with incorrect mail", () =>{
    cy.get('#email').type('venkatesh888@gmail.c')
    cy.get('#password').type('Venke')
    cy.get('#signin').click();
    cy.on('.user-not',(t)=>{
        expect(t).to.contains("user-not-found");
    });
  
});
});