describe ('Testando to-do-list', () => {
   beforeEach ( () => {
      cy.visit('https://todomvc.com/examples/react/dist/');
 });
       
   it ('Entrando na pagina de teste', () => {
      cy.get('.header').contains('todos').should('to.have.lengthOf', 1)
   });

});
 