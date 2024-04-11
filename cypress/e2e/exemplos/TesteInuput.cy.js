const { it } = require("mocha");

describe('Testando o Input da pagina', () => {
    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/react/dist/')
});
  
        Cypress.Commands.add('Addtarefa', (tarefa) => {
        cy.get('[data-testid="text-input"]').type('Tarefa {enter}')
        });
});

