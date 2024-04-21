describe('Testando Input', () => {
    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/react/dist/')
    });

    const tarefas = require('../fixtures/tarefas.json')
    tarefas.forEach(tarefas => {
        it ('Adicinando terafas corretamnete no campo de input', () => {
            cy.get('[data-testid="text-input"]').type('terafas.text-input{enter}')
        });
    });
});