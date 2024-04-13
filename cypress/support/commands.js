Cypress.Commands.add('tarefa', (input) => {
    cy.get('[data-testid="text-input"]').type('Tarefa {enter}')
})
Cypress.Commands.add('TarefaconcluidaCheck', (input) => {
    cy.get('[type="checkbox"]').check()
})
Cypress.Commands.add('todasTarefaConluidas', (input) => {
    cy.get('[data-testid="toggle-all"]').click()
})
Cypress.Commands.add('LimparUmaTarefa', (button) => {
    cy.get('[data-testid="todo-item"]').eq(0).trigger('mouseover')
    cy.get('[data-testid="todo-item"]').eq(0).find('.destroy').invoke('show').click()
})


  
