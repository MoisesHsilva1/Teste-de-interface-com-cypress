Cypress.Commands.add('tarefa', (input) => {
    cy.get('[data-testid="text-input"]').type('Tarefa {enter}')
})
Cypress.Commands.add('TarefaconcluidaCheck', (input) => {
    cy.get('[type="checkbox"]').check()
})
Cypress.Commands.add('todasTarefaConluidas', (input) => {
    cy.get('[data-testid="toggle-all"]').click()
})


  
