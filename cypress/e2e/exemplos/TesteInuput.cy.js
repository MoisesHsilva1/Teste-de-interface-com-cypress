describe('Testando o Input da pagina',() => {
    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/react/dist/')
});
 
    it ('Digitando no input e adicinando tarefa', () => {
        cy.get('[data-testid="text-input"]').type('Tarefa {enter}')

    });
});

