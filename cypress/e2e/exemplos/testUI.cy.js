describe ('Testando to-do-list', () => {
   beforeEach (() => {
      cy.visit('https://example.cypress.io/todo');
});

it ('Entrando na pagina de teste', () => {
    cy.contains('todos').should('to.have.lengthOf', 1)
   });

   it ('Digitando no input e adicinando tarefa', () => {
      cy.get('[data-test="new-todo"]').type('Tarefa')
      cy.get('[data-test="new-todo"]').type('{enter}')

  });
});
 