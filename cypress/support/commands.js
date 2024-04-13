Cypress.Commands.add('tarefa', (input) => {
    cy.get('[data-testid="text-input"]').type('Tarefa {enter}')
})
Cypress.Commands.add('tarefaSelecionada', (input) => {
    cy.get('[type="checkbox"]').check()
})