describe ('Testando a funcicionalidade de adicionar tarefas varias vezes', () => {
    beforeEach( () => {
        cy.visit('https://todomvc.com/examples/react/dist/')
})
it.only('Submete a add tarefas e marca como conluidas e apaga-las', () => {
    Cypress._.times(5, () => {
        cy.tarefa()
    })   
   cy.log('Selecinando todas as tarefa commo concluidas')
        cy.todasTarefaConluidas()

   cy.log('Removendo as tarefas') 
       cy.get('.clear-completed').click()


  cy.log('Submete a add tarefa e nao concluidas e apaga-las')
    Cypress._.times(10, () => {
        cy.tarefa()
    })

  cy.log('limpando as tarefas um por uma')
   Cypress._.times(10, () => {
    cy.get('[data-testid="todo-item"]').eq(0).trigger('mouseover')
    cy.get('[data-testid="todo-item"]').eq(0).find('.destroy').invoke('show').click()
   })

  cy.log('Submete a add tarefa selecionar uma por uma como concluida e apaga-las uma por uma')
   Cypress._.times(15, () => {
    cy.tarefa()
   })
   Cypress._.times(15, () => {
    cy.selecionar
   })

  })
})