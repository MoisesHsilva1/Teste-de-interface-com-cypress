describe ('Testando to-do-list', () => {
it ('Entrando na pagina de teste', () => {
    cy.visit('https://example.cypress.io/todo');
    cy.contains('todos').should('to.have.lengthOf', 1)
   });
});
 